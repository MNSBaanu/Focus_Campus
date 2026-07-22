import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Featured", href: "#featured" },
  { label: "Albums", href: "#albums" },
  { label: "Client Stories", href: "#stories" },
  { label: "Services", href: "#services" },
  { label: "Journal", href: "#journal" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2 h-2 bg-gold rounded-full group-hover:scale-125 transition-transform" />
            <span className="font-serif text-2xl tracking-tight text-foreground">
              Focus<span className="text-gold">.</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] uppercase tracking-[0.24em] text-foreground/70 hover:text-foreground link-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-2 border border-gold text-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] hover:bg-gold hover:text-primary-foreground"
            >
              Book a shoot
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background"
        >
          <div className="container mx-auto px-6 py-5 flex items-center justify-between">
            <span className="font-serif text-2xl">Focus<span className="text-gold">.</span></span>
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <ul className="space-y-7 text-center">
              {navLinks.concat([{ label: "Booking", href: "#booking" }]).map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-4xl hover:text-gold"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
