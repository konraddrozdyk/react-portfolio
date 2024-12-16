import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Hero />
      <AboutMe />
      <Timeline />
      <Technologies />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
