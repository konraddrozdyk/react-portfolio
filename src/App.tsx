import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import projects from "./data/projects";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-300 text-white">
      <Hero />
      <Timeline />
      <ProjectGrid projects={projects} />
      <Technologies />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
