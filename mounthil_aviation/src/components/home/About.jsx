function About() {
  const points = [
    "Aircraft readiness, scheduling and compliance support",
    "Private and business charter coordination across Nigeria",
    "Urgent medical evacuation planning with reliable response",
    "Crew recruitment and aviation consultancy for operators",
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            About Mounthill
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
            A trusted aviation partner for owners, executives and urgent missions.
          </h2>
        </div>

        <div className="text-slate-600">
          <p className="text-lg leading-relaxed">
            Mounthill Aviation Resource Services combines operational experience,
            discretion and precision to deliver tailored aviation solutions that
            meet global standards. The company supports aircraft owners, corporate
            travellers, medical teams and aviation businesses with dependable
            service from first request to final arrival.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 p-5">
                <span className="mb-4 block h-1 w-10 rounded-full bg-sky-600" />
                <p className="text-sm font-semibold leading-relaxed text-slate-800">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
