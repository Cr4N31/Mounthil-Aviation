import { Link } from "react-router-dom";

function CTA() {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center justify-center rounded-md border-2 border-sky-600 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-600 hover:text-white"
    >
      Book Now
    </Link>
  );
}

export default CTA;
