import { useState } from "react";

const NavItem = () => {
  return (
    <ul className="nav-ul">
      {["Home", "About", "Projects", "Contact"].map((item, index) => {
        return (
          <li key={index} className="nav-li">
            <a href="/" className="nav-li_a">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Adrian
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/menu.svg" : "assets/close.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItem />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
