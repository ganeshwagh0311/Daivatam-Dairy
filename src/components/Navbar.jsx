import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icon

export default function Navbar() {
  const location = useLocation();
  const [activePos, setActivePos] = useState({ width: 0, left: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const activeLink = document.querySelector(".nav-active");
    if (activeLink) {
      setActivePos({
        width: activeLink.offsetWidth,
        left: activeLink.offsetLeft,
      });
    }
  }, [location]);

  // close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    
    <nav className="flex justify-between items-center px-4 md:px-8 shadow-md bg-white z-50 fixed top-0 left-0 right-0 transition-all duration-300 font-poppins">
      {/* Left Logo */}
      <img
        className="h-12 w-70"
        src="/logos/daivatam1.png"
        alt="Daivatam Logo"
      />

      {/* Mobile Menu Button with animation */}
      <div
        className="md:hidden text-[#0077B6] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#0096d6]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static bg-white md:flex md:space-x-6 text-lg items-center transition-all duration-500 ease-in-out ${
          menuOpen
            ? "top-20 left-0 w-full opacity-100 visible flex flex-col py-4 space-y-3 shadow-lg"
            : "top-[-400px] opacity-0 invisible md:opacity-100 md:visible md:flex-row md:space-y-0"
        }`}
      >
        {/* Highlight bar for active link (Desktop only) */}
        <span
          className="hidden md:block absolute top-0 bottom-0 bg-[#0077B6]/10 rounded-md transition-all duration-300 ease-in-out"
          style={{
            width: activePos.width,
            left: activePos.left,
          }}
        />

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
            }
          >
            Blogs
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-medium px-3 py-2 transition-all duration-300"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium transition-all duration-300"
            }
          >
            Career
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Right Logo (hidden on mobile) */}
      <img
        className="h-16 hidden md:block"
        src="/logos/NAVNATH LOGO (1).png"
        alt="Navnath Logo"
      />
    </nav>
  );
}
