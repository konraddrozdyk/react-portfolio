const Footer = () => (
  <footer className="bg-transparent text-white p-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Konrad . All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://linkedin.com"
          className="text-blue-400 hover:text-blue-600"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          className="text-blue-400 hover:text-blue-600"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
