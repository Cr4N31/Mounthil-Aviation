function BombardierFeature() {
  const specs = ["8h endurance", "3,800nm range", "Mach 0.85 max speed", "Up to 12 passengers"];

  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:px-8">
        <div className="overflow-hidden rounded-lg">
          <img src="/img/22.webp" alt="Bombardier Challenger 604" className="h-full min-h-80 w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-200">
            Bombardier Challenger 604
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            A recurring fleet highlight for intercontinental business comfort.
          </h2>
          <p className="mt-5 leading-relaxed text-slate-300">
            The Challenger 604 is known for its spacious 8.2ft-wide cabin,
            strong 3,800nm range and flexible business or leisure mission profile.
            Mounthill positions it around expert maintenance, scheduling,
            compliance and charter support.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {specs.map((spec) => (
              <span key={spec} className="rounded-md bg-white/10 px-4 py-3 text-sm font-semibold">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BombardierFeature;
