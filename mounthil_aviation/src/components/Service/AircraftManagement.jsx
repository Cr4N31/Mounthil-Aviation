import { services } from "../../data/aviation";
import ServiceCard from "./ServiceCard";

function AircraftManagement() {
  return <ServiceCard service={services[0]} />;
}

export default AircraftManagement;
