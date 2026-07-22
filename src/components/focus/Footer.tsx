import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/60 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="font-serif text-3xl">Focus<span className="text-gold">.</span></span>
            </div>
            <p className="heading-display text-3xl md:text-4xl leading-[1.05] max-w-md">
              Event photography, edited like a magazine.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4">Studio</div>
            <ul className="space-y-2 text-foreground/80">
              {["Featured", "Albums", "Client stories", "Services", "Journal"].map((l) => (
                <li key={l}><a href="#" className="link-underline">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4">Contact</div>
            <ul className="space-y-2 text-foreground/80">
              <li>studio@focus.press</li>
              <li>+1 (212) 555 0184</li>
              <li>72 Franklin St, NYC</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Newsletter</div>
            <p className="text-sm text-muted-foreground mb-4">
              One dispatch a month — recent shoots, notes from the field.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex border border-border focus-within:border-gold">
              <input
                type="email"
                placeholder="you@studio.com"
                className="flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none"
              />
              <button className="bg-gold text-primary-foreground px-4 text-[11px] uppercase tracking-[0.22em]">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border/60 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Focus Studio. All frames reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold inline-flex items-center gap-2">
              <Instagram className="w-4 h-4" /> @focus.studio
            </a>
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
