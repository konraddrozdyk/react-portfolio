const Resume: React.FC = () => (
  <section id="resume" className="py-12 px-6 bg-gray-200">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Download My Resume</h2>
      <a
        href="/path-to-resume.pdf"
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
