const Contact = () => (
  <section id="contact" className="py-12 px-6 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-lg text-gray-700 mb-6">
        Feel free to reach out to me at{" "}
        <a href="mailto:konrad.drozdyk@gmail.com" className="text-blue-400">
          konrad.drozdyk@gmail.com
        </a>
      </p>
      <a
        href="mailto:konrad.drozdyk@gmail.com"
        className="inline-block py-2 px-6 bg-blue-400 text-white rounded-full text-lg font-semibold transform transition-all hover:scale-105 hover:bg-blue-500"
      >
        Send Me a Message
      </a>
    </div>
  </section>
);

export default Contact;
