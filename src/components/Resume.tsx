const Resume: React.FC = () => (
  <section
    id="resume"
    className="py-16 px-6 bg-gray-100 flex flex-col justify-center items-center"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold text-quincy mb-6">
        Download My Resume
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Want to know more about my professional background and experiences?
        Download my resume below.
      </p>
      <a
        href="./assets/KonradDrozdyk.pdf"
        download="KonradDrozdyk_Resume.pdf"
        className="inline-flex items-center py-2 px-6 rounded-lg bg-costa text-white transform transition-all hover:bg-seablue hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 7l3 3-3 3M7 17l-3-3 3-3M12 4v16"
          />
        </svg>
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
