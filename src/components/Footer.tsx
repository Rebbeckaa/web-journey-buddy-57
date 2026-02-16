const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg">
          Rebecka<span className="text-primary">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rebecka Rosqvist. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
