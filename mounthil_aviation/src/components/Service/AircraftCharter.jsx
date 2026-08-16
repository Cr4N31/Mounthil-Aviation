import { services } from "../../data/aviation";
import ServiceCard from "./ServiceCard";

function AircraftCharter() {
  return <ServiceCard service={services[1]} tone="dark" />;
}

export default AircraftCharter;
