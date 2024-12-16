import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient from-quincy to-santafe text-white">
      <Hero />
      <AboutMe />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
