import React from "react";


const Header = ({ title, links, logo, onLogoClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-3 py-0 bg-white bg-opacity-60 shadow-md z-50">
      <div className="flex items-center cursor-pointer" onClick={onLogoClick}>
        <img
          src={logo}
          alt="Header Logo"
          className="h-[12vh] w-auto object-contain"
        />
      </div>


      <h1 className="text-xl font-semibold text-blue-900">{title}</h1>


      <nav className="flex gap-11">
        {links.map((link, index) => (
          <button
            key={index}
            className="text-blue-900 text-2xl font-bold font-mono  hover:underline"
            onClick={link.onClick}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

