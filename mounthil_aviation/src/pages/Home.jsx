import Hero from "../components/home/Hero";
import News from "../components/home/News";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Fleet from "../components/home/Fleet";

function Home() {
  return (
    <main>
      <Hero />
      <News />
      <Services />
      <Fleet />
      <About />
      <Contact />
    </main>
  );
}
export default Home;
