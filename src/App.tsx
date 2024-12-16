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
    <div className="min-h-screen bg-gradient-to-b from-teal-200 via-blue-300 to-blue-100 text-white">
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
