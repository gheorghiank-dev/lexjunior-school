#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ROOT = process.cwd();
const SRC_ROOT = path.join(PROJECT_ROOT, 'src');
const TENSES_REGISTRY_FILE = path.join(SRC_ROOT, 'modules/tenses/registry.js');
const WANT_JSON = process.argv.includes('--json');
const STRICT = process.argv.includes('--strict');
const CANONICAL_SECTIONS = [
  'affirmative',
  'negative',
  'interrogative',
  'uses',
  'time-expressions',
];

function issue(level, message, where = null) {
  return { level, message, where };
}

function addIssue(report, level, message, where = null) {
  report.issues.push(issue(level, message, where));
}

function toStatus(report) {
  const hasErrors = report.issues.some((entry) => entry.level === 'ERROR');
  const hasWarnings = report.issues.some((entry) => entry.level === 'WARN');
  return hasErrors ? 'ERROR' : hasWarnings ? 'WARN' : 'OK';
}

async function readText(filePath) {
  return fs.readFile(filePath, 'utf8');
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getRegistryModuleDirs() {
  const source = await readText(TENSES_REGISTRY_FILE);
  const importRegex = /from\s+["']\.\.\/([^/]+)\/[^"']+\.module\.jsx["']/g;
  const dirs = [];
  let match;
  while ((match = importRegex.exec(source))) {
    dirs.push(match[1]);
  }
  return Array.from(new Set(dirs));
}

async function listFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  return entries.filter((entry) => entry.isFile()).map((entry) => entry.name);
}

async function findSingleFile(dirPath, pattern) {
  const names = await listFiles(dirPath);
  return names.filter((name) => pattern.test(name));
}

function inferPrefix(moduleDir) {
  if (moduleDir === 'present-simple') return 'ps';
  if (moduleDir === 'present-continuous') return 'pc';
  if (moduleDir === 'past-simple') return 'past';
  return moduleDir;
}

function inferExpectedTitle(moduleDir) {
  return moduleDir
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function validateModuleDir(moduleDir, report) {
  const baseDir = path.join(SRC_ROOT, 'modules', moduleDir);
  const where = moduleDir;
  const prefix = inferPrefix(moduleDir);

  const manifestFiles = await findSingleFile(baseDir, /-manifest\.jsx$/);
  const moduleFiles = await findSingleFile(baseDir, /\.module\.jsx$/);
  const pathFiles = await findSingleFile(baseDir, /-paths\.js$/);
  const sectionPageFiles = await findSingleFile(baseDir, /-section-pages\.jsx$/);

  if (manifestFiles.length !== 1) {
    addIssue(report, 'ERROR', `Expected exactly 1 manifest file, found ${manifestFiles.length}.`, where);
    return;
  }
  if (moduleFiles.length !== 1) {
    addIssue(report, 'ERROR', `Expected exactly 1 module entry file, found ${moduleFiles.length}.`, where);
  }
  if (pathFiles.length !== 1) {
    addIssue(report, 'ERROR', `Expected exactly 1 paths file, found ${pathFiles.length}.`, where);
  }
  if (sectionPageFiles.length !== 1) {
    addIssue(report, 'ERROR', `Expected exactly 1 section-pages file, found ${sectionPageFiles.length}.`, where);
  }

  const manifestPath = path.join(baseDir, manifestFiles[0]);
  const manifestText = await readText(manifestPath);
  const sectionPagesPath = path.join(baseDir, sectionPageFiles[0]);
  const sectionPagesText = await readText(sectionPagesPath);

  const expectedTopRoutes = ['/overview', '/map', '/badge'];
  for (const suffix of expectedTopRoutes) {
    if (!manifestText.includes(`path: \`${'${'}${manifestText.includes('BASE_PATH') ? '' : ''}`)) {
      // noop; route checks below are string-based and safe for template usage
    }
  }

  if (!/createTenseRoutes\s*\(/.test(manifestText)) {
    addIssue(report, 'ERROR', 'Manifest does not use createTenseRoutes().', where);
  }

  if (!/topLevelRoutes\s*:\s*\[/.test(manifestText)) {
    addIssue(report, 'ERROR', 'Manifest is missing topLevelRoutes.', where);
  }

  for (const requiredToken of ['/overview', '/map', '/badge']) {
    if (!manifestText.includes(requiredToken)) {
      addIssue(report, 'ERROR', `Manifest is missing top-level route token '${requiredToken}'.`, where);
    }
  }

  if (!/roomRegistries\s*:/.test(manifestText)) {
    addIssue(report, 'ERROR', 'Manifest is missing roomRegistries.', where);
  }

  for (const sectionId of CANONICAL_SECTIONS) {
    if (!manifestText.includes(`"${sectionId}"`) && !manifestText.includes(`${sectionId}:`)) {
      addIssue(report, STRICT ? 'ERROR' : 'WARN', `Manifest does not reference section '${sectionId}'.`, where);
    }
  }

  const sensoryDeclared = /sensoryTheory\s*:/.test(sectionPagesText);
  const extraSectionRoutesDeclared = /getExtraSectionRoutes\s*:/.test(manifestText);
  if (sensoryDeclared && !extraSectionRoutesDeclared) {
    addIssue(report, 'WARN', 'Section pages declare sensoryTheory, but manifest has no getExtraSectionRoutes hook.', where);
  }

  const pagesDir = path.join(baseDir, 'pages');
  const roomsDir = path.join(baseDir, 'rooms');
  const theoryDir = path.join(baseDir, 'theory');
  const rootEntries = await fs.readdir(baseDir, { withFileTypes: true });
  const coreCandidates = rootEntries
    .filter((entry) => entry.isDirectory() && entry.name.endsWith('-core'))
    .map((entry) => entry.name);

  const coreDir = coreCandidates.length === 1
    ? path.join(baseDir, coreCandidates[0])
    : await exists(path.join(baseDir, `${prefix}-core`))
      ? path.join(baseDir, `${prefix}-core`)
      : await exists(path.join(baseDir, 'past-core'))
        ? path.join(baseDir, 'past-core')
        : null;

  if (coreCandidates.length > 1) {
    addIssue(report, 'WARN', `Module has multiple *-core folders: ${coreCandidates.join(', ')}.`, where);
  }

  const requiredPagePatterns = [/MapPage\.jsx$/, /OverviewPage\.jsx$/, /BadgePage\.jsx$/, /RoomRoute\.jsx$/, /Page\.jsx$/];
  const pageFiles = await listFiles(pagesDir);
  for (const pattern of requiredPagePatterns) {
    if (!pageFiles.some((name) => pattern.test(name))) {
      addIssue(report, 'ERROR', `Pages folder is missing a file matching ${pattern}.`, where);
    }
  }

  const roomFiles = await listFiles(roomsDir);
  const theoryFiles = await listFiles(theoryDir);
  for (const sectionId of CANONICAL_SECTIONS) {
    const sectionSlug = sectionId;
    if (!roomFiles.some((name) => name.includes(sectionSlug) && name.endsWith('-rooms.jsx'))) {
      addIssue(report, 'ERROR', `Rooms folder is missing registry file for '${sectionId}'.`, where);
    }
    if (!theoryFiles.some((name) => name.toLowerCase().includes(sectionSlug.replace('-', '')) || name.toLowerCase().includes(sectionSlug))) {
      addIssue(report, 'WARN', `Theory folder may be missing page for '${sectionId}'.`, where);
    }
  }

  const wrapperBase = moduleDir === 'present-simple'
    ? 'Ps'
    : moduleDir === 'present-continuous'
      ? 'Pc'
      : moduleDir === 'past-simple'
        ? 'PastSimple'
        : inferExpectedTitle(moduleDir).replace(/\s+/g, '');

  const wrapperNames = CANONICAL_SECTIONS.map((sectionId) => {
    const sectionTitle = sectionId
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    return `${wrapperBase}${sectionTitle}RoomFromRegistry.jsx`;
  });

  for (const wrapperName of wrapperNames) {
    if (!(await exists(path.join(baseDir, wrapperName)))) {
      addIssue(report, 'WARN', `Missing wrapper file '${wrapperName}'.`, where);
    }
  }

  if (coreDir) {
    const coreFiles = await listFiles(coreDir);
    const requiredCoreFiles = ['config.js', 'progress-manager.js', 'storage.js', 'theory-progress.js', 'useRoomEngine.js'];
    for (const fileName of requiredCoreFiles) {
      if (!coreFiles.includes(fileName)) {
        addIssue(report, 'ERROR', `Core folder is missing '${fileName}'.`, where);
      }
    }

    const optionalSymmetryFiles = ['hud.js', 'normalize-answer.js'];
    for (const fileName of optionalSymmetryFiles) {
      if (!coreFiles.includes(fileName)) {
        addIssue(report, 'WARN', `Core folder is missing optional symmetry file '${fileName}'.`, where);
      }
    }
  } else {
    addIssue(report, 'ERROR', 'Module has no recognizable *-core folder.', where);
  }

  const moduleEntryPath = path.join(baseDir, moduleFiles[0]);
  const moduleEntryText = await readText(moduleEntryPath);
  if (!/createTenseModule\s*\(/.test(moduleEntryText)) {
    addIssue(report, 'ERROR', 'Module entry does not use createTenseModule().', where);
  }
}

async function compareSymmetry(moduleDirs, report) {
  const canonical = moduleDirs[0];
  if (!canonical) return;
  const canonicalDir = path.join(SRC_ROOT, 'modules', canonical);
  const canonicalPages = (await listFiles(path.join(canonicalDir, 'pages'))).sort();
  const canonicalWrappers = (await listFiles(canonicalDir)).filter((name) => /RoomFromRegistry\.jsx$/.test(name)).sort();

  for (const moduleDir of moduleDirs.slice(1)) {
    const baseDir = path.join(SRC_ROOT, 'modules', moduleDir);
    const pageNames = (await listFiles(path.join(baseDir, 'pages'))).sort();
    const wrapperNames = (await listFiles(baseDir)).filter((name) => /RoomFromRegistry\.jsx$/.test(name)).sort();

    if (pageNames.length < canonicalPages.length - 2) {
      addIssue(report, 'WARN', `Pages folder is noticeably smaller than canonical module '${canonical}'.`, moduleDir);
    }

    if (wrapperNames.length !== canonicalWrappers.length) {
      addIssue(report, STRICT ? 'ERROR' : 'WARN', `Wrapper count differs from canonical module '${canonical}'.`, moduleDir);
    }
  }
}

async function main() {
  const report = {
    status: 'OK',
    strict: STRICT,
    validatedAt: new Date().toISOString(),
    moduleCount: 0,
    issues: [],
  };

  try {
    const moduleDirs = await getRegistryModuleDirs();
    report.moduleCount = moduleDirs.length;

    if (moduleDirs.length === 0) {
      addIssue(report, 'ERROR', 'No tense modules found in src/modules/tenses/registry.js.', 'registry');
    }

    for (const moduleDir of moduleDirs) {
      await validateModuleDir(moduleDir, report);
    }

    await compareSymmetry(moduleDirs, report);
    report.status = toStatus(report);

    if (WANT_JSON) {
      console.log(JSON.stringify(report, null, 2));
      process.exit(report.status === 'ERROR' ? 1 : 0);
    }

    console.log('\n=== Tense module validator ===\n');
    console.log(`Modules checked: ${report.moduleCount}`);
    console.log(`Status: ${report.status}\n`);
    if (report.issues.length === 0) {
      console.log('✓ No issues found.');
      process.exit(0);
    }
    for (const entry of report.issues) {
      const icon = entry.level === 'ERROR' ? '❌' : '⚠';
      const where = entry.where ? ` [${entry.where}]` : '';
      console.log(`${icon}${where} ${entry.message}`);
    }
    process.exit(report.status === 'ERROR' ? 1 : 0);
  } catch (error) {
    const payload = {
      status: 'ERROR',
      strict: STRICT,
      validatedAt: new Date().toISOString(),
      moduleCount: report.moduleCount,
      issues: [issue('ERROR', error?.message || String(error), 'validator')],
    };
    if (WANT_JSON) {
      console.log(JSON.stringify(payload, null, 2));
    } else {
      console.error('\n=== Tense module validator ===\n');
      console.error(`❌ [validator] ${payload.issues[0].message}`);
    }
    process.exit(1);
  }
}

main();
