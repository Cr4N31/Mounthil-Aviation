import { services } from "../../data/aviation";
import ServiceCard from "./ServiceCard";

function MedicalEvacuation() {
  return <ServiceCard service={services[2]} />;
}

export default MedicalEvacuation;
