import { services } from "../../data/aviation";
import ServiceCard from "./ServiceCard";

function CrewRecruitment() {
  return <ServiceCard service={services[3]} tone="dark" />;
}

export default CrewRecruitment;
