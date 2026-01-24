import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pt-20 font-poppins">

      {/* HERO SECTION */}
      <section className="text-center py-7 relative bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">
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
          <div className="inline-block mx-auto">
            <p className="text-white font-poppins text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
              Our Premium <span className="text-blue-200">Products</span>
            </p>
            <div className="h-1 bg-blue-100 mt-4 rounded-full shadow-lg w-full"></div>
          </div>

          <p className="text-white/90  font-poppins mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Pure • Hygienic • Fresh — Farm-to-Industry dairy excellence crafted with trust.
          </p>
        </motion.div>
      </section>

      {/* FULL PRODUCT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-14">
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
              className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-blue-200 hover:shadow-2xl hover:scale-[1.015] transition-all duration-500
                ${reversed ? "md:flex-row-reverse" : ""}

                /* CARD SIZE CONTROL */
                min-h-[420px] 
                md:min-h-[380px] 
                lg:min-h-[420px]
              `}
            >
<Helmet>
  <title>Milk Products | Daivatam Dairy</title>
  <meta
    name="description"
    content="Explore fresh cow milk, buffalo milk and dairy products from Daivatam Dairy."
  />
  <link rel="canonical" href="https://daivatamdairy.com/products" />
</Helmet>


              
              {/* IMAGE */}
              <div className="md:w-1/2 w-full flex justify-center bg-gradient-to-br from-blue-100 to-green-50 
                              p-6 sm:p-8 md:p-10 overflow-hidden">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="
                    w-full object-cover rounded-2xl drop-shadow-lg transition-all duration-500
                    h-[220px]      /* Mobile */
                    sm:h-[260px]   /* Small Tablet */
                    md:h-[280px]   /* Tablet */
                    lg:h-[340px]   /* Desktop */
                  "
                  whileHover={{ scale: 1.08, rotate: 2 }}
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2 w-full p-6 sm:p-8 md:p-10 text-center md:text-left">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-blue-900 tracking-wide"
                  whileHover={{ color: "#0a5a97" }}
                >
                  {product.name}
                </motion.h3>

                <p className="text-gray-700 mt-4 leading-relaxed text-sm sm:text-base">
                  {product.desc}
                </p>

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="mt-6 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold shadow-md hover:shadow-blue-500/40 transition duration-300"
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


