// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Products() {
//   const navigate = useNavigate();

//   const products = [
//     {
//       name: "Fresh Cow Milk",
//       img: "/products/cowmilk.png",
//       desc: "Daivatam Fresh Cow Milk represents purity and reliability. Sourced from healthy cows and processed under strict quality standards, it retains the authentic taste and nutrition of farm-fresh milk. Trusted by businesses across the dairy and food industry, Daivatam ensures a consistent supply of fresh, high-quality milk supporting partners who value excellence and freshness in every product.",
//     },
//     {
//       name: "Milk Powder",
//       img: "/products/Milk_Powder.jpg",
//       desc: "Daivatam Milk Powder is crafted from pure, fresh cow milk to deliver rich taste and consistent quality. It offers excellent solubility and a long shelf life, making it the ideal choice for dairy, confectionery, and food processing industries.",
//     },
//     {
//       name: "Condensed Milk",
//       img: "/products/Condensed-Milk.webp",
//       desc: "Daivatam Condensed Milk is made from pure cow milk and natural sugar, offering a rich, creamy texture and balanced sweetness — perfect for use in desserts, bakery, and confectionery applications.",
//     },
//     {
//       name: "Butter",
//       img: "/products/Butter.jpg",
//       desc: "Daivatam Butter is made from pure cow milk cream, offering a rich flavor, smooth texture, and consistent quality — ideal for bakeries, restaurants, and food processing industries.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pt-20 font-poppins">
//       {/* Hero Section */}
//       <section className="text-center py-20 bg-[url('/hero-section-image/m2.jpg')] bg-cover bg-center relative">
//         <div className="absolute inset-0 bg-black/40"></div>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="relative z-10"
//         >
//           <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
//             Our <span className="text-green-300">Fresh Dairy</span> Products
//           </h1>
//           <div className="w-20 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
//           <p className="text-white/80 mt-6 text-base md:text-lg max-w-2xl mx-auto">
//             Pure • Fresh • Hygienic • Farm-to-Table goodness crafted with love from our village.
//           </p>
//         </motion.div>
//       </section>

//       {/* Products Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
//         {products.map((product, index) => {
//           const isReversed = index % 2 === 1;
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.2,
//                 ease: "easeOut",
//               }}
//               viewport={{ once: true }}
//               className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/70 backdrop-blur-md shadow-lg overflow-hidden border border-green-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${
//                 isReversed ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Product Image */}
//               <div className="md:w-1/2 w-full flex justify-center bg-gradient-to-br from-green-100 to-green-50 p-8">
//                 <motion.img
//                   src={product.img}
//                   alt={product.name}
//                   className="h-60 sm:h-72 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-110"
//                   whileHover={{ rotate: 2, scale: 1.05 }}
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="md:w-1/2 w-full p-8 sm:p-10 text-center md:text-left">
//                 <motion.h3
//                   className="text-2xl sm:text-3xl font-bold text-green-800 tracking-wide"
//                   whileHover={{ color: "#065f46" }}
//                 >
//                   {product.name}
//                 </motion.h3>
//                 <p className="text-gray-700 mt-4 leading-relaxed text-sm sm:text-base">
//                   {product.desc}
//                 </p>

//                 {/* <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate("/contact")}
//                   className="mt-6 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-md hover:shadow-green-500/50 transition duration-300"
//                 >
//                   Enquire Now
//                 </motion.button> */}
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

export default function Products() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pt-20 font-poppins">

      {/* Hero Section */}
     <section className="text-center py-20 relative bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">

  {/* Soft Blur Glow Background */}
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
    {/* Heading */}
    <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
      Our Premium <span className="text-blue-200">Products</span>
    </h1>

    {/* Underline */}
    <div className="w-24 h-1 bg-blue-100 mx-auto mt-4 rounded-full shadow-lg"></div>

    {/* Subtext */}
    <p className="text-white/90 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
      Pure • Hygienic • Fresh — Farm-to-Industry dairy excellence crafted with trust.
    </p>
  </motion.div>
</section>


      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-16">
        {products.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-blue-200 hover:shadow-2xl hover:scale-[1.015] transition-all duration-500 ${
                reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Product Image */}
              <div className="md:w-1/2 w-full flex justify-center bg-gradient-to-br from-blue-100 to-green-50 p-10">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="h-64 object-contain drop-shadow-lg transition-all duration-500"
                  whileHover={{ scale: 1.08, rotate: 2 }}
                />
              </div>

              {/* Product Info */}
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
