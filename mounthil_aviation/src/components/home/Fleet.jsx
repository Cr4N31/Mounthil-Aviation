function Fleet() {
  const aircraft = [
    {
      name: "Bombardier Challenger 604",
      img: "/img/a11.webp",
      body: "An intercontinental business jet with spacious cabin comfort, strong mission range and seating for up to 12 passengers.",
      specs: ["8h endurance", "3,800nm range", "Mach 0.85", "114ft3 baggage"],
    },
    {
      name: "2000 Bombardier Learjet 45",
      img: "/img/b1.webp",
      body: "A high-performance executive jet with an 8-passenger cabin and Honeywell Primus 1000 avionics.",
      specs: [
        "Executive cabin",
        "Honeywell avionics",
        "Fast missions",
        "Charter ready",
      ],
    },
  ];

  return (
    <section className="bg-slate-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Fleet profile
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
              Aircraft highlights ready for your final gallery.
            </h2>
          </div>
          <a
            href="#contact"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:border-sky-600 hover:text-sky-700"
          >
            Request aircraft details
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {aircraft.map((item) => (
            <article
              key={item.name}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <img
                src={item.img}
                alt={item.name}
                className="mb-6 aspect-video w-full rounded-md object-cover"
              />
              <h3 className="text-2xl font-semibold text-slate-950">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {item.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fleet;
