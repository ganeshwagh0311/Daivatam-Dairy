// src/components/CallToAction.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative text-center font-poppins py-20 bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">

      {/* Background Blur Elements */}
      <div className="absolute inset-0 font-poppins opacity-20">
        <div className="absolute top-0 left-0 font-poppins w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 font-poppins right-0 w-56 h-56 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 font-poppins max-w-4xl mx-auto px-6"
      >
        {/* Heading */}
        <p className="text-white font-poppins text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Join the <span className="text-blue-200">Daivatam Dairy</span> Family
        </p>

        {/* Underline */}
        <div className="w-24 h-1 font-poppins bg-blue-100 mx-auto mt-4 rounded-full shadow-lg"></div>

        {/* Paragraph */}
        <p className="text-white/90 mt-6 text-lg font-poppins md:text-xl leading-relaxed max-w-3xl mx-auto">
         Partner with us for reliable, farm-fresh dairy — ethically sourced and delivered straight from our farm to your business, with direct B2B supply and no intermediaries.
        </p>

        {/* Buttons */}
        <div className="flex flex-col font-poppins md:flex-row gap-6 justify-center items-center mt-10">

          {/* WhatsApp Button */}
        <motion.a
  whileHover={{ scale: 1.05, rotate: 1 }}
  whileTap={{ scale: 0.95 }}
  href="https://wa.me/7066511414"
  target="_blank"
  rel="noreferrer noopener"
  aria-label="Chat on WhatsApp"
  className="flex items-center font-poppins gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition"
>
  <FaWhatsapp className="text-2xl font-poppins" /> Chat on WhatsApp
</motion.a>



          {/* Email Button */}
          <motion.a
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:daivatamdairy@gmail.com?subject=Enquiry"
            className="flex items-center font-poppins gap-3 px-8 py-4 bg-[#FFD166] text-gray-900 font-bold rounded-full shadow-lg hover:bg-[#f6c54f] transition"
          >
            <FaEnvelope className="text-2xl font-poppins" /> Send an Email
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
