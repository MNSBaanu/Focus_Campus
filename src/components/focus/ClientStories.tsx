import shootGala from "@/assets/shoot-gala.jpg";

const stories = [
  {
    quote:
      "Focus doesn't cover an event — they read it. Every image we received felt like it was waiting to happen.",
    name: "Amara Okafor",
    role: "Head of Brand, Metropolitan Trust",
  },
  {
    quote:
      "The gallery landed 36 hours after the last guest left. Press-ready, sequenced, and quietly cinematic.",
    name: "Julien Marceau",
    role: "Creative Director, House of Marceau",
  },
  {
    quote:
      "They photograph a keynote like it's a film. Our founder has never looked more like herself.",
    name: "Priya Raman",
    role: "Comms Lead, Northwind Labs",
  },
];

const ClientStories = () => {
  return (
    <section id="stories" className="relative py-28 md:py-36 border-t border-border/60 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 md:sticky md:top-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-gold" />
              <span className="eyebrow">Client stories</span>
            </div>
            <h2 className="heading-display text-4xl md:text-5xl mb-6">
              Words from the rooms we worked.
            </h2>
            <img
              src={shootGala}
              alt="Behind the scenes at a Focus shoot"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full aspect-[4/5] object-cover hidden md:block"
            />
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-10">
            {stories.map((s, i) => (
              <figure key={i} className="border-t border-border/60 pt-8">
                <div className="text-gold font-serif text-4xl leading-none mb-4">“</div>
                <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
                  {s.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-baseline gap-3">
                  <span className="text-foreground">{s.name}</span>
                  <span className="text-muted-foreground text-sm">— {s.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
