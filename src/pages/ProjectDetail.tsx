import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, Clock, Users, Briefcase, Target, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-display">Project not found</h1>
          <button onClick={() => navigate("/")} className="text-primary underline">
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-lg border border-border rounded-full text-sm font-medium hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-3 py-1 rounded-full ${project.accentBg}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl mb-2">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Meta */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
              <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                <p className="text-sm font-medium">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
              <Briefcase className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</p>
                <p className="text-sm font-medium">{project.role}</p>
              </div>
            </div>
            {project.team && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Team</p>
                  <p className="text-sm font-medium">{project.team}</p>
                </div>
              </div>
            )}
            {project.focus && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <Target className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Focus</p>
                  <p className="text-sm font-medium">{project.focus}</p>
                </div>
              </div>
            )}
          </div>

          {/* Prototype link */}
          {project.prototypeLink && (
            <a
              href={project.prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              View Prototype in Figma
            </a>
          )}

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.overview}</p>
          </div>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl">Challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl">Solution</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
          </div>

          {/* Process */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl">Process</h2>
            <ol className="space-y-4">
              {project.process.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Dynamic sections with images */}
          {project.sections.map((section, i) => (
            <div key={i} className="space-y-6">
              <h2 className="text-2xl md:text-3xl">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{section.content}</p>
              {section.image && (
                <div className="rounded-xl overflow-hidden border border-border">
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.title}
                    className="w-full object-cover"
                  />
                </div>
              )}
              {section.images && (
                <div className="grid gap-4">
                  {section.images.map((img, j) => (
                    <div key={j} className="rounded-xl overflow-hidden border border-border">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Back CTA */}
          <div className="pt-8 border-t border-border flex justify-between items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All projects
            </button>
            {(() => {
              const currentIndex = projects.findIndex((p) => p.id === id);
              const next = projects[(currentIndex + 1) % projects.length];
              return (
                <button
                  onClick={() => navigate(`/project/${next.id}`)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Next: {next.title} →
                </button>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
