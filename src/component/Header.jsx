import React, { useState } from "react";

function Header() {
  const [dropDown, setDropDown] = useState(false);

  const dropDownHandler = () => {
    setDropDown((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <i className="ri-tent-line text-3xl text-violet-600"></i>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-violet-600 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={dropDownHandler}
            className="md:hidden text-slate-800"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          dropDown ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <button
            onClick={dropDownHandler}
            className="absolute top-4 right-4"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
          <ul className="space-y-4 mt-8">
            {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg text-slate-600 hover:text-violet-600 transition-colors duration-200"
                  onClick={dropDownHandler}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;