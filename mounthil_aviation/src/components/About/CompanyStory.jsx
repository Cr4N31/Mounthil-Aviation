import { ShieldCheck, Sparkles, Timer } from "lucide-react";

function CompanyStory() {
  const qualities = [
    { icon: ShieldCheck, label: "Safety-led operations" },
    { icon: Timer, label: "Fast private booking support" },
    { icon: Sparkles, label: "Discreet premium handling" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            About Mounthill
          </span>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            Aviation service with the quiet confidence private flyers expect.
          </h1>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-slate-600">
            Mounthill Aviation Resource Services provides aircraft management,
            charter services, medical evacuation, crew recruitment and aviation
            consultancy. The company is built for clients who need privacy,
            speed, operational clarity and dependable aviation support within
            Nigeria and beyond.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {qualities.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 p-5">
                <item.icon className="h-6 w-6 text-sky-700" />
                <p className="mt-4 text-sm font-semibold text-slate-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyStory;
