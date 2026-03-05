import React, { useState } from "react";
import "./AboutCards.css";

export default function AboutCards() {

  const cards = [
    {
      front: "👩‍💻 Who I Am",
      back: "ユーザー視点を大切にしたフロントエンドエンジニアを目指しています。"
    },
    {
      front: "🇯🇵 Why Japan",
      back: "日本の技術力とものづくり文化に魅力を感じ、日本で挑戦したいと思いました。"
    },
    {
      front: "💡 Why Web",
      back: "オンラインショッピングサイトをきっかけにWeb制作に興味を持ちました。"
    },
    {
      front: "⚡ My Strength",
      back: "行動力を大切にし、企画からデザイン、コーディングまで制作できます。"
    }
  ];

  const [flipped, setFlipped] = useState(null);

  return (
    <section className="aboutCards">
      <h2 className="aboutTitle">About <span>Me</span></h2>

      <div className="cardGrid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped === index ? "flipped" : ""}`}
            onClick={() => setFlipped(flipped === index ? null : index)}
          >
            <div className="cardInner">

              <div className="cardFront">
                <h3>{card.front}</h3>
                <p>Click to flip</p>
              </div>

              <div className="cardBack">
                <p>{card.back}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}