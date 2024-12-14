import Header from "./components/Header";

export default function App() {
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
