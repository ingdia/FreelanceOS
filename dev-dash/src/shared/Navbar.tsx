import React from 'react';
import { NavLink } from "react-router-dom";
import image from "../assets/images/dianeImage.png";
import ThemeSwitcher from '../components/ThemeSwitc';

function Navbar() {
  const navigations = [
    { name: "OverView", link: "/" },
    { name: "Project", link: "/project" },
    { name: "Client", link: "/client" },
    { name: "Payment", link: "/payment" },
  ];

  return (
<div className=' px-8 bg-gray-200 dark:bg-gray-600 py-5 '>
      <section className="flex flex-row items-center justify-between p-5 shadow-md bg-white rounded-full  px-10 bg-white dark:bg-gray-900">
      <div className="text-xl font-bold dark:text-white">FreelancerOS</div>
      
      <nav className="flex flex-col md:flex-row gap-4">
        {navigations.map((nav) => (
          <NavLink
            key={nav.name}
            to={nav.link}
            className={({ isActive }) =>
              `text-gray-700 p-2 px-5 bg-purple-100 dark:bg-purple-200 rounded-full ${
                isActive ? "font-bold bg-purple-600 dark:bg-purple-900 dark:text-gray-300 text-white p-2 rounded-full" : ""
              }`
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>

      <div className='flex justify-between space-x-3'>
      <ThemeSwitcher/>

      <div className="w-10 h-10 border-2 border-purple-600 rounded-full overflow-hidden">
        <img src={image} alt="Diane" className="w-full h-full object-cover " />
      </div>
      </div>
    </section>
</div>
  );
}

export default Navbar;
