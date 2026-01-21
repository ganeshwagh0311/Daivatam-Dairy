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
      <section className="relative w-full font-poppins h-96 flex items-center justify-center overflow-hidden">
        <video
          src="/videos/footer_video.mp4"
          autoPlay
          muted
          loop
          className="w-full font-poppins h-full object-cover absolute z-0"
        />
        <div className="w-full font-poppins h-full relative flex flex-col justify-center items-center text-center z-10 bg-opacity-30 p-8 rounded-md">
          <p className="font-bold font-poppins text-3xl font-poppins tracking-wide leading-loose drop-shadow-2xl text-white">
            The Ancient Farming Practices Thriving in Our Village
          </p>
          <p className="font-semibold font-poppins tracking-wider text-md text-white">
            An ancient system of farming that still thrives in our village
          </p>
          <button
  onClick={() => navigate('/blogs')}
  className="relative font-poppins px-8 py-4 mt-12 rounded-md font-bold uppercase cursor-pointer text-[#0077B6] bg-white transition-all duration-500 hover:text-white hover:scale-110 hover:bg-[#0077B6]"
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
            <img src="/logos/daivatam1.png" alt="Logo" className="h-18 w-auto" />
            <p className="text-base font-poppins text-gray-700 leading-relaxed">
              Freshness you can trust, quality you deserve. Delivering dairy goodness every day from our farm to your family.
              <br />"Purity in every drop, care in every step."
            </p>

            <div className="pt-3">
              <button
                onClick={() => navigate('/career')}
                className="w-60 bg-gradient-to-r font-poppins from-[#E6CFA8] to-[#D4B483] text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-[#C8A974]"
              >
                Careers
              </button>
            </div>
          </div>
          {/* Links */}
          <div className="space-y-4 text-left">
            <p className="text-gray-900 font-poppins text-xl font-bold">LINKS</p>
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
                className="w-60 bg-gradient-to-r font-poppins from-[#E6CFA8] to-[#D4B483] text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-[#C8A974]"
              >
                B2B Enquiry
              </button>
            </div>
          </div>
          {/* Connect Us */}
          <div className="space-y-6 text-left">
            <p className="text-gray-900 font-poppins text-xl font-bold">CONNECT US</p>
            <div className="space-y-3 font-poppins text-base">
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

            <div className="pt-15.5 font-poppins">
              <button
                onClick={() => navigate('/contact')}
                className="w-60 bg-gradient-to-r from-[#E6CFA8] to-[#D4B483] font-poppins text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-[#C8A974]"
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* Information */}
          <div className="space-y-4 font-poppins text-left">
            <p className="text-gray-900 font-poppins text-xl font-bold">INFORMATION</p>
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
            <p className="text-gray-900 font-poppins text-lg font-bold mt-4">SOCIAL</p>

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
    className="bg-[#F3E6C9] p-3 rounded-full  hover:bg-[#0077B6] hover:text-white transition-all duration-300"
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
