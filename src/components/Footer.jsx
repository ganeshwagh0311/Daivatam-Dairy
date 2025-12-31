// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="">
// //       {/* Hero Video Section */}
//       <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
//         <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
//         <video src="/videos/footer_video.mp4" autoPlay muted loop className="w-full h-full object-cover absolute z-0"/>
//         <div className="w-full h-full relative text-center flex flex-col justify-center items-center z-10 bg-whi bg-opacity-30 p-8 rounded-md">
//           <h1 className="font-bold text-3xl tracking-wide font-sans leading-loose drop-shadow-2xl text-white">The Ancient Farming Practices Thriving in Our Village</h1>
//           <p className="font-semibold tracking-wider text-md text-white">An ancient system of farming that still thrives in our village</p>
//           <button className="relative px-8 py-4 mt-12 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#0077B6] bg-white transition-all duration-500  hover:text-white hover:scale-110 hover:outline-[#0077B6] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#0077B6]">
//             Learn more
//           </button>
//         </div>
//       </section>
//       </section>

//       {/* Main Footer Content */}
//       <div className="relative bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 pt-20 pb-10 overflow-hidden w-full">
//         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
//           {/* Brand Info */}
//           <div>
//             <h2 className="text-2xl font-bold text-green-700">Daivtam Agro Dairy</h2>
//             <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
//               Freshness you can trust, quality you deserve. Delivering dairy
//               goodness every day from our farm to your family.  
//               <br />
//               <span className="italic text-green-700 font-medium">
//                 “Purity in every drop, care in every step.”
//               </span>
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-green-700 mb-4">Quick Links</h3>
//             <ul className="space-y-3 text-sm">
//               {["Home", "Products", "Gallery", "Contact"].map((link, idx) => (
//                 <li key={idx}>
//                   <a
//                     href={`/${link.toLowerCase()}`}
//                     className="hover:text-green-600 hover:underline transition duration-300"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Our Promise */}
//           <div>
//             <h3 className="text-lg font-semibold text-green-700 mb-4">Our Promise</h3>
//             <ul className="space-y-3 text-sm text-gray-600">
//               <li>✅ 100% Pure & Fresh Dairy</li>
//               <li>✅ Ethically Sourced Milk</li>
//               <li>✅ Hygienic Processing</li>
//               <li>✅ Trusted by Families</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold text-green-700 mb-4">Get in Touch</h3>
//             <ul className="space-y-3 text-sm text-gray-600">
//               <li className="flex items-center gap-2">
//                 <MapPin size={18} className="text-green-600" />
//                 Rahuri, Maharashtra, India
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone size={18} className="text-green-600" />
//                 +91 95520 03530
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail size={18} className="text-green-600" />
//                 navnathdsk@gmail.com
//               </li>
//             </ul>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6">
//               {[
//                 { Icon: Facebook, link: "#" },
//                 { Icon: Instagram, link: "#" },
//                 { Icon: Twitter, link: "#" },
//               ].map(({ Icon, link }, idx) => (
//                 <a
//                   key={idx}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-green-600 text-white rounded-full hover:scale-110 hover:bg-green-700 transition transform duration-300 shadow-md"
//                 >
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright Bar */}
//         {/* <div className="border-t border-green-200 mt-10 pt-4 text-center text-sm text-gray-600">
//           Anjani Agro Dairy. All rights reserved. | 
//           <span className="text-green-700 font-medium"> Made with ❤️ in Maharashtra</span>
//         </div> */}
//       </div>
//     </footer>
//   );
// }




// import React, { useState } from 'react';
// import { Facebook, Instagram, Twitter, Youtube, Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react';

// export default function Footer() {
//   const [hoveredButton, setHoveredButton] = useState(null);

//   return (
//     <div className="font-poppins">
//       {/* Hero Video Section */}
//       {/* Hero Video Section */}
//        <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
//         <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
//          <video src="/videos/footer_video.mp4" autoPlay muted loop className="w-full h-full object-cover absolute z-0"/>
//          <div className="w-full h-full relative text-center flex flex-col justify-center items-center z-10 bg-whi bg-opacity-30 p-8 rounded-md">
//            <h1 className="font-bold text-3xl tracking-wide font-sans leading-loose drop-shadow-2xl text-white">The Ancient Farming Practices Thriving in Our Village</h1>
//            <p className="font-semibold tracking-wider text-md text-white">An ancient system of farming that still thrives in our village</p>
//            <button className="relative px-8 py-4 mt-12 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#0077B6] bg-white transition-all duration-500  hover:text-white hover:scale-110 hover:outline-[#0077B6] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#0077B6]">
//              Learn more
//          </button>
//         </div>
//       </section>
//       </section>
//       {/* Footer Section */}
//       <footer className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-gray-100 py-12 px-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

//           {/* Brand Section */}
//           <div className="space-y-4 text-center">
//             <img
//               src="/logos/daivatam1.png"
//               alt="Logo"
//               className="h-24 w-auto mx-auto"
//             />
//             <p className="text-sm text-gray-200 leading-relaxed">
//               Freshness you can trust, quality you deserve. Delivering dairy goodness every day from our farm to your family. "Purity in every drop, care in every step."
//             </p>
//             <button
//               onMouseEnter={() => setHoveredButton('careers')}
//               onMouseLeave={() => setHoveredButton(null)}
//               className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
//             >
//               Careers
//             </button>
//           </div>

//           {/* Links Section */}
//           <div className="space-y-4 text-center">
//             <h3 className="text-gray-100 font-bold text-xl mb-2">LINKS</h3>
//             {['Gallery', 'Happy Retailers', 'Franchise Inquiry', 'Blogs', 'FAQs'].map((link, index) => (
//               <p key={index} className="text-gray-200">{link}</p>
//             ))}
//             <button
//               onMouseEnter={() => setHoveredButton('b2b')}
//               onMouseLeave={() => setHoveredButton(null)}
//               className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
//             >
//               B2B Enquiry
//             </button>
//           </div>

//           {/* Connect Us Section */}
//           <div className="space-y-4 text-center">
//             <h3 className="text-gray-100 font-bold text-xl mb-2">CONNECT US</h3>
//             <div className="space-y-2 text-lg">
//               {[{
//                 icon: MapPin,
//                 text: 'A/P – Rahuri, Tal. Rahuri, Dist. Ahmednagar, Maharashtra, India'
//               }, {
//                 icon: Phone,
//                 text: '+91 95520 03530',
//                 href: 'tel:+919552003530'
//               }, {
//                 icon: Mail,
//                 text: 'navnathdsk@gmail.com',
//                 href: 'mailto:navnathdsk@gmail.com'
//               }].map(({ icon: Icon, text, href }, index) => (
//                 <p key={index} className="flex items-center justify-center space-x-2 text-gray-200">
//                   <Icon size={22} className="text-gray-300" />
//                   {href ? <a href={href} className="text-gray-200">{text}</a> : text}
//                 </p>
//               ))}
//             </div>
//             <button
//               onMouseEnter={() => setHoveredButton('contact')}
//               onMouseLeave={() => setHoveredButton(null)}
//               className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
//             >
//               Contact Us
//             </button>
//           </div>

//           {/* Information & Social Section */}
//           {/* Information & Social Section */}
// <div className="space-y-4 text-center">
//   <h3 className="text-gray-100 font-bold text-xl mb-2">INFORMATION</h3>
//   {['Cancellation & Refund', 'Shipping & Delivery', 'Return & Exchange', 'Privacy Policy', 'Company Policy'].map((info, index) => (
//     <p key={index} className="text-gray-200">{info}</p>
//   ))}

//   <h4 className="text-gray-100 font-bold text-lg mt-4">SOCIAL</h4>
//   <div className="flex flex-wrap justify-center mt-2 gap-3">
//     {[Facebook, Instagram, Twitter, Youtube, Linkedin, Github, MapPin, Phone, Mail].map((Icon, index) => (
//       <a
//         key={index}
//         href="#"
//         className="bg-blue-700 p-3 rounded-full hover:bg-gray-100 hover:text-blue-800 transition-all duration-300"
//       >
//         <Icon size={20} className="text-gray-100" />
//       </a>
//     ))}
//   </div>
// </div>



//         </div>
//       </footer>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react';
import { FaXTwitter, FaThreads } from "react-icons/fa6";

export default function Footer() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="font-poppins">

      {/* Hero Video */}
      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
        <video
          src="/videos/footer_video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="w-full h-full relative flex flex-col justify-center items-center text-center z-10 bg-opacity-30 p-8 rounded-md">
          <h1 className="font-bold text-3xl tracking-wide leading-loose drop-shadow-2xl text-white">
            The Ancient Farming Practices Thriving in Our Village
          </h1>
          <p className="font-semibold tracking-wider text-md text-white">
            An ancient system of farming that still thrives in our village
          </p>
          <button
            onClick={() => navigate('/learn-more')}
            className="relative px-8 py-4 mt-12 rounded-md font-bold uppercase cursor-pointer text-[#0077B6] bg-white transition-all duration-500 hover:text-white hover:scale-110 hover:bg-[#0077B6]"
          >
            Learn more
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFF8E7] text-gray-800 py-12 px-8 font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4 text-left">
            <img src="/logos/daivatam1.png" alt="Logo" className="h-12 w-auto" />
            <p className="text-base text-gray-700 leading-relaxed">
              Freshness you can trust, quality you deserve. Delivering dairy goodness every day from our farm to your family.
              <br />"Purity in every drop, care in every step."
            </p>

            <div className="pt-9">
              <button
                onClick={() => navigate('/career')}
                className="w-60 bg-gradient-to-r from-[#E6CFA8] to-[#D4B483] text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-[#C8A974]"
              >
                Careers
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4 text-left">
            <h3 className="text-gray-900 text-xl font-bold">LINKS</h3>

            {[
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/products' },
              { name: 'Blogs', path: '/blogs' },
              { name: 'Abouts', path: '/about' },
              { name: 'FAQs', path: '/faqs' }
            ].map((link, index) => (
              <p
                key={index}
                className="text-base text-gray-700 hover:text-[#0077B6] cursor-pointer"
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </p>
            ))}

            <div className="pt-7">
              <button
                onClick={() => navigate('/b2b')}
                className="w-60 bg-gradient-to-r from-[#E6CFA8] to-[#D4B483] text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-[#C8A974]"
              >
                B2B Enquiry
              </button>
            </div>
          </div>

          {/* Connect Us */}
          <div className="space-y-6 text-left">
            <h3 className="text-gray-900 text-xl font-bold">CONNECT US</h3>
            <div className="space-y-3 text-base">
              {[
  { icon: MapPin, text: 'A/P – Rahuri, Tal. Rahuri, Dist. Ahmednagar, Maharashtra, India', size: 20 },
  { icon: Phone, text: '+91 7066511414', href: 'tel:7066511414', size: 18 },
  { icon: Mail, text: 'sales@daivatamdairy.com', href: 'mailto:sales@daivatamdairy.com', size: 18 }
].map(({ icon: Icon, text, href, size }, index) => (
  <div
    key={index}
    className="flex items-start gap-3 text-gray-700 max-w-xs"
  >
    {/* Icon at front-top */}
    <Icon size={size} className="text-[#B8860B] flex-shrink-0" />

    {/* Text starts exactly from top */}
    {href ? (
      <a
        href={href}
        className="text-base leading-snug text-gray-700 hover:text-[#0077B6]"
      >
        {text}
      </a>
    ) : (
      <p className="text-base leading-snug">
        {text}
      </p>
    )}
  </div>
))}

            </div>

            <div className="pt-19">
              <button
                onClick={() => navigate('/contact')}
                className="w-60 bg-gradient-to-r from-[#E6CFA8] to-[#D4B483] text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-[#C8A974]"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-4 text-left">
            <h3 className="text-gray-900 text-xl font-bold">INFORMATION</h3>

            {[
              { name: 'Cancellation & Refund', path: '/cancellation' },
              { name: 'Shipping & Delivery', path: '/shipping' },
              { name: 'Return & Exchange', path: '/return' },
              { name: 'Privacy Policy', path: '/privacy' },
              { name: 'Company Policy', path: '/company-policy' }
            ].map((info, index) => (
              <p
                key={index}
                className="text-base text-gray-700 hover:text-[#0077B6] cursor-pointer"
                onClick={() => navigate(info.path)}
              >
                {info.name}
              </p>
            ))}

            <h4 className="text-gray-900 text-lg font-bold mt-4">SOCIAL</h4>

            <div className="flex flex-wrap justify-start mt-2 gap-3">

              {/* Social Icons with Links */}
<div className="flex flex-wrap justify-start mt-2 gap-3">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61584060655508"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <Facebook size={20} />
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/daivatamdairy/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <Instagram size={20} />
  </a>

  {/* Twitter (X)
  <a 
    href="https://x.com/DaivatamDairy"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <Twitter size={20} />
  </a> */}

  {/* X Logo */}
  <a 
    href="https://x.com/DaivatamDairy"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <FaXTwitter size={20} />
  </a>

  {/* Threads */}
  <a
    href="https://www.threads.net/@daivatamdairy"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <FaThreads size={20} />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@daivatamdairy"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <Youtube size={20} />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/daivatam-dairy-049348392"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <Linkedin size={20} />
  </a>

  {/* GitHub */}
  {/* <a 
    href="https://github.com/daivatamdairy"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F3E6C9] p-3 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300"
  >
    <Github size={20} />
  </a> */}

</div>


            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}
