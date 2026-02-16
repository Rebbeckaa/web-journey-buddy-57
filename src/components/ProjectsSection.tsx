import { useEffect, useRef, useState } from "react";
import projectFoodApp from "@/assets/project-food-app.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectUnderbara from "@/assets/project-underbara.jpg";

const projects = [
  {
    title: "Food Delivery App",
    subtitle: "Skolprojekt",
    description:
      "Matleveransapp för unga vuxna med fokus på enkel navigering, allergifiltrering och snabb beställningsprocess.",
    tags: ["UI/UX", "UX Research", "User Testing"],
    duration: "3 veckor",
    image: projectFoodApp,
  },
  {
    title: "Cool Fashion",
    subtitle: "E-commerce Concept",
    description:
      "Modigt varumärkeskoncept för en svensk e-handelsplattform med fokus på att sticka ut – \"Våga Vara Annorlunda\".",
    tags: ["UI/UX", "Market Research", "Brand Design"],
    duration: "3 veckor",
    image: projectFashion,
  },
  {
    title: "Underbara Unge",
    subtitle: "WCAG 2.1 Redesign",
    description:
      "UX/UI-redesign med fokus på tillgänglighet enligt WCAG 2.1 AA. Förbättrad registrering, navigation och produktfiltrering.",
    tags: ["UI/UX", "Accessibility", "Prototyping"],
    duration: "Akademiskt projekt",
    image: projectUnderbara,
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`project-card group rounded-2xl overflow-hidden bg-card border border-border hover-lift cursor-pointer transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {project.subtitle} · {project.duration}
        </p>
        <h3 className="text-2xl">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Case Studies</p>
          <h2 className="text-4xl md:text-5xl mb-4">Utvalda projekt</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ett urval av akademiska och självinitierade projekt där jag fokuserat på användarcentrerad design.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
