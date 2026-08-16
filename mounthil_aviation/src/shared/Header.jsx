import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import HeaderImg from "/img/mounthill_logo.webp";
import CTA from "./CTA";

const serviceLinks = [
  { name: "Aircraft Management", hash: "aircraft-management" },
  { name: "Aircraft Charter", hash: "aircraft-charter" },
  { name: "Medical Evacuation", hash: "medical-evacuation" },
  { name: "Crew Recruitment", hash: "crew-recruitment" },
  { name: "Aviation Consultancy", hash: "aviation-consultancy" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `block rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
      isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:text-sky-700"
    }`;

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src={HeaderImg} alt="Mounthill Aviation" className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink to="/services" className={navClass}>
              <span className="inline-flex items-center gap-1">
                Services
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </span>
            </NavLink>

            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 pt-3">
                <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl shadow-slate-950/10">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.hash}
                      to={`/services#${service.hash}`}
                      className="block rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact Us
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <CTA />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden -mr-2 p-2 text-slate-950"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mx-auto max-w-7xl px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-1">
            <NavLink to="/" className={navClass} onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/services" className={navClass} onClick={closeMobileMenu}>
              Services
            </NavLink>
            <div className="ml-3 border-l border-slate-200 pl-3">
              {serviceLinks.map((service) => (
                <Link
                  key={service.hash}
                  to={`/services#${service.hash}`}
                  onClick={closeMobileMenu}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <NavLink to="/about" className={navClass} onClick={closeMobileMenu}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navClass} onClick={closeMobileMenu}>
              Contact Us
            </NavLink>
          </div>
          <div className="mt-3">
            <CTA />
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
