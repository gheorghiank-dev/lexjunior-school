# Core registry utilities

This folder contains experimental helpers for future refactors of the
Lex Junior tense/room registry system.

## room-registry-builder.js

Goal: provide a standard way to define and validate room registries
for each tense (Present Simple, Present Continuous, Past Simple, etc.).

Status (2026-02): **not used in runtime yet**.  
The current tenses still use manual room registries (see each tense's
`rooms/` folder).

When we start adding many more tenses, we can:

- migrate the existing room registries to use these helpers;
- add a small validation script that runs in CI / pre-commit.
