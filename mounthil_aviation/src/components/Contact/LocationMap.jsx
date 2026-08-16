import { useMemo, useState } from "react";
import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { locations } from "../../data/aviation";

function LocationMap() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((location) => location.id === activeId);

  const mapSrc = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(active.mapQuery)}&output=embed`,
    [active],
  );
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.mapQuery)}`;
  const whatsappLink = `https://wa.me/${active.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Contact
          </span>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            Two offices, one aviation support desk.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-md bg-white/10 p-1">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setActiveId(location.id)}
                  className={`rounded-md px-4 py-3 text-sm font-semibold transition ${
                    activeId === location.id ? "bg-white text-slate-950" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {location.label}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-sky-200" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">{active.label}</p>
                  <p className="mt-1 leading-relaxed text-slate-300">{active.address}</p>
                </div>
              </div>
              <a className="flex gap-3 font-semibold text-white" href={`tel:${active.phone.replace(/\s/g, "")}`}>
                <Phone className="h-5 w-5 text-sky-200" />
                {active.phone}
              </a>
              <a className="flex gap-3 font-semibold text-white" href={whatsappLink}>
                <MessageCircle className="h-5 w-5 text-sky-200" />
                WhatsApp {active.whatsapp}
              </a>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-500"
            >
              Find us on Google Map
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <iframe
              title={`${active.label} office map`}
              src={mapSrc}
              className="h-[520px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
