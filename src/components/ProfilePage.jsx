import React from "react";
import "./ProfilePage.css";
import Navbar from "./Navbar";
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
              <p className="nameFurigana">ニン ユ　ユ チョ</p>
              <h1 className="top__name">HNIN YU YU KYAW</h1>
              <p className="top__role">フロントエンドエンジニア</p>

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
        <section className="about" id="about">
          <h2 className="sectionTitle">
            About <span>Me</span>
          </h2>

          <div className="about__box">

            {/* Left text */}
            <div className="about__text">
              <p>
                私は、ユーザー視点を大切にしたフロントエンド開発を強みとするフロントエンドエンジニアです。
                日本に来た理由は、日本の高い技術力とものづくり文化に強い尊敬の気持ちを抱いていたからです。
                より成長できる環境で自分を試したいという思いから、新しい言語や文化の中に飛び込みました。
              </p>

              <p>
                もともとオンラインショッピングアプリやWebサイトを利用することが好きで、
                「どうしてこんなに使いやすいのだろう」「この画面はどのように作られているのだろう」
                と興味を持つようになりました。利用者として楽しむだけでなく、
                「私も人をワクワクさせるサービスを作りたい」と思ったことが、
                Webデザイン科を選んだきっかけです。
                母国の大学ではWebとは異なる分野を学んでいましたが、
                本当にやりたいことに正直になり、新しい分野へ挑戦する決意をしました。
                異分野からのスタートでしたが、行動力を持って学び続け、
                着実にスキルを身につけてきました。
              </p>
            </div>

            <div className="about__infoRow">
              <div className="about__item">
                <span className="about__icon">🎓</span>
                <div>
                  <h3>School</h3>
                  <p>日本電子専門学校</p>
                </div>
              </div>

              <div className="about__item">
                <span className="about__icon">💻</span>
                <div>
                  <h3>Department</h3>
                  <p>Webデザイン科</p>
                </div>
              </div>

              <div className="about__item">
                <span className="about__icon">⚡</span>
                <div>
                  <h3>Strength</h3>
                  <p>行動力・コミュニケーション力</p>
                </div>
              </div>

              <div className="about__item">
                <span className="about__icon">🌏</span>
                <div>
                  <h3>Language</h3>
                  <p>日本語 ・ 英語 ・ ミャンマー語</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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