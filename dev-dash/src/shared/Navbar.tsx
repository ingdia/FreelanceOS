import React from 'react';
import { NavLink } from "react-router-dom";
import image from "../assets/images/dianeImage.png";

function Navbar() {
  const navigations = [
    { name: "OverView", link: "/" },
    { name: "Project", link: "/project" },
    { name: "Client", link: "/client" },
    { name: "Payment", link: "/payment" },
  ];

  return (
<div className='pt-5 px-10 '>
      <section className="flex items-center justify-between p-5 shadow-md bg-white rounded-full mt-5 px-10">
      <div className="text-xl font-bold">FreelancerOS</div>
      
      <nav className="flex gap-4">
        {navigations.map((nav) => (
          <NavLink
            key={nav.name}
            to={nav.link}
            className={({ isActive }) =>
              `text-gray-700 p-2 px-5 bg-blue-100 rounded-full ${
                isActive ? "font-bold bg-blue-600  text-white p-2 rounded-full" : ""
              }`
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>

      <div className='flex justify-between space-x-3'>
      <div>Dark/Light</div>

      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={image} alt="Diane" className="w-full h-full object-cover" />
      </div>
      </div>
    </section>
</div>
  );
}

export default Navbar;
