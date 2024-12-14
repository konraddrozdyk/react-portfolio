const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Konrad Henryk Drozdyk</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#timeline" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#technologies" className="hover:text-gray-400">
                Technologies
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-gray-400">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
