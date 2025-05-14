import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Header() {
  const [dropDown, setDropDown] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dropDownHandler = () => {
    setDropDown((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <i className="ri-tent-line text-3xl text-violet-600"></i>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <i className="ri-sun-line text-xl text-yellow-500"></i>
              ) : (
                <i className="ri-moon-line text-xl text-slate-600"></i>
              )}
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700"
            >
              {theme === "dark" ? (
                <i className="ri-sun-line text-xl text-yellow-500"></i>
              ) : (
                <i className="ri-moon-line text-xl text-slate-600"></i>
              )}
            </button>
            <button onClick={dropDownHandler} className="text-slate-800 dark:text-slate-200">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          dropDown ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <button onClick={dropDownHandler} className="absolute top-4 right-4 text-slate-800 dark:text-slate-200">
            <i className="ri-close-line text-2xl"></i>
          </button>
          <ul className="space-y-4 mt-8">
            {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
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