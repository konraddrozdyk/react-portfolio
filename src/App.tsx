import Header from "./components/Header";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of the first project.",
      link: "https://example.com/project1",
      year: "2023",
      imageUrl: "https://via.placeholder.com/150",
      detailedDescription:
        "This is a detailed description of Project 1, explaining the technologies used, challenges faced, and the outcome of the project.",
    },
    {
      title: "Project 2",
      description: "A brief description of the second project.",
      link: "https://example.com/project2",
      year: "2023",
      imageUrl: "https://via.placeholder.com/150",
      detailedDescription:
        "This is a detailed description of Project 2, highlighting the key features and development process.",
    },
    {
      title: "Project 3",
      description: "A brief description of the third project.",
      link: "https://example.com/project3",
      year: "2024",
      imageUrl: "https://via.placeholder.com/150",
      detailedDescription:
        "A detailed explanation of Project 3, including the challenges and successes encountered during its development.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Timeline />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
        <ProjectGrid projects={projects} />
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
