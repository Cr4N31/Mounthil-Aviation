import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import LocationMap from "../components/Contact/LocationMap";

function Contact() {
  return (
    <main>
      <LocationMap />
      <section className="bg-slate-100 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">Ready to speak with Mounthill?</h2>
            <p className="mt-2 text-slate-600">Use phone, WhatsApp or social channels for fast response.</p>
          </div>
          <div className="flex gap-3">
            <a className="rounded-md bg-slate-950 p-4 text-white hover:bg-sky-700" href="https://wa.me/2348028440266" aria-label="WhatsApp">
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a className="rounded-md bg-slate-950 p-4 text-white hover:bg-sky-700" href="https://www.instagram.com/mounthillaviation" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a className="rounded-md bg-slate-950 p-4 text-white hover:bg-sky-700" href="https://www.linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
