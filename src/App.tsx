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
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Timeline />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Highlighted projects
        </h2>
        <ProjectGrid projects={projects} />
      </main>
      <Technologies />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
