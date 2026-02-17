import { Mail, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">Contact</p>
          <h2 className="text-4xl md:text-5xl">
            Let's <span className="italic text-gradient">collaborate</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have an exciting project or just want to say hi? Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:rebecka@example.com"
              className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Send an email
            </a>
            <a
              href="https://www.linkedin.com/in/rebecka-rosqvist-753b9b247/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-border text-foreground rounded-full font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://bedecked-tractor-810.notion.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-border text-foreground rounded-full font-medium text-sm hover:bg-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Notion Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
