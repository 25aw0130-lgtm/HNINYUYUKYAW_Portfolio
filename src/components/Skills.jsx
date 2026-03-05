import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skills = [
  { name: "Figma", icon: "/logos/figma.svg", percent: 90 },
  { name: "VS Code", icon: "/logos/vscode.svg", percent: 88 },
  { name: "React", icon: "/logos/react.svg", percent: 50 },
  { name: "Illustrator", icon: "/logos/illustrator.svg", percent: 80 },
  { name: "Photoshop", icon: "/logos/photoshop.svg", percent: 78 },
  { name: "GitHub", icon: "/logos/github.svg", percent: 82 },
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
          setAnimate(true);        // start animation
          observer.unobserve(el);  // run once (remove this line if you want repeat)
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
                <img src={s.icon} alt={s.name} />
              </div>
              <div className="skillInfo">
                <h3>{s.name}</h3>
                <span>{s.percent}%</span>
              </div>
            </div>

            <div className="skillBar">
              <div className="skillBarFill" style={{ width: animate ? `${s.percent}%` : "0%" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}