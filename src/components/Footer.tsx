const Footer = () => (
  <footer className="bg-transparent text-white py-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; 2024 Konrad. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://linkedin.com"
          className="text-blue-400 hover:text-blue-600 transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          className="text-blue-400 hover:text-blue-600 transition-all"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
