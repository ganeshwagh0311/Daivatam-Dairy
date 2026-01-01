import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHeart,
  FaStar,
  FaTrophy,
  FaUsers,
  FaHandHoldingHeart,
  FaRegDotCircle,
} from "react-icons/fa";
import { GiMilkCarton, GiCow } from "react-icons/gi";

export default function About() {
  const values = [
    { icon: <FaLeaf />, title: "Pure Milk Products", desc: "Pure, fresh, and natural milk" },
    { icon: <FaHeart />, title: "Care & Love", desc: "Every product made with passion" },
    { icon: <FaStar />, title: "Premium Quality", desc: "Best in class dairy products" },
    { icon: <FaTrophy />, title: "Award Winning", desc: "Recognized for excellence" },
  ];

  const milkJourney = [
    {
      year: "2000",
      title: "Dairy Started",
      description: "We began our journey with 10 cows.",
      image: "/about/journey1.png",
    },
    {
      year: "2010",
      title: "Production Increased",
      description: "Expanded to large-scale dairy operations.",
      image: "/about/journey2.png",
    },
    {
      year: "2020",
      title: "Modern Technology",
      description: "Adopted high-tech processing and packaging.",
      image: "/about/journey3.png",
    },
    {
      year: "2025",
      title: "Premium Brand",
      description: "Trusted by thousands of families.",
      image: "/about/F1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 font-poppins overflow-hidden">

      {/* ======================== HERO SECTION ======================== */}
      <section className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-md">
              {/* ✨ Trusted Since 2000 */}
              Trusted Since 2000
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl"
          >
            <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              About Daivatam
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 flex items-center justify-center gap-3 flex-wrap"
          >
            <span className="flex items-center gap-2">
              <FaLeaf className="text-emerald-300" /> Our Journey
            </span>
            <span className="text-emerald-200">•</span>
            <span className="flex items-center gap-2">
              <FaHeart className="text-blue-200" /> Our Promise
            </span>
            <span className="text-emerald-200">•</span>
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-300" /> Our Values
            </span>
          </motion.p>

          <motion.div
  initial={{ width: 0 }}
  animate={{ width: "90%" }} // Mobile gets full width
  transition={{ delay: 0.8, duration: 1 }}
  className="h-1 bg-white mx-auto mt-8 rounded-full opacity-60 max-w-[590px]" 
  // Desktop stays 590px max
></motion.div>

        </motion.div>

        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* BACKGROUND DECORATIONS */}
      <div className="fixed top-40 left-20 opacity-5 animate-spin-slow">
        <GiMilkCarton size={200} className="text-green-500" />
      </div>
      <div className="fixed bottom-40 right-20 opacity-5 animate-float">
        <GiCow size={180} className="text-blue-500" />
      </div>




      {/* ======================== IMAGE + CONTENT SECTION ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop only background frame */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
            className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="/about/X1.jpg"
              alt="Our Dairy Farm"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          {/* Mobile image */}
          <div className="lg:hidden">
            <img
              src="/products/Butter.jpg"
              alt="Our Dairy Farm"
              className="w-full h-auto object-cover rounded-3xl shadow-md"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-700 font-bold text-sm uppercase tracking-wider"
          >
             Established 2000
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Who We Are
            </span>
          </motion.h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-bold text-green-600">Daivatam Dairy</span>, we deliver the
            purest farm-fresh dairy products with complete hygiene and quality assurance.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-blue-600">Our story</span> began with a mission to deliver
              natural, chemical-free milk and dairy items. Today we proudly serve milk, paneer, ghee, curd,
              and more.
            </p>
          </div>

          {/* KEY POINTS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🥛", text: "Dairy Milk" },
              { icon: "💚", text: "Milk Products" },
              { icon: "🏆", text: "Certified Quality" },
              { icon: "✨", text: "Fresh Everyday" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/60 p-4 rounded-xl shadow-md text-center backdrop-blur-xl"
              >
                <span className="text-3xl block">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ======================== CORE VALUES ======================== */}
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-green-50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      {/* ✨ */}
      <span className="text-blue-600 font-bold text-sm uppercase tracking-wider"> What Drives Us</span>
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        Our Core Values
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/60 rounded-3xl shadow-xl p-8 text-center backdrop-blur-xl flex flex-col items-center"
        >
          <div className="text-5xl mb-4 text-green-600">{value.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
          <p className="text-gray-600 text-sm">{value.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* ======================== MILK JOURNEY TIMELINE ======================== */}
     <section className="relative py-20 bg-gradient-to-b from-blue-50 to-green-50">
  <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
    Our Milk Journey
  </h2>
  <div className="relative max-w-5xl mx-auto">
    <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 rounded-full"></div>

    {milkJourney.map((item, index) => (
      <motion.div
        key={index}
        className={`relative mb-20 flex flex-col md:flex-row items-center gap-10 
          ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* DOT (mobile only) */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="bg-white shadow-xl p-4 rounded-full border-4 border-blue-500 z-10 relative block md:hidden">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[3px] h-16 bg-blue-500"></div>
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2">
          <img
            src="/products/Butter.jpg"
            className="w-full h-64 object-cover rounded-xl mb-4"
            alt="journey-img"
          />
          <h3 className="text-2xl font-bold mb-2">
            {item.year} — {item.title}
          </h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
{/* ======================== CHAIRMAN SECTION (ABOUT STYLE – PREMIUM) ======================== */}
<section className="relative py-24 px-6 bg-gradient-to-br from-[#0b1f2a] via-[#102f3f] to-[#163b4f] overflow-hidden">

  {/* Soft Royal Lights */}
  <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-yellow-400/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* ================= IMAGE ================= */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="flex justify-center w-full"
    >
      <div
        className="
          relative
          w-full
          max-w-[420px]
          rounded-[2.5rem]
          overflow-hidden
          shadow-[0_35px_90px_rgba(0,0,0,0.65)]
          border border-white/20
          backdrop-blur-xl
        "
      >
        <img
          src="/about/chairman.jpg"
          alt="Chairman"
          className="
            w-full
            h-[420px]
            sm:h-[460px]
            md:h-[520px]
            lg:h-[560px]
            object-cover
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
      </div>
    </motion.div>

    {/* ================= CONTENT ================= */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="text-white space-y-6"
    >
      <span className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
        Leadership
      </span>

      <h3 className="text-2xl font-bold text-white">
        Mr. Keshav Shinde
      </h3>

      <p className="text-white/90 text-lg leading-relaxed">
        Mr. Keshav Shinde is the Founder and Chairman of <strong>Daivatam Dairy</strong>.
        He brings over two decades of experience in the dairy and food processing industry,
        with a strong focus on quality, hygiene, and sustainable growth.
      </p>

      <p className="text-white/85 text-lg leading-relaxed">
        Under his leadership, Daivatam Dairy has evolved from a small local dairy operation
        into a professionally managed brand offering fresh milk, butter, ghee, curd,
        paneer, and other value-added dairy products.
      </p>

      <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
        <p className="text-white/90 leading-relaxed">
          His vision emphasizes farmer empowerment, modern dairy infrastructure,
          strict quality control systems, and consistent delivery of pure,
          natural dairy products to urban and rural consumers alike.
        </p>
      </div>

      <div className="pt-2">
        <p className="text-yellow-400 font-semibold text-lg">
          Founder & Chairman
        </p>
        <p className="text-white/70 text-sm">
          Daivatam Dairy
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* ======================== CONNECT SECTION ======================== */}
     <div className="text-center mt-10">
        <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Let’s Explore Daivatam Dairy…
        </h3>
        <p className="text-xl text-gray-700 mb-6 flex items-center justify-center gap-2">
          Fresh Milk, Pure Goodness <GiMilkCarton className="text-green-600" />
        </p>
        <button
          onClick={() => window.location.href = "/contact"}
          className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all"
        >
           View Our Profile
        </button>
      </div>

      {/* ======================== STATS SECTION ======================== */}
      <section className="py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    {[
      { number: "20+", label: "Years of Experience", icon: <FaTrophy /> },
      { number: "2500+", label: "Happy Customers", icon: <FaUsers /> },
      { number: "100%", label: "Pure Milk", icon: <FaHandHoldingHeart /> },
    ].map((stat, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-blue-600 to-green-500 text-white p-10 rounded-3xl shadow-xl flex flex-col items-center"
      >
        <div className="text-6xl mb-4">{stat.icon}</div>
        <h3 className="text-4xl font-extrabold">{stat.number}</h3>
        <p className="text-lg opacity-90 mt-2">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  );
}






         








