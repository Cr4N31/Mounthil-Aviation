import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderImg from "/img/mounthill_logo.webp";
import { services } from "../data/aviation";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8 md:py-16">
        <div>
          <Link to="/">
            <img src={HeaderImg} alt="Mounthill Aviation" className="h-10 w-auto bg-white p-1" />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300">
            Mounthill Aviation Resource Services provides aircraft management,
            charter services, medical evacuation, crew recruitment and aviation
            consultancy with a focus on safety and global reach.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="rounded-md bg-white/10 p-3 hover:bg-sky-600" href="https://wa.me/2348028440266" aria-label="WhatsApp">
              <FaWhatsapp className="h-4 w-4" />
            </a>
            <a className="rounded-md bg-white/10 p-3 hover:bg-sky-600" href="https://www.instagram.com/mounthillaviation" aria-label="Instagram">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a className="rounded-md bg-white/10 p-3 hover:bg-sky-600" href="https://www.linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-200">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-200">
            Contact
          </h3>
          <p className="mt-4 flex gap-3 text-sm leading-relaxed text-slate-300">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-sky-200" />
            No 7 Norbert E Offor Street, Kado Kuchi, FCT Abuja
          </p>
          <a className="mt-4 flex gap-3 text-sm font-semibold text-white" href="tel:+2348034033790">
            <Phone className="h-4 w-4 text-sky-200" />
            +234 803 403 3790
          </a>
          <a className="mt-4 flex gap-3 text-sm font-semibold text-white" href="mailto:info@mounthilaviation.com">
            <Mail className="h-4 w-4 text-sky-200" />
            info@mounthilaviation.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-400">
        © 2026 Mounthill Aviation Resource Services. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
