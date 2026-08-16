import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({ service, tone = "light" }) {
  const dark = tone === "dark";

  return (
    <section
      id={service.id}
      className={`scroll-mt-28 rounded-lg p-6 md:p-8 ${
        dark ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-950"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <span className={`text-sm font-semibold ${dark ? "text-sky-200" : "text-sky-700"}`}>
            {service.number}
          </span>
          <h2 className="mt-3 text-3xl font-semibold">{service.title}</h2>
        </div>
        <Link
          to="/contact"
          className={`hidden rounded-md p-3 sm:block ${
            dark ? "bg-white text-slate-950" : "bg-slate-950 text-white"
          }`}
          aria-label={`Enquire about ${service.title}`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <p className={`mt-5 max-w-3xl text-base leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {service.summary}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {service.highlights.map((highlight) => (
          <div key={highlight} className={`flex items-center gap-3 rounded-md p-3 ${dark ? "bg-white/5" : "bg-slate-50"}`}>
            <CheckCircle2 className={`h-5 w-5 ${dark ? "text-sky-200" : "text-sky-700"}`} />
            <span className="text-sm font-semibold">{highlight}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceCard;
