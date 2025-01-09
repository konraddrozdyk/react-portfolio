const Resume: React.FC = () => (
  <section
    id="resume"
    className="py-12 px-6 h-screen flex flex-col justify-center items-center"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-3xl mb-6">Download My Resume</h2>
      <a
        href="./assets/KonradDrozdyk.pdf"
        download="KonradDrozdyk_Resume.pdf"
        className="py-2 px-6 rounded bg-costa text-white hover:bg-seablue"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
