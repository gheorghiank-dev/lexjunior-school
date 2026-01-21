import React from "react";
import { Link } from "react-router-dom";
import { psNotesPath } from "./ps-paths.js";

/**
 * Pagina de downloads pentru modulul Present Simple – varianta React.
 *
 * Deocamdată:
 * - Folosim PDF-urile existente din /public/pdf/present-simple
 * - Păstrăm structura pe "diamant":
 *   Row 1: Teorie + My Notes
 *   Row 2: Afirmativ / Interogativ / Negativ
 *   Row 3: Uses / Time Expressions
 *   Row 4: Camera finală
 *
 * IMPORTANT:
 * - Link-urile merg spre /pdf/present-simple/... ca să folosească exact aceleași fișiere ca în modulul vechi.
 */

export default function PsDownloadsPage() {
  return (
    <div>
      <header style={{ marginBottom: "1.75rem" }}>
        <h1 style={{ marginBottom: "0.5rem" }}>Present Simple – Downloads</h1>
        <p style={{ maxWidth: "640px", color: "var(--color-text-muted)" }}>
          Aici găsești toate fișele de lucru și teoria pentru modulul Present
          Simple: camerele din Escape Room, camera comorii și o fișă specială de
          notițe.
        </p>
      </header>

      {/* Row 1: Teorie + My Notes */}
      <section style={{ marginBottom: "1.75rem" }}>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Teoria mea – Present Simple</div>
            <p className="card-description">
              PDF-ul complet cu teoria pentru Present Simple (afirmativ,
              negativ, interogativ), perfect pentru recapitulare sau predare.
            </p>
            <div className="btn-row">
              <a
                href="/pdf/present-simple/Teorie Present Simple.pdf"
                className="btn btn-primary"
                download
              >
                Descarcă teoria
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-title">My Present Simple Notes</div>
            <p className="card-description">
              O pagină specială unde elevul își poate scrie propriile exemple,
              întrebări și idei despre Present Simple – print sau direct în
              browser.
            </p>
            <div className="btn-row">
              <Link
                to={psNotesPath()}
                className="btn btn-outline"
              >
                Deschide My Notes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: Afirmativ / Interogativ / Negativ */}
      <section style={{ marginBottom: "1.75rem" }}>
        <div className="card-grid">
          {/* Afirmativ */}
          <div className="card">
            <div className="card-title">
              Fișe de exerciții – camere Afirmativ
            </div>
            <p className="card-description">
              Alege fișele de lucru pentru camerele Afirmativ din Escape Room –
              câte o fișă pentru fiecare cameră.
            </p>
            <ul className="ps-mini-list">
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Affirmative-Room1-Exercise.pdf"
                  download
                >
                  Camera 1 – Afirmativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Affirmative-Room2-Exercise.pdf"
                  download
                >
                  Camera 2 – Afirmativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Affirmative-Room3-Exercise.pdf"
                  download
                >
                  Camera 3 – Afirmativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Affirmative-Room4-Exercise.pdf"
                  download
                >
                  Camera 4 – Afirmativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Affirmative-Room5-Exercise.pdf"
                  download
                >
                  Camera 5 – Afirmativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Affirmative-Room6-Exercise.pdf"
                  download
                >
                  Camera 6 – Afirmativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Affirmative-Room7-Exercise.pdf"
                  download
                >
                  Camera 7 – Afirmativ (fișă de exerciții)
                </a>
              </li>
            </ul>
          </div>

          {/* Interogativ */}
          <div className="card">
            <div className="card-title">
              Fișe de exerciții – camere Interogativ
            </div>
            <p className="card-description">
              Alege fișele de lucru pentru camerele Interogativ din Escape Room
              – câte o fișă pentru fiecare cameră.
            </p>
            <ul className="ps-mini-list">
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Interrogative-Room1-Exercise.pdf"
                  download
                >
                  Camera 1 – Interogativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Interrogative-Room2-Exercise.pdf"
                  download
                >
                  Camera 2 – Interogativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Interrogative-Room3-Exercise.pdf"
                  download
                >
                  Camera 3 – Interogativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Interrogative-Room4-Exercise.pdf"
                  download
                >
                  Camera 4 – Interogativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Interrogative-Room5-Exercise.pdf"
                  download
                >
                  Camera 5 – Interogativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Interrogative-Room6-Exercise.pdf"
                  download
                >
                  Camera 6 – Interogativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Interrogative-Room7-Exercise.pdf"
                  download
                >
                  Camera 7 – Interogativ (fișă de exerciții)
                </a>
              </li>
            </ul>
          </div>

          {/* Negativ */}
          <div className="card">
            <div className="card-title">Fișe de exerciții – camere Negativ</div>
            <p className="card-description">
              Alege fișele de lucru pentru camerele Negativ din Escape Room –
              câte o fișă pentru fiecare cameră.
            </p>
            <ul className="ps-mini-list">
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Negative-Room1-Exercise.pdf"
                  download
                >
                  Camera 1 – Negativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Negative-Room2-Exercise.pdf"
                  download
                >
                  Camera 2 – Negativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Negative-Room3-Exercise.pdf"
                  download
                >
                  Camera 3 – Negativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Negative-Room4-Exercise.pdf"
                  download
                >
                  Camera 4 – Negativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Negative-Room5-Exercise.pdf"
                  download
                >
                  Camera 5 – Negativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Negative-Room6-Exercise.pdf"
                  download
                >
                  Camera 6 – Negativ (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Negative-Room7-Exercise.pdf"
                  download
                >
                  Camera 7 – Negativ (fișă de exerciții)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Row 3: Uses / Time Expressions */}
      <section style={{ marginBottom: "1.75rem" }}>
        <div className="card-grid">
          {/* Uses */}
          <div className="card">
            <div className="card-title">
              Fișe de exerciții – camere Întrebuințări
            </div>
            <p className="card-description">
              Alege fișele de lucru pentru camerele de Întrebuințări din Escape
              Room – câte o fișă pentru fiecare cameră.
            </p>
            <ul className="ps-mini-list">
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Uses-Room1-Exercise.pdf"
                  download
                >
                  Camera 1 – Întrebuințări (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Uses-Room2-Exercise.pdf"
                  download
                >
                  Camera 2 – Întrebuințări (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Uses-Room3-Exercise.pdf"
                  download
                >
                  Camera 3 – Întrebuințări (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Uses-Room4-Exercise.pdf"
                  download
                >
                  Camera 4 – Întrebuințări (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Uses-Room5-Exercise.pdf"
                  download
                >
                  Camera 5 – Întrebuințări (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Uses-Room6-Exercise.pdf"
                  download
                >
                  Camera 6 – Întrebuințări (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Uses-Room7-Exercise.pdf"
                  download
                >
                  Camera 7 – Întrebuințări (fișă de exerciții)
                </a>
              </li>
            </ul>
          </div>

          {/* Time Expressions */}
          <div className="card">
            <div className="card-title">
              Fișe de exerciții – camere Expresii de timp
            </div>
            <p className="card-description">
              Alege fișele de lucru pentru camerele cu Expresii de timp din
              Escape Room – câte o fișă pentru fiecare cameră.
            </p>
            <ul className="ps-mini-list">
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Time-Expressions-Room1-Exercise.pdf"
                  download
                >
                  Camera 1 – Expresii de timp (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Time-Expressions-Room2-Exercise.pdf"
                  download
                >
                  Camera 2 – Expresii de timp (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Time-Expressions-Room3-Exercise.pdf"
                  download
                >
                  Camera 3 – Expresii de timp (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Time-Expressions-Room4-Exercise.pdf"
                  download
                >
                  Camera 4 – Expresii de timp (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Time-Expressions-Room5-Exercise.pdf"
                  download
                >
                  Camera 5 – Expresii de timp (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Time-Expressions-Room6-Exercise.pdf"
                  download
                >
                  Camera 6 – Expresii de timp (fișă de exerciții)
                </a>
              </li>
              <li>
                <a
                  href="/pdf/present-simple/Present-Simple-Time-Expressions-Room7-Exercise.pdf"
                  download
                >
                  Camera 7 – Expresii de timp (fișă de exerciții)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Row 4: Camera finală */}
      <section>
        <div className="card-grid">
          <div className="card">
            <div className="card-title">Camera comorii – materiale finale</div>
            <p className="card-description">
              Fișa de exerciții pentru Camera finală (Camera comorii), ideală
              pentru recapitulare, test sau lucru diferențiat.
            </p>
            <div className="btn-row">
              <a
                href="/pdf/present-simple/Present-Simple-Final-Challenge-Exercises.pdf"
                className="btn btn-primary"
                download
              >
                Descarcă fișa camerei finale
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
