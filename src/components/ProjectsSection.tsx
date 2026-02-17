import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

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
      onClick={() => navigate(`/project/${project.id}`)}
      className={`project-card group rounded-2xl overflow-hidden bg-card border border-border hover-lift cursor-pointer transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </div>
        </div>
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
              className={`text-xs font-medium px-3 py-1 rounded-full ${project.accentBg}`}
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
          <h2 className="text-4xl md:text-5xl mb-4">Selected Work</h2>
          <p className="text-muted-foreground leading-relaxed">
            A selection of academic and self-initiated projects focused on user-centered design.
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
