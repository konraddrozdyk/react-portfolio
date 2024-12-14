import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description for project 1",
      link: "https://example.com",
    },
    {
      title: "Project 2",
      description: "This is a description for project 2",
      link: "https://example.com",
    },
    {
      title: "Project 3",
      description: "This is a description for project 3",
      link: "https://example.com",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">
          Hello, Tailwind CSS!
        </h1>
      </div>
    </>
  );
}
