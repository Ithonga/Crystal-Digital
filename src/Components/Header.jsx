import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "SERVICES", path: "/services" },
    { title: "CONTACT", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 flex h-[90px] shadow-lg justify-between z-10 mb-3 w-full p-3 items-center bg-transparent">
      <a href="/">
      <img src="/full-logo.png" alt="Company logo" className="h-12" />
      </a>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <MdClose className="text-3xl" />
          ) : (
            <CgMenuRight className="text-3xl" />
          )}
        </button>
      </div>
      <div className="hidden md:flex gap-14 w-full justify-center">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-white p-2 rounded-md bg-blue-500"
                : "text-black font-medium hover:text-white hover:bg-blue-500 p-2 rounded-md transition-all duration-200 ease-in-out"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      {isOpen && (
        <div className="fixed top-[90px] right-0 bg-slate-800 h-full justify-start w-1/2 flex flex-col gap-14 p-7 divide-y transition-all duration-200 ease-in-out ">
          {menu.map((item, index) => (
            <NavLink
              onClick={toggleMenu} //close menu if clicked and goes to the required page
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white p-2 font-medium"
                  : "text-gray-500 font-medium p-2 transition-all duration-200 ease-in-out"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
