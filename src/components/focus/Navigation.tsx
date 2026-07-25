import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";

const navLinks = [
  { label: "Featured", href: "#featured" },
  { label: "Albums", href: "#albums" },
  { label: "Yearbook", href: "#yearbook" },
  { label: "Packages", href: "#packages" },
  { label: "Journal", href: "#journal" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>


      <motion.nav
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 border-b-2 border-ink ${
          isScrolled ? "bg-paper/95 backdrop-blur py-3" : "bg-paper py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" aria-label="Focus — home" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-ink text-paper grid place-items-center">
              <Camera className="w-4 h-4" />
            </span>
            <span className="font-serif text-2xl tracking-tight text-ink leading-none">
              Focus<span className="text-stamp">.</span>
              <span className="hand text-highlight text-lg ml-2 align-baseline">campus</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] uppercase tracking-[0.22em] text-ink/75 hover:text-ink link-underline font-semibold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-stamp"
            >
              Reserve a shoot
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-ink"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-paper">
          <div className="container mx-auto px-6 py-5 flex items-center justify-between border-b-2 border-ink">
            <span className="font-serif text-2xl">Focus<span className="text-stamp">.</span></span>
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-140px)]">
            <ul className="space-y-6 text-center">
              {navLinks.concat([{ label: "Booking", href: "#booking" }]).map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="font-serif text-4xl hover:text-stamp">
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
