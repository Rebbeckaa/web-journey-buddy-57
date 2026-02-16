import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              UX Designer · Sverige
            </p>
            <h1 className="text-5xl md:text-7xl leading-[1.1] opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Hej, jag är{" "}
              <span className="text-gradient italic">Rebecka</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              UX Design-student med fokus på att skapa intuitiva och tillgängliga användarupplevelser genom research, wireframing och prototyping.
            </p>
            <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Se mina projekt
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border border-border text-foreground rounded-full font-medium text-sm hover:bg-secondary transition-colors"
              >
                Kontakta mig
              </button>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative flex justify-center opacity-0 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-80 md:w-96">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] rotate-3 transition-transform duration-500 hover:rotate-6" />
              <img
                src={heroPortrait}
                alt="Rebecka – UX Designer"
                className="relative rounded-[2rem] w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
