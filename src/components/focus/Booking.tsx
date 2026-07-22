import { useState } from "react";
import { toast } from "sonner";
import shootGala from "@/assets/shoot-gala.jpg";

const eventTypes = ["Gala", "Conference", "Festival", "Runway", "Launch", "Other"];

const Booking = () => {
  const [type, setType] = useState("Gala");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Booking enquiry:", { ...data, type });
    toast.success("Enquiry received — we'll be in touch within 24 hours.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="relative py-28 md:py-36 bg-background border-t border-border/60 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden mb-8">
              <img
                src={shootGala}
                alt="A Focus shoot in progress"
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-gold" />
              <span className="eyebrow">Booking</span>
            </div>
            <h2 className="heading-display text-5xl md:text-6xl mb-6">
              Tell us about <em className="italic text-gold">the room.</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A short brief is enough to start. We reply personally within 24 hours
              with availability, references, and a proposal.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-6 md:col-start-7 border border-border p-8 md:p-10 bg-secondary/20 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Organisation" name="org" />
              <Field label="Event date" name="date" type="date" />
            </div>

            <div>
              <label className="eyebrow block mb-3">Event type</label>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                      type === t
                        ? "bg-gold text-primary-foreground border-gold"
                        : "border-border text-foreground/70 hover:border-gold hover:text-gold"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="eyebrow block mb-2" htmlFor="brief">A short brief</label>
              <textarea
                id="brief"
                name="brief"
                rows={4}
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                placeholder="Venue, guest count, tone, references…"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-primary-foreground py-4 text-[11px] uppercase tracking-[0.28em] hover:opacity-90"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="eyebrow block mb-2" htmlFor={name}>
      {label}
      {required && <span className="text-gold"> *</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none"
    />
  </div>
);

export default Booking;
