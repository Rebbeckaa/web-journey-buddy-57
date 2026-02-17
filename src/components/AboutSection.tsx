import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "UX Research",
    icon: "🔍",
    skills: ["User Interviews", "Usability Testing", "Personas & User Journeys"],
  },
  {
    title: "Design Tools",
    icon: "🧩",
    skills: ["Figma", "Adobe XD", "Balsamiq", "Canva"],
  },
  {
    title: "Prototyping",
    icon: "🎨",
    skills: ["Interactive Prototypes", "Wireframing", "User Flows"],
  },
  {
    title: "Collaboration",
    icon: "🤝",
    skills: ["Miro", "FigJam", "Notion", "GitHub", "Basic HTML/CSS"],
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">About Me</p>
          <h2 className="text-4xl md:text-5xl">
            Design with <span className="italic text-gradient">empathy</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            As a UX Design student, I'm building a solid foundation in user research, wireframing, and
            prototyping. I've worked on several academic and self-initiated projects where I focus on
            creating intuitive and accessible user experiences.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className={`p-6 rounded-xl bg-background border border-border text-left hover-lift transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-sm font-semibold mt-2 mb-3">{cat.title}</h3>
                <ul className="space-y-1">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
