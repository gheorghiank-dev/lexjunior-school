import React from "react";
import { Link } from "react-router-dom";
import { getDefaultBrandAvatarSrc } from "../../modules/tenses/registry.js";

export default function HomePage() {
  return (
    <div className="home">
      <main className="page page-pastel">
        <section className="hero">
          <div>
            <div className="hero-highlight">
              <span>✨ Escape Room pentru engleză</span>
              <span>•</span>
              <span>by Anca &amp; Lex</span>
            </div>
            <h1 className="hero-title">
              Transformă engleza
              <br />
              într-o aventură cu camere și chei.
            </h1>
            <p className="hero-description">
              Lex Junior English Lab este un spațiu de joacă pentru învățarea
              limbii engleze: camere, chei, hartă și badge-uri. Fiecare temă de
              gramatică sau vocabular are propria ei mini-aventură, pentru ca{" "}
              <strong>Tu</strong> să înveți regulile prin joc, repetiție și
              feedback clar, astfel încât să ajungi să le folosești intuitiv.
            </p>
            <div className="btn-row">
              <Link to="/grammar" className="btn btn-hub">
                Începe aventura
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit">
              <div className="hero-lex">
                <img
                  src={getDefaultBrandAvatarSrc()}
                  alt="Lex Junior"
                />
              </div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <span className="hero-badge-label">
                  Present Simple • Escape in 7 rooms
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Secțiune cu regulile generale explicate de Lex Junior – 5 carduri */}
        <section className="lex-rules-section">
          <div className="lex-rules-grid">
            {/* Card 0 – Bine ai venit */}
            <section className="card lex-rules-card lex-rules-card--intro">
              <h2 className="card-title">
                🔑 Bine ai venit în Lex Junior Escape Room!
              </h2>
              <p className="ps-text">
                Hei! <br />
                Eu sunt <strong>Lex Junior</strong>{" "}
                <img
                  src={getDefaultBrandAvatarSrc()}
                  alt="Lex Junior"
                  className="lex-emoji"
                />
                , ghidul tău prin acest Escape Room de limba engleză 🔐.
              </p>

              <p className="ps-text">
                Îți explic, pe scurt, ce facem aici și cum funcționează totul,
                ca să știi exact cum să obții chei, să deschizi camere și să
                ajungi la badge-uri.
              </p>
            </section>

            {/* Card 1 – Ce este un escape room */}
            <section className="card lex-rules-card">
              <h3 className="lex-rules-section-title">
                1. Ce este un escape room?
              </h3>
              <p className="ps-text">
                Un <em>escape room</em> e un joc cu{" "}
                <strong>camere încuiate</strong>. În fiecare cameră ai de
                rezolvat o provocare. Ca să „treci” camera, ai nevoie de o{" "}
                <strong>cheie</strong>. Pe măsură ce strângi chei, te apropii de
                provocarea finală (badge-ul sau camera bonus).
              </p>
              <p className="ps-text">
                La mine, camerele nu sunt pline cu monștri 👾, ci cu{" "}
                <strong>exerciții de limba engleză</strong>. Când înțelegi bine
                structura exercițiului din acea cameră, eu îți dau{" "}
                <strong>cheia</strong> ei.
              </p>
            </section>

            {/* Card 2 – Ce vrem să facem cu Escape Room-ul */}
            <section className="card lex-rules-card">
              <h3 className="lex-rules-section-title">
                2. Ce vreau să facem în acest Escape Room?
              </h3>
              <p className="ps-text">
                Nu vreau doar să dai click-uri și să „treci nivele”. Vreau să:
              </p>
              <ul className="ps-list">
                <li>
                  înveți <strong>timpurile verbale în engleză</strong>,
                </li>
                <li>
                  vezi mai întâi <strong>teoria</strong>,
                </li>
                <li>
                  apoi să exersezi în <strong>camere interactive</strong>,
                </li>
                <li>
                  și, cu timpul, să folosești timpurile{" "}
                  <strong>natural, fără să te mai gândești la reguli</strong>.
                </li>
              </ul>
              <p className="ps-text">
                Formula mea secretă este:{" "}
                <strong>teorie + exerciții + chei + repetiție</strong> =
                timpurile rămân în cap pe bune 💪
              </p>
            </section>

            {/* Card 3 – Cum funcționează o cameră */}
            <section className="card lex-rules-card">
              <h3 className="lex-rules-section-title">
                3. Cum funcționează o cameră? (schema mea pe scurt)
              </h3>
              <ol className="ps-list lex-rules-steps">
                <li>
                  <strong>Rezolvi exercițiul.</strong> Citești cerințele și
                  completezi toate răspunsurile.
                </li>
                <li>
                  <strong>Verifici.</strong> Apeși pe{" "}
                  <strong>„Verifică”</strong>, iar eu îți arăt ce e corect și ce
                  e greșit și actualizez cercul de progres de sus, de lângă
                  numele camerei.
                </li>
                <li>
                  <strong>După verificare:</strong>
                  <ul className="ps-list lex-rules-sublist">
                    <li>
                      Dacă este <strong>prima ta verificare</strong> în cameră
                      și ai <strong>100%</strong>:
                      <br />– îți dau <strong>cheia camerei</strong>,<br />–{" "}
                      <strong>deschid camera următoare</strong>,<br />– îți pun
                      la dispoziție butonul{" "}
                      <strong>„Resetează pentru exersare”</strong> (poți să
                      refaci exercițiul doar ca să te antrenezi; cheia nu se
                      pierde).
                    </li>
                    <li>
                      Dacă ai mai puțin de <strong>100%</strong>:
                      <br />– poți corecta răspunsurile greșite și să apeși din
                      nou pe „Verifică” până ajungi la <strong>100%</strong>,
                      <br />– când ajungi la 100%,{" "}
                      <strong>deschid camera următoare</strong>, chiar dacă
                      deocamdată nu ai cheia,
                      <br />– dacă vrei cheia, folosești butonul{" "}
                      <strong>„Resetează pentru cheie”</strong> și mai încerci o
                      dată să obții <strong>100% din prima</strong>.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>După ce ai cheia</strong>, poți folosi oricând{" "}
                  <strong>„Resetează pentru exersare”</strong>: eu îți golesc
                  exercițiul ca să poți repeta, dar{" "}
                  <strong>cheia ta rămâne salvată</strong>.
                </li>
              </ol>
              <p className="ps-text" style={{ marginTop: "0.35rem" }}>
                Pe hartă îți arăt clar:
              </p>
              <ul className="ps-list">
                <li>🔒 camere blocate</li>
                <li>✅ camere deschise, dar fără cheie (încă)</li>
                <li>🔑 camere terminate cu cheia luată</li>
              </ul>
              <p className="ps-text">
                Te poți întoarce oricând într-o cameră fără cheie și apăsa{" "}
                <strong>„Resetează pentru cheie”</strong> ca să mai încerci o
                dată.
              </p>
            </section>

            {/* Card 4 – De ce 100% din prima */}
            <section className="card lex-rules-card">
              <h3 className="lex-rules-section-title">
                4. De ce te pun să ajungi la 100% din prima?
              </h3>
              <p className="ps-text">
                Nu ca să-ți fac viața grea 😄 Te rog să refaci exercițiile și să
                cauți <strong>100% din prima</strong> (după „Resetează pentru
                cheie”) pentru că:
              </p>
              <ul className="ps-list">
                <li>
                  de fiecare dată când vezi o greșeală și o corectezi, creierul
                  tău repetă structurile corecte,
                </li>
                <li>
                  când reușești să faci <strong>totul perfect din prima</strong>
                  , îți fixezi regula în memorie pe termen lung,
                </li>
              </ul>
              <p className="ps-text">
                Așa ajungi, cu timpul, să vezi o propoziție și să știi dintr-o
                privire:
                <br />
                <em>ce timp, ce formă și ce structură </em>trebuie să folosești.
              </p>
              <p className="ps-text">
                Ăsta e scopul meu: să ieși din Escape Room nu doar cu chei, ci
                cu <strong>engleză în minte și în reflexe</strong> 💡💜
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
