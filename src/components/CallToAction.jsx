// src/components/CallToAction.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative text-center py-20 bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">

      {/* Background Blur Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Join the <span className="text-blue-200">Daivatam Dairy</span> Family
        </h2>

        {/* Underline */}
        <div className="w-24 h-1 bg-blue-100 mx-auto mt-4 rounded-full shadow-lg"></div>

        {/* Paragraph */}
        <p className="text-white/90 mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Whether you’re a customer, café owner, or business partner, we’d love to bring you
          the purest dairy experience. Fresh, ethical, and straight from our farm to you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">

          {/* WhatsApp Button */}
          <motion.a
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition"
          >
            <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
          </motion.a>

          {/* Email Button */}
          <motion.a
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:daivatamdairy@gmail.com?subject=Enquiry"
            className="flex items-center gap-3 px-8 py-4 bg-[#FFD166] text-gray-900 font-bold rounded-full shadow-lg hover:bg-[#f6c54f] transition"
          >
            <FaEnvelope className="text-2xl" /> Send an Email
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
