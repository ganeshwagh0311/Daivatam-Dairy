
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
<nav className="relative flex justify-between items-center px-4 md:px-10
fixed top-0 left-0 right-0 h-14 md:h-16 z-50 font-[Poppins]
bg-white">

  <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 
  bg-gradient-to-b from-black/30 to-transparent"></div>

      {/* LEFT SIDE — LOGOS */}
      <div className="flex items-center space-x-4 md:space-x-8">

        {/* Daivatam Logo */}
        <img
          onClick={() => navigate('/')}
          className="h-9 md:h-10 w-auto cursor-pointer select-none"
          src="/logos/daivatam1.png"
          alt="Daivatam Logo"
        />

        {/* Navnath Logo (Mobile) */}
        <img
          onClick={() => navigate('/')}
          className="h-10 w-auto cursor-pointer select-none md:hidden"
          src="/logos/NAVNATH LOGO (1).png"
          alt="Navnath Logo"
        />
      </div>

      {/* MOBILE MENU BUTTON */}
      <div
        className="md:hidden text-[#0077B6] cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      {/* NAV LINKS */}
      <ul
        className={`absolute md:static bg-white md:flex md:space-x-8 text-lg items-center font-[Poppins] transition-all duration-500 ${
          menuOpen
            ? "top-14 left-0 w-full opacity-100 visible flex flex-col py-5 space-y-5 shadow-lg"
            : "top-[-500px] opacity-0 invisible md:opacity-100 md:visible md:flex-row"
        }`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/products", label: "Products" },
          { to: "/blogs", label: "Blogs" },
          { to: "/about", label: "About" },
          { to: "/career", label: "Career" },
          { to: "/contact", label: "Contact" },
        ].map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0077B6] font-semibold  px-3 py-1 border-b-2 border-[#0077B6]"
                  : "px-3 py-1  hover:text-[#0077B6] hover:bg-[#0077B6]/10 rounded-md transition-all duration-300"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* RIGHT LOGO (DESKTOP) */}
      <img
        onClick={() => navigate('/')}
        className="h-12 w-auto hidden md:block cursor-pointer select-none"
        src="/logos/NAVNATH LOGO (1).png"
        alt="Navnath Logo"
      />
    </nav>
  );
}

