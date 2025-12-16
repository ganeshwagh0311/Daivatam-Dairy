

// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Products() {
//   const navigate = useNavigate();

//   const products = [
//     {
//       name: "Fresh Cow Milk",
//       img: "/products/cowmilk.jpg",
//       desc: "Daivatam Fresh Cow Milk represents purity and reliability. Sourced from healthy cows and processed under strict quality standards, it retains the authentic taste and nutrition of farm-fresh milk.",
//     },
//     {
//       name: "Milk Powder",
//       img: "/products/Milk_Powder.jpg",
//       desc: "Daivatam Milk Powder is crafted from pure, fresh cow milk to deliver rich taste and consistent quality. It offers excellent solubility and long shelf life.",
//     },
//     {
//       name: "Condensed Milk",
//       img: "/products/Condensed-Milk.jpg",
//       desc: "Rich, creamy condensed milk crafted from pure cow milk — perfect for bakery, desserts and confectionery applications.",
//     },
//     {
//       name: "Butter",
//       img: "/products/Butter.jpg",
//       desc: "Smooth, rich butter made from pure cow milk cream — ideal for bakeries, restaurants and food processing industries.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pt-20 font-poppins">

//       {/* Hero Section */}
//      <section className="text-center py-20 relative bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">

//   {/* Soft Blur Glow Background */}
//   <div className="absolute inset-0 opacity-20">
//     <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
//     <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/20 rounded-full blur-3xl"></div>
//   </div>

//   <motion.div
//     initial={{ opacity: 0, y: -50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1 }}
//     viewport={{ once: true }}
//     className="relative z-10"
//   >
//     {/* Heading */}
//     <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
//       Our Premium <span className="text-blue-200">Products</span>
//     </h1>

//     {/* Underline */}
//     <div className="w-24 h-1 bg-blue-100 mx-auto mt-4 rounded-full shadow-lg"></div>

//     {/* Subtext */}
//     <p className="text-white/90 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
//       Pure • Hygienic • Fresh — Farm-to-Industry dairy excellence crafted with trust.
//     </p>
//   </motion.div>
// </section>


//       {/* Product Cards */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-16">
//         {products.map((product, index) => {
//           const reversed = index % 2 === 1;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-blue-200 hover:shadow-2xl hover:scale-[1.015] transition-all duration-500 ${
//                 reversed ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Product Image */}
//               <div className="md:w-1/2 w-full flex justify-center bg-gradient-to-br from-blue-100 to-green-50 p-10">
//                 <motion.img
//                   src={product.img}
//                   alt={product.name}
//                   className="h-64 object-contain drop-shadow-lg transition-all duration-500"
//                   whileHover={{ scale: 1.08, rotate: 2 }}
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="md:w-1/2 w-full p-10 text-center md:text-left">
//                 <motion.h3
//                   className="text-3xl font-bold text-blue-900 tracking-wide"
//                   whileHover={{ color: "#0a5a97" }}
//                 >
//                   {product.name}
//                 </motion.h3>

//                 <p className="text-gray-700 mt-4 leading-relaxed text-base">
//                   {product.desc}
//                 </p>

//                 <motion.button
//                   whileHover={{ scale: 1.07 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate("/contact")}
//                   className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold shadow-md hover:shadow-blue-500/40 transition duration-300"
//                 >
//                   Enquire Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           );
//         })}
//       </section>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Products() {
  const navigate = useNavigate();

  // Refs for scrolling to each product detail card
  const cardRefs = useRef([]);

  const scrollToCard = (index) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const products = [
    {
      name: "Fresh Cow Milk",
      img: "/products/cowmilk.jpg",
      desc: "Daivatam Fresh Cow Milk represents purity and reliability. Sourced from healthy cows and processed under strict quality standards, it retains the authentic taste and nutrition of farm-fresh milk.",
    },
    {
      name: "Milk Powder",
      img: "/products/Milk_Powder.jpg",
      desc: "Daivatam Milk Powder is crafted from pure, fresh cow milk to deliver rich taste and consistent quality. It offers excellent solubility and long shelf life.",
    },
    {
      name: "Condensed Milk",
      img: "/products/Condensed-Milk.jpg",
      desc: "Rich, creamy condensed milk crafted from pure cow milk — perfect for bakery, desserts and confectionery applications.",
    },
    {
      name: "Butter",
      img: "/products/Butter.jpg",
      desc: "Smooth, rich butter made from pure cow milk cream — ideal for bakeries, restaurants and food processing industries.",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pt-20 font-poppins">

      {/* HERO SECTION */}
   <section className="text-center py-20 relative bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/20 rounded-full blur-3xl"></div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10"
  >
    {/* Wrap heading + underline in a block that fits text width */}
    <div className="inline-block mx-auto">
      <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
        Our Premium <span className="text-blue-200">Products</span>
      </h1>

      {/* Underline that auto-matches text width */}
      <div className="h-1 bg-blue-100 mt-4 rounded-full shadow-lg w-full"></div>
    </div>

    <p className="text-white/90 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
      Pure • Hygienic • Fresh — Farm-to-Industry dairy excellence crafted with trust.
    </p>
  </motion.div>
</section>


 
      

      {/* FULL PRODUCT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-16">
        {products.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-blue-200 hover:shadow-2xl hover:scale-[1.015] transition-all duration-500 ${
                reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="md:w-1/2 w-full flex justify-center bg-gradient-to-br from-blue-100 to-green-50 p-10 overflow-hidden">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-164 object-cover rounded-2xl drop-shadow-lg transition-all duration-500"
                  whileHover={{ scale: 1.08, rotate: 2 }}
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2 w-full p-10 text-center md:text-left">
                <motion.h3
                  className="text-3xl font-bold text-blue-900 tracking-wide"
                  whileHover={{ color: "#0a5a97" }}
                >
                  {product.name}
                </motion.h3>

                <p className="text-gray-700 mt-4 leading-relaxed text-base">
                  {product.desc}
                </p>

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold shadow-md hover:shadow-blue-500/40 transition duration-300"
                >
                  Enquire Now
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}


// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Products() {
//   const navigate = useNavigate();

//   const products = [
//     {
//       name: "Fresh Cow Milk",
//       img: "/products/cowmilk.jpg",
//       desc: "Pure, fresh cow milk processed under strict hygiene standards for rich taste and nutrition.",
//     },
//     {
//       name: "Milk Powder",
//       img: "/products/Milk_Powder.jpg",
//       desc: "Instantly soluble milk powder with long shelf life, ideal for households and food service.",
//     },
//     {
//       name: "Condensed Milk",
//       img: "/products/Condensed-Milk.jpg",
//       desc: "Thick, creamy condensed milk perfect for Indian sweets, bakery and dessert recipes.",
//     },
//     {
//       name: "Butter",
//       img: "/products/Butter.jpg",
//       desc: "Smooth, rich table butter made from pure cow cream for cooking, baking and spreading.",
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     show: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, delay: i * 0.15 },
//     }),
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pt-20 font-poppins">

//       {/* ================= HERO SECTION ================= */}
//       <section className="text-center py-20 relative bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">

//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="relative z-10"
//         >
//           <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
//             Our Premium <span className="text-blue-200">Products</span>
//           </h1>
//           <div className="w-20 h-1 bg-blue-100 mx-auto mt-4 rounded-full shadow-lg" />
//           <p className="text-white/90 mt-6 text-lg max-w-xl mx-auto leading-relaxed">
//             Pure • Hygienic • Fresh — Farm-to-Industry dairy excellence crafted with trust.
//           </p>
//         </motion.div>
//       </section>

//       {/* ================= PRODUCT GRID ================= */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-14">

//         {/* TOP STRIP */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-end mb-14">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.name}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="flex flex-col items-center text-center"
//             >
//               <div className="relative w-full flex justify-center mb-3">
//                 <div className="absolute bottom-0 w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-blue-100 rounded-t-full" />

//                 <motion.img
//                   src={product.img}
//                   alt={product.name}
//                   className="relative z-10 max-h-40 sm:max-h-48 md:max-h-56 object-contain drop-shadow-xl transition-transform duration-500"
//                   whileHover={{ y: -6, scale: 1.02 }}
//                 />
//               </div>

//               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-900">
//                 {product.name}
//               </h3>
//             </motion.div>
//           ))}
//         </div>

        

//         {/* BOTTOM ROW – PRODUCT CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={`${product.name}-card`}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="group bg-white rounded-3xl shadow-xl border border-blue-100/60 px-6 py-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
//             >
//               {/* IMAGE BOX */}
//               <div className="relative flex-shrink-0">
//                 <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-blue-300/70 translate-y-2 translate-x-2 -z-10" />
//                 <div className="bg-blue-50 rounded-3xl px-4 py-4">
//                   <motion.img
//                     src={product.img}
//                     alt={product.name}
//                     className="h-32 w-auto sm:h-36 md:h-40 object-contain drop-shadow-lg"
//                     whileHover={{ scale: 1.05 }}
//                   />
//                 </div>
//               </div>

//               {/* TEXT CONTENT */}
//               <div className="text-center md:text-left">
//                 <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
//                   {product.desc}
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate("/contact")}
//                   className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white text-sm font-semibold shadow-md hover:shadow-lg"
//                 >
//                   Enquire Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



