const Resume: React.FC = () => (
  <section
    id="resume"
    className="py-12 px-6 h-screen flex flex-col justify-center items-center"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-3xl mb-6">Download My Resume</h2>
      <a href="/path-to-resume.pdf" className=" py-2 px-6 rounded">
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
