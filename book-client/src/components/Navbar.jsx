import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// react icons

import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  //   toggle menu
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.addEventListener("scroll", handleSticky);
    };
  }, []);

  //   nav items
  const navItems = [
    { link: "HOME", href: "/" },
    { link: "ABOUT", href: "/about" },
    { link: "SHOP", href: "/shop" },
    { link: "SELL BOOKS", href: "/admin/dashboard" },
    { link: "BLOG", href: "/blog" },
  ];
  return (
    <header className=" w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        } flex justify-between items-center`}
      >
        <div>
          {/* use logo */}
          <Link
            className="flex items-center gap-3 text-blue-700 text-2xl font-bold"
            to={"/"}
          >
            <FaBlog size={25} /> Booky
          </Link>
        </div>
        {/* nav item for large device */}
        <ul className="hidden sm:flex space-x-4 items-center gap-10">
          {navItems.map((item, index) => (
            <li
              className="transition-all hover:text-blue-600 hover:scale-110"
              key={index}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive && "font-semibold text-blue-600"
                }
                to={item.href}
              >
                {item.link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* hamburger logo */}
        <div className="space-x-12 hidden lg:flex items-center">
          <button className="text-blue-600">
            <FaBarsStaggered size={20} />
          </button>
        </div>

        {/* menu button for the mobile device */}
        <div className="sm:hidden">
          <button className="text-blue-600" onClick={toggleMenu}>
            {isOpen ? <FaXmark size={20} /> : <FaBarsStaggered size={20} />}
          </button>
        </div>
        {/* nav items for small device */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 text-white ${
            isOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map((item, index) => (
            <li className="list-none" key={index}>
              <NavLink onClick={() => setOpen(false)} to={item.href}>
                {item.link}
              </NavLink>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
