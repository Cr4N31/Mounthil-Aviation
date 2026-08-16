import { PlaneTakeoff } from "lucide-react";
import AircraftManagement from "../components/Service/AircraftManagement";
import AircraftCharter from "../components/Service/AircraftCharter";
import MedicalEvacuation from "../components/Service/MedicalEvacuation";
import CrewRecruitment from "../components/Service/CrewRecruitment";
import AviationConsultancy from "../components/Service/AviationConsultancy";

function Service() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-700">
              <PlaneTakeoff className="h-4 w-4" />
              Services
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
              Private aviation services shaped around each mission.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              From aircraft ownership support to charter, medevac and aviation
              consultancy, each service is structured to make movement safer,
              faster and easier to manage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:px-8">
          <AircraftManagement />
          <AircraftCharter />
          <MedicalEvacuation />
          <CrewRecruitment />
          <AviationConsultancy />
        </div>
      </section>
    </main>
  );
}

export default Service;
