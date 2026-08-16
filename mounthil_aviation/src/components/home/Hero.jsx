import { useEffect, useRef, useState } from "react";
import HeroElement from "/assets/element-2.webp";
import { Link } from "react-router-dom";

function Hero() {
  const planeRef = useRef(null);
  const frameRef = useRef(null);
  const [scale, setScale] = useState(() => {
    if (typeof window === "undefined") return 0.82;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 1
      : 0.82;
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const updateScale = () => {
      const plane = planeRef.current;
      if (!plane) return;

      const rect = plane.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(
        Math.max((viewportHeight - rect.top) / viewportHeight, 0),
        1,
      );

      setScale(0.82 + progress * 0.28);
    };

    const handleScroll = () => {
      if (frameRef.current) return;

      frameRef.current = window.requestAnimationFrame(() => {
        updateScale();
        frameRef.current = null;
      });
    };

    frameRef.current = window.requestAnimationFrame(() => {
      updateScale();
      frameRef.current = null;
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 md:px-8 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex uppercase rounded-md bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Private aviation across Nigeria
          </span>

          <h1 className="mb-6 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            Private jet charter, medevac and aircraft support made effortless.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Mounthill Aviation Resource Services handles discreet private jet
            bookings, aircraft management, emergency air support, crew
            recruitment, and aviation consultancy with a safety-first operating
            standard.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="w-full rounded-md bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sky-700 sm:w-auto"
            >
              Book a flight
            </Link>
            <Link
              to="/services"
              className="w-full rounded-md border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-all duration-300 hover:border-sky-600 hover:text-sky-700 sm:w-auto"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={planeRef}
        className="mx-auto flex max-w-7xl justify-center px-5 pb-12 md:px-8 md:pb-20"
      >
        <img
          src={HeroElement}
          alt="Mounthill Aviation aircraft"
          className="h-auto w-full max-w-6xl origin-center will-change-transform"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </section>
  );
}

export default Hero;
