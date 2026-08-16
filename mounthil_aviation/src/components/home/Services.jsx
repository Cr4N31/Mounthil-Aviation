import { useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      number: "01",
      label: "Aircraft Management",
      title: "Aircraft Management",
      description:
        "Ownership without operational stress: maintenance coordination, regulatory compliance, flight scheduling, crew operations and cost control.",
      cta: "Talk to our management team",
      image: "/img/22.webp",
    },
    {
      id: 2,
      number: "02",
      label: "Charter & Medevac",
      title: "Aircraft Charter & Medevac",
      description:
        "Private and business flight charters plus urgent medical evacuation support, coordinated for privacy, speed and comfort.",
      cta: "Book charter or emergency support",
      image: "/img/22.webp",
    },
    {
      id: 3,
      number: "03",
      label: "Crew Recruitment",
      title: "Crew Recruitment",
      description:
        "Sourcing, screening and placement for pilots, engineers, cabin crew and ground staff across aviation operations.",
      cta: "Enquire about crew recruitment",
      image: "/img/22.webp",
    },
    {
      id: 4,
      number: "04",
      label: "Aviation Consultancy",
      title: "Aviation Consultancy",
      description:
        "Strategic guidance across safety, operations, training and compliance for owners, operators and aviation businesses.",
      cta: "Schedule a consultation",
      image: "/img/22.webp",
    },
  ];

  const [activeId, setActiveId] = useState(2);
  const active = services.find((service) => service.id === activeId);

  return (
    <section id="services" className="border-t border-sky-600/20 bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-300">
            #1 aviation expertise
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Services built around safety, speed and privacy.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg md:aspect-auto">
            <img src={active.image} alt={active.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative flex h-full flex-col justify-end p-8">
              <h3 className="mb-3 text-2xl font-semibold text-white">{active.title}</h3>
              <p className="mb-5 max-w-sm text-sm leading-relaxed text-slate-200">{active.description}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition-colors hover:text-white">
                <span aria-hidden="true">-</span>
                {active.cta}
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 md:p-10">
            <ul>
              {services.map((service) => {
                const isActive = service.id === activeId;
                return (
                  <li key={service.id} className="border-t border-white/10 last:border-b">
                    <button
                      onClick={() => setActiveId(service.id)}
                      className="group flex w-full items-center gap-3 py-5 text-left"
                    >
                      {isActive && <span className="text-sky-300" aria-hidden="true">-</span>}
                      <span className={`text-sm font-medium ${isActive ? "text-sky-300" : "text-slate-400"}`}>
                        {service.number}
                      </span>
                      <span className={`font-medium transition-colors ${isActive ? "text-sky-200" : "text-white group-hover:text-sky-200"}`}>
                        {service.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-lg bg-white p-6 text-slate-950">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Booking placeholder
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Charter and medevac enquiry area</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                This space is ready for your booking form. It can hold route, date,
                aircraft type, passenger count and customer contact fields.
              </p>
              <Link
                to="/services"
                className="mt-5 inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                View service pages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
