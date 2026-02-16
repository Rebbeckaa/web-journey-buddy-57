import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, Clock, Users, Briefcase } from "lucide-react";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-display">Projektet hittades inte</h1>
          <button onClick={() => navigate("/")} className="text-primary underline">
            Tillbaka till startsidan
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
          Tillbaka
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
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Meta */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
              <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Tidsram</p>
                <p className="text-sm font-medium">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
              <Briefcase className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Roll</p>
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
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl">Översikt</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.overview}</p>
          </div>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl">Utmaning</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl">Lösning</h2>
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

          {/* Back CTA */}
          <div className="pt-8 border-t border-border flex justify-between items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Alla projekt
            </button>
            {/* Next project */}
            {(() => {
              const currentIndex = projects.findIndex((p) => p.id === id);
              const next = projects[(currentIndex + 1) % projects.length];
              return (
                <button
                  onClick={() => navigate(`/project/${next.id}`)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Nästa: {next.title} →
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
