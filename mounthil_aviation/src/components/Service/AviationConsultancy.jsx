import { services } from "../../data/aviation";
import ServiceCard from "./ServiceCard";

function AviationConsultancy() {
  return <ServiceCard service={services[4]} />;
}

export default AviationConsultancy;
