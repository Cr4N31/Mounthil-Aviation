import CompanyStory from "../components/About/CompanyStory";
import BombardierFeature from "../components/About/BombardierFeature";
import PhotoGallery from "../shared/PhotoGallery";

function About() {
  return (
    <main>
      <CompanyStory />
      <BombardierFeature />
      <PhotoGallery title="Bombardier Challenger 604 photo gallery" />
    </main>
  );
}

export default About;
