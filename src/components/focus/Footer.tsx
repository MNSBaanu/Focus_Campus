import { Instagram, Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-paper pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Big signoff */}
        <div className="border-b border-paper/20 pb-14 mb-10">
          <p className="heading-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
            Your campus deserves a{" "}
            <span className="hand text-highlight text-6xl md:text-9xl italic">real photo album.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-highlight text-ink grid place-items-center">
                <Camera className="w-4 h-4" />
              </span>
              <span className="font-serif text-3xl">
                Focus<span className="text-stamp">.</span>
                <span className="hand text-highlight text-xl ml-2">campus</span>
              </span>
            </div>
            <p className="text-paper/70 max-w-md text-sm leading-relaxed">
              A student-run photography studio documenting university life
              across 84 campuses. Ink on paper, pixels on Instagram, memories
              on a shelf.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-highlight mb-4">The Zine</div>
            <ul className="space-y-2 text-paper/80 text-sm">
              {["Featured", "Albums", "Yearbook", "Packages", "Journal"].map((l) => (
                <li key={l}><a href="#" className="link-underline">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-highlight mb-4">Studio</div>
            <ul className="space-y-2 text-paper/80 text-sm">
              <li>hello@focus.campus</li>
              <li>+91 XXXXX XXXXX</li>
              <li>New Delhi, India</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-highlight mb-4">Semester dispatch</div>
            <p className="text-sm text-paper/70 mb-4">
              One issue a semester — recent shoots, playbooks for clubs, and open dates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex border-2 border-paper/40 focus-within:border-highlight">
              <input
                type="email"
                placeholder="you@campus.edu"
                className="flex-1 bg-transparent px-3 py-2.5 text-sm text-paper placeholder:text-paper/50 focus:outline-none"
              />
              <button type="submit" className="bg-highlight text-ink px-4 text-[11px] uppercase tracking-[0.22em] font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-paper/20 text-xs text-paper/60">
          <span>© {new Date().getFullYear()} Focus Campus Studio · All frames reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-highlight inline-flex items-center gap-2">
              <Instagram className="w-4 h-4" /> @focus.campus
            </a>
            <a href="#" className="hover:text-highlight">Privacy</a>
            <a href="#" className="hover:text-highlight">Licensing</a>
            <span className="hand text-lg text-highlight">Made on a campus, for campuses.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
