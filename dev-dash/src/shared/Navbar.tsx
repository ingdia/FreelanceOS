import { useState } from 'react';
import { NavLink } from "react-router-dom";
import image from "../assets/images/dianeImage.png";
import ThemeSwitcher from '../components/ThemeSwitc';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigations = [
    { name: "Overview", link: "/" },
    { name: "Projects", link: "/project" },
    { name: "Clients", link: "/client" },
    { name: "Payments", link: "/payment" },
  ];

  return (
    <div className="sticky top-0 z-50 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900 py-4">
      <section className="bg-white dark:bg-gray-800 rounded-full shadow-md relative">
        <div className="flex items-center justify-between px-6 py-4">
          
          <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
            FreelancerOS
          </div>
          
          <nav className="hidden md:flex gap-2 absolute left-1/2 transform -translate-x-1/2">
            {navigations.map((nav) => (
              <NavLink
                key={nav.name}
                to={nav.link}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 dark:bg-purple-900 text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-800"
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            
            <div className="w-10 h-10 border-2 border-purple-600 dark:border-purple-400 rounded-full overflow-hidden">
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <nav className="p-2">
              {navigations.map((nav) => (
                <NavLink
                  key={nav.name}
                  to={nav.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-purple-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`
                  }
                >
                  {nav.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </section>
    </div>
  );
}

export default Navbar;