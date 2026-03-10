import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { Icon } from "@iconify/react";

const skills = [
  { name: "Figma", icon: "logos:figma", percent: 90 },
  { name: "VS Code", icon: "logos:visual-studio-code", percent: 90 },
  { name: "React", icon: "logos:react", percent: 50 },
  { name: "Illustrator", icon: "logos:adobe-illustrator", percent: 80 },
  { name: "Photoshop", icon: "logos:adobe-photoshop", percent: 78 },
  { name: "GitHub", icon: "logos:github-icon", percent: 82 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <h2 className="skills__title">
        My <span>Skills</span>
      </h2>
      <p className="skills__subtitle">Tools & technologies I use</p>

      <div className="skillsGrid">
        {skills.map((s) => (
          <div className="skillCard" key={s.name}>
            <div className="skillHeader">
              <div className="skillIconBox">
                <Icon icon={s.icon} width="42" height="42" />
              </div>

              <div className="skillInfo">
                <h3>{s.name}</h3>
                <span>{s.percent}%</span>
              </div>
            </div>

            <div className="skillBar">
              <div
                className="skillBarFill"
                style={{ width: animate ? `${s.percent}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}