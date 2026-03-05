import React from "react";
import "./ProfilePage.css";

import Navbar from "./Navbar";
import AboutCards from "./AboutCards";
import Skills from "./Skills";
import Projects from "./Projects";

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <main className="profile">
        {/* ===== HERO ===== */}
        <section className="top" id="home">
          <div className="top__inner">
            <div className="top__left">
              <h1 className="top__name">HNIN YU YU KYAW</h1>
              <p className="top__role">フロントエンドエンジニア希望</p>

              <p className="top__catch">
                使う人の笑顔を大切に、心地よい体験を
                <br />
                一つひとつ丁寧に作ります。
              </p>

              <div className="top__btns">
                <a className="top__btn primary" href="#projects">
                  Projects
                </a>
                <a className="top__btn" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div className="top__right">
              <div className="top__photoCircle">
                <img src="/me.jpg" alt="HNIN profile" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <AboutCards />

        {/* ===== SKILLS ===== */}
        <Skills />

        {/* ===== PROJECTS ===== */}
        <Projects />

        {/* ===== CONTACT ===== */}
        <section className="contact" id="contact">
          <h2 className="sectionTitle">
            Contact <span>Me</span>
          </h2>

          <p className="contactText">
            お仕事のご相談・お問い合わせは、以下からお願いします。
          </p>

          <div className="contactLinks">
            <a href="mailto:yourmail@example.com" className="contactBtn">
              Email
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contactBtn primary"
            >
              GitHub
            </a>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} HNIN
        </footer>
      </main>
    </>
  );
}