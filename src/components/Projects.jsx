import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    slug: "kikkoman-recipe",
    title: "Kikkoman Recipe",
    desc: "カプセルを回して楽しくレシピと出会えるサイト。",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/recipe.png",
  },
  {
    slug: "suga-shrine",
    title: "Suga Shrine Guide",
    desc: "『君の名は。』聖地巡礼のフォトガイドUI。",
    tech: ["UI/UX", "Responsive", "Design"],
    image: "/projects/jinjya.png",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    desc: "API連携で現在の天気を表示するアプリ。",
    tech: ["React", "API"],
    image: "/projects/weather.png",
  },
  {
    slug: "osmo-lp",
    title: "Osmo Pocket LP",
    desc: "親子向けカメラ紹介LP（デザイン＋コーディング）。",
    tech: ["HTML", "UI/UX"],
    image: "/projects/osmo.png",
  },
  {
    slug: "message-board",
    title: "Message Board",
    desc: "投稿・表示など基本機能を学ぶ掲示板。",
    tech: ["JavaScript", "DOM"],
    image: "/projects/board.png",
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    desc: "制作物を紹介するポートフォリオサイト。",
    tech: ["React", "CSS"],
    image: "/projects/portfolio.png",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">
        My <span>Projects</span>
      </h2>
      <p className="projects__subtitle">A showcase of my recent work</p>

      <div className="projectsGrid">
        {projects.map((p) => (
          <article className="projectCard" key={p.slug}>
            <img className="projectImg" src={p.image} alt={p.title} />

            <div className="projectBody">
              <h3 className="projectTitle">{p.title}</h3>
              <p className="projectDesc">{p.desc}</p>

              <div className="techTags">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="projectButtons">
                <Link className="btn demoBtn" to={`/project/${p.slug}`}>
                  もっと見る
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}