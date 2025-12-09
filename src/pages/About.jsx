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
      year: "2005",
      title: "Production Increased",
      description: "Expanded to large-scale dairy operations.",
      image: "/about/journey2.png",
    },
    {
      year: "2015",
      title: "Modern Technology",
      description: "Adopted high-tech processing and packaging.",
      image: "/about/journey3.png",
    },
    {
      year: "2023",
      title: "Premium Brand",
      description: "Trusted by thousands of families.",
      image: "/about/journey4.png",
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
              src="/products/Butter.jpg"
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


      {/* ======================== CONNECT SECTION ======================== */}
      <div className="text-center mb-16">
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
      { number: "100%", label: "Pure Natural Milk", icon: <FaHandHoldingHeart /> },
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






         








// import { motion } from "framer-motion";
// import {
//   FaLeaf,
//   FaHeart,
//   FaStar,
//   FaTrophy,
//   FaUsers,
//   FaHandHoldingHeart,
//   FaIndustry,
// } from "react-icons/fa";
// import { GiCow, GiFactory } from "react-icons/gi";
// import { MdLocalShipping } from "react-icons/md";

// export default function About() {
//   const processSteps = [
//     {
//       icon: <GiCow />,
//       title: "Healthy Cows",
//       description: "Our cows are raised ethically with high standards of care.",
//     },
//     {
//       icon: <GiFactory />,
//       title: "Modern Processing",
//       description: "Processed with world-class hygienic technologies.",
//     },
//     {
//       icon: <FaIndustry />,
//       title: "Quality Testing",
//       description: "Every batch is tested to meet strict dairy standards.",
//     },
//     {
//       icon: <MdLocalShipping />,
//       title: "Fast Delivery",
//       description: "Delivered fresh so you get only the purest milk.",
//     },
//   ];

//   return (
//     <div className="font-poppins">

//       {/* HERO SECTION */}
//       <section className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-28 overflow-hidden">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           About Daivatam Dairy
//         </motion.h1>

//         <motion.p
//           className="max-w-3xl mx-auto text-center text-lg mt-6 opacity-90"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Providing Fresh, Pure & Premium Dairy Products Straight From The Farm To Your Home.
//         </motion.p>

//         <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
//         <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
//       </section>

//       {/* MISSION SECTION */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-12 inline-block"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Our Mission
//           <span className="block h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-2 rounded-full"></span>
//         </motion.h2>

//         <div className="max-w-5xl mx-auto px-6">
//           <motion.p
//             className="text-lg text-gray-700 leading-relaxed text-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             We aim to serve fresh and nutritious dairy products that enrich your lifestyle.
//             With a commitment to purity, transparency, and sustainable farming, Daivatam Dairy
//             delivers excellence from farm to home.
//           </motion.p>
//         </div>
//       </section>

//       {/* VISION SECTION */}
//       <section className="py-20 bg-white relative overflow-hidden text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-12 inline-block"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Our Vision
//           <span className="block h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-2 rounded-full"></span>
//         </motion.h2>

//         <div className="max-w-5xl mx-auto px-6">
//           <motion.p
//             className="text-lg text-gray-700 leading-relaxed text-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Our vision is to revolutionize dairy consumption by offering the purest form of milk
//             and dairy essentials while uplifting farmers and promoting sustainable dairy production.
//           </motion.p>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-12 inline-block"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Why Choose Daivatam Dairy?
//           <span className="block h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-2 rounded-full"></span>
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
//           {[
//             {
//               icon: "🥛",
//               title: "Fresh Milk Daily",
//               description: "We deliver farm-fresh milk every day, ensuring the highest quality and natural taste.",
//             },
//             {
//               icon: "🧀",
//               title: "High-Quality Dairy Products",
//               description:
//                 "From cheese to yogurt, all our products are made with pure milk and traditional methods.",
//             },
//             {
//               icon: "🐄",
//               title: "Ethically Sourced",
//               description:
//                 "Our cows are well-cared for, fed naturally, and milked in a hygienic environment.",
//             },
//             {
//               icon: "🧼",
//               title: "Hygienic Processing",
//               description:
//                 "All our dairy products are processed under strict hygiene standards to ensure safety and purity.",
//             },
//             {
//               icon: "🚚",
//               title: "Fast Delivery",
//               description:
//                 "We ensure timely delivery of milk and dairy products, directly from the farm to your doorstep.",
//             },
//             {
//               icon: "🏆",
//               title: "Trusted Brand",
//               description:
//                 "With years of experience in dairy farming, we are a trusted name for quality milk products.",
//             },
//           ].map((value, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="text-5xl text-emerald-600 mb-4">{value.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {value.title}
//               </h3>
//               <p className="text-gray-700">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* MILK PROCESSING */}
//       <section className="py-20 bg-white relative overflow-hidden text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-12 inline-block"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Our Milk Processing
//           <span className="block h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-2 rounded-full"></span>
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
//           {processSteps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 text-center"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="text-5xl text-blue-600 mb-4">{step.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-gray-700">{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* COMMITMENT SECTION */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-center relative overflow-hidden">
//         <motion.h2
//           className="text-4xl font-bold mb-6 inline-block"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           Our Commitment to Quality
//         </motion.h2>

//         <motion.p
//           className="max-w-3xl mx-auto text-lg opacity-90"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           We ensure fresh, pure and premium dairy products with world-class hygiene and
//           strict quality control from farm to home.
//         </motion.p>
//       </section>
//     </div>
//   );
// }





// import { motion } from "framer-motion";
// import { FaRegDotCircle } from "react-icons/fa";

// export default function About() {
//   const milkJourney = [
//     {
//       year: "2000",
//       title: "Birth of Daivatam Dairy",
//       description:
//         "Our dairy journey started with a small farm and a big dream — to deliver pure, fresh milk.",
//       image: "/about/journey-1.jpg",
//     },
//     {
//       year: "2005",
//       title: "Growing Farm",
//       description:
//         "We expanded our cattle farm and adopted better feeding practices to ensure healthier cows.",
//       image: "/about/journey-2.jpg",
//     },
//     {
//       year: "2010",
//       title: "Modern Processing",
//       description:
//         "Introduced hygienic processing systems ensuring purity and freshness in every drop.",
//       image: "/about/journey-3.jpg",
//     },
//     {
//       year: "2015",
//       title: "Quality Assurance",
//       description:
//         "Every batch began passing through strict quality testing and scientific evaluation.",
//       image: "/about/journey-4.jpg",
//     },
//     {
//       year: "2020",
//       title: "Fast Home Delivery",
//       description:
//         "We upgraded our supply chain to ensure fresh milk reaches your home on time.",
//       image: "/about/journey-5.jpg",
//     },
//     {
//       year: "2025",
//       title: "Premium Dairy Products",
//       description:
//         "Launched our premium line of milk, paneer, ghee & curd — 100% pure, natural, and trusted.",
//       image: "/about/journey-6.jpg",
//     },
//   ];

//   return (
//     <div className="font-poppins">

//       {/* HERO SECTION */}
//       <section className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-24">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           About Daivatam Dairy
//         </motion.h1>
//         <motion.p
//           className="max-w-3xl mx-auto text-center text-lg mt-6 opacity-90"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           A journey of purity, trust and premium dairy products — straight from
//           our farm to your home.
//         </motion.p>
//       </section>

//       {/* TIMELINE JOURNEY */}
//       <section className="relative py-20 bg-gray-50">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Our Milk Journey
//         </h2>

//         <div className="relative max-w-5xl mx-auto">

//           {/* Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-500 h-full rounded-full"></div>

//           {milkJourney.map((item, index) => (
//             <motion.div
//               key={index}
//               className={`mb-20 flex flex-col md:flex-row items-center gap-10 ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               }`}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* YEAR DOT */}
//               <div className="relative md:w-1/2 flex justify-center">
//                 <div className="bg-white shadow-xl p-4 rounded-full border-4 border-emerald-500">
//                   <FaRegDotCircle size={50} className="text-emerald-600" />
//                 </div>
//               </div>

//               {/* CARD */}
//               <div className="bg-white shadow-xl rounded-2xl p-6 md:w-1/2">
//                 <img
//                   src={item.image}
//                   className="w-full h-64 object-cover rounded-xl mb-4"
//                   alt="journey-img"
//                 />
//                 <h3 className="text-2xl font-bold mb-2">
//                   {item.year} — {item.title}
//                 </h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* COMMITMENT SECTION */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-6"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           Our Commitment to Quality
//         </motion.h2>
//         <motion.p
//           className="max-w-3xl mx-auto text-lg opacity-90"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           We ensure fresh, pure and premium dairy products with world-class
//           hygiene and strict quality control from farm to home.
//         </motion.p>
//       </section>
//     </div>
//   );
// }

