function Contact() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_0.9fr] md:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
            Speak with the team handling charter, medevac and aviation support.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Use this section as the base for your final contact form, WhatsApp
            action or CRM handoff. The live details below are pulled from the
            current Mounthill Aviation website.
          </p>
        </div>

        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
                Nigeria
              </p>
              <p className="mt-2 text-slate-300">No 7 Norbert E Offor Street</p>
              <p className="text-slate-300">Kado Kuchi, FCT Abuja</p>
              <a
                className="mt-3 block font-semibold text-white"
                href="tel:+2348034033790"
              >
                +234 803 403 3790
              </a>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
                United States
              </p>
              <p className="mt-2 text-slate-300">1007 Eagle Glen Dr</p>
              <p className="text-slate-300">Wylie, Texas 75098</p>
              <a
                className="mt-3 block font-semibold text-white"
                href="tel:+12142560764"
              >
                +1 (214) 256-0764
              </a>
            </div>

            <div className="border-t flex flex-col border-white/10 pt-6">
              <a
                className="font-semibold text-white"
                href="mailto:info@mounthilaviation.com"
              >
                info@mounthilaviation.com
              </a>
              <a
                className="mt-4 inline-flex rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-500"
                href="https://wa.me/2348028440266"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
