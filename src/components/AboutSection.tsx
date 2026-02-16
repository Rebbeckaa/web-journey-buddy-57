import { useEffect, useRef, useState } from "react";

const skills = [
  { label: "User Research", icon: "🔍" },
  { label: "Wireframing", icon: "✏️" },
  { label: "Prototyping", icon: "🎨" },
  { label: "Figma", icon: "🖌️" },
  { label: "Usability Testing", icon: "🧪" },
  { label: "WCAG / Accessibility", icon: "♿" },
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
          <p className="text-sm font-medium tracking-widest uppercase text-primary">Om mig</p>
          <h2 className="text-4xl md:text-5xl">
            Design med <span className="italic text-gradient">empati</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Som UX Design-student bygger jag en solid grund inom user research, wireframing och
            prototyping. Jag har arbetat med flera akademiska och självinitierade projekt där jag
            fokuserar på att skapa intuitiva och tillgängliga användarupplevelser.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className={`p-4 rounded-xl bg-background border border-border text-center hover-lift transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <span className="text-2xl block mb-2">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
