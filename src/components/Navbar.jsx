// import { NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Close menu on navigation
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//     <nav className="flex justify-between items-center px-4 md:px-8 shadow-md bg-white z-50 fixed top-0 left-0 right-0 transition-all duration-300 font-poppins">
//       {/* Left Logo */}
//       <img
//         className="h-14 w-auto select-none pointer-events-none"
//         src="/logos/daivatam1.png"
//         alt="Daivatam Logo"
//       />

//       {/* Mobile Menu Button */}
//       <div
//         className="md:hidden text-[#0077B6] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#0096d6]"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={32} /> : <Menu size={32} />}
//       </div>

//       {/* Navigation Links */}
//       <ul
//         className={`absolute md:static bg-white md:flex md:space-x-6 text-lg items-center transition-all duration-500 ease-in-out ${
//           menuOpen
//             ? "top-20 left-0 w-full opacity-100 visible flex flex-col py-4 space-y-3 shadow-lg"
//             : "top-[-400px] opacity-0 invisible md:opacity-100 md:visible md:flex-row md:space-y-0"
//         }`}
//       >
//         {[
//           { to: "/", label: "Home" },
//           { to: "/products", label: "Products" },
//           { to: "/blogs", label: "Blogs" },
//           { to: "/about", label: "About" },
//           { to: "/career", label: "Career" },
//           { to: "/contact", label: "Contact" },
//         ].map((link) => (
//           <li key={link.to}>
//             <NavLink
//               to={link.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
//                   : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
//               }
//             >
//               {link.label}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       {/* Right Logo (hidden on mobile) */}
//       <img
//         className="h-16 hidden md:block select-none pointer-events-none bg-transparent shadow-none border-none"
//         src="/logos/NAVNATH LOGO (1).png"
//         alt="Navnath Logo"
//       />
//     </nav>
//   );
// }






// import { NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Close menu on navigation
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//     <nav className="flex justify-between items-center px-4 md:px-8 shadow-md bg-white z-50 fixed top-0 left-0 right-0 transition-all duration-300 font-poppins h-20 md:h-24">
//       {/* Left Logo */}
//       <img
//         className="h-16 md:h-20 w-auto select-none pointer-events-none"
//         src="/logos/daivatam1.png"
//         alt="Daivatam Logo"
//       />

//       {/* Mobile Menu Button */}
//       <div
//         className="md:hidden text-[#0077B6] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#0096d6]"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={36} /> : <Menu size={36} />}
//       </div>

//       {/* Navigation Links */}
//       <ul
//         className={`absolute md:static bg-white md:flex md:space-x-6 text-lg items-center transition-all duration-500 ease-in-out ${
//           menuOpen
//             ? "top-20 left-0 w-full opacity-100 visible flex flex-col py-6 space-y-4 shadow-lg"
//             : "top-[-500px] opacity-0 invisible md:opacity-100 md:visible md:flex-row md:space-y-0"
//         }`}
//       >
//         {[
//           { to: "/", label: "Home" },
//           { to: "/products", label: "Products" },
//           { to: "/blogs", label: "Blogs" },
//           { to: "/about", label: "About" },
//           { to: "/career", label: "Career" },
//           { to: "/contact", label: "Contact" },
//         ].map((link) => (
//           <li key={link.to}>
//             <NavLink
//               to={link.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
//                   : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
//               }
//             >
//               {link.label}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       {/* Right Logo (hidden on mobile) */}
//       <img
//         className="h-18 md:h-20 hidden md:block select-none pointer-events-none bg-transparent shadow-none border-none"
//         src="/logos/NAVNATH LOGO (1).png"
//         alt="Navnath Logo"
//       />
//     </nav>
//   );
// }



// import { NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//     <nav className="flex justify-between items-center px-4 md:px-8 shadow-md bg-white z-50 fixed top-0 left-0 right-0 transition-all duration-300 font-poppins h-20 md:h-24">

//       {/* LEFT SIDE — MOBILE: BOTH LOGOS | DESKTOP: ONLY DAIVATAM */}
//       <div className="flex items-center space-x-5">  {/* Increased space */}
        
//         {/* Daivatam Logo */}
//         <img
//           className="h-7 md:h-15 w-auto select-none pointer-events-none"
//           src="/logos/daivatam1.png"
//           alt="Daivatam Logo"
//         />

//         {/* Navnath Logo (Mobile only) */}
//         <img
//           className="h-14  w-auto select-none pointer-events-none md:hidden"  /* Increased mobile size */
//           src="/logos/NAVNATH LOGO (1).png"
//           alt="Navnath Logo"
//         />
//       </div>

//       {/* MOBILE MENU ICON */}
//       <div
//         className="md:hidden text-[#0077B6] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#0096d6]"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={36} /> : <Menu size={36} />}
//       </div>

//       {/* NAVIGATION LINKS */}
//       <ul
//         className={`absolute md:static bg-white md:flex md:space-x-6 text-lg items-center transition-all duration-500 ease-in-out ${
//           menuOpen
//             ? "top-20 left-0 w-full opacity-100 visible flex flex-col py-6 space-y-4 shadow-lg"
//             : "top-[-500px] opacity-0 invisible md:opacity-100 md:visible md:flex-row md:space-y-0"
//         }`}
//       >
//         {[
//           { to: "/", label: "Home" },
//           { to: "/products", label: "Products" },
//           { to: "/blogs", label: "Blogs" },
//           { to: "/about", label: "About" },
//           { to: "/career", label: "Career" },
//           { to: "/contact", label: "Contact" },
//         ].map((link) => (
//           <li key={link.to}>
//             <NavLink
//               to={link.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "nav-active relative z-10 text-[#0077B6] font-medium italic px-3 py-2 transition-all duration-300"
//                   : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 font-medium italic transition-all duration-300"
//               }
//             >
//               {link.label}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       {/* RIGHT SIDE NAVNATH LOGO — ONLY DESKTOP */}
//       <img
//         className="h-17 md:h-21 hidden md:block select-none pointer-events-none"  /* Increased desktop size */
//         src="/logos/NAVNATH LOGO (1).png"
//         alt="Navnath Logo"
//       />
//     </nav>
//   );
// }



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
    <nav className="flex justify-between items-center px-4 md:px-10 shadow-md bg-white z-50 fixed top-0 left-0 right-0 h-14 md:h-16 font-[Poppins]">

      {/* LEFT SIDE — LOGOS */}
      <div className="flex items-center space-x-4 md:space-x-8">

        {/* Daivatam Logo */}
        <img
          onClick={() => navigate('/')}
          className="h-6 md:h-10 w-auto cursor-pointer select-none"
          src="/logos/daivatam1.png"
          alt="Daivatam Logo"
        />

        {/* Navnath Logo (Mobile) */}
        <img
          onClick={() => navigate('/')}
          className="h-8 w-auto cursor-pointer select-none md:hidden"
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
                  ? "text-[#0077B6] font-semibold italic px-3 py-1 border-b-2 border-[#0077B6]"
                  : "px-3 py-1 italic hover:text-[#0077B6] hover:bg-[#0077B6]/10 rounded-md transition-all duration-300"
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

