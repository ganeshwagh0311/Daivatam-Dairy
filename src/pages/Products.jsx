import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();

  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    {
      name: "Fresh Cow Milk",
      img: "/products/cowmilk.jpg",
      desc: "Daivatam Fresh Cow Milk represents purity and reliability.",
      fullDesc:
        "Our Fresh Cow Milk is sourced directly from healthy cows and processed under strict hygienic conditions. It is rich in calcium, protein and essential nutrients.",
      gallery: [
        "/products/cowmilk.jpg",
        "/products/cowmilk2.jpg",
        "/products/cowmilk3.jpg",
        "/products/cowmilk4.jpg",
        "/products/cowmilk5.jpg",
      ],
    },
    {
      name: "Milk Powder",
      img: "/products/Milk_Powder.jpg",
      desc: "Daivatam Milk Powder is crafted from pure, fresh cow milk.",
      fullDesc:
        "Our Milk Powder offers high solubility, long shelf life and rich creamy taste. Ideal for bulk industrial supply and food processing industries.",
      gallery: [
        "/products/Milk_Powder.jpg",
        "/products/milkpowder2.jpg",
        "/products/milkpowder3.jpg",
        "/products/milkpowder4.jpg",
        "/products/milkpowder5.jpg",
      ],
    },
    {
      name: "Condensed Milk",
      img: "/products/Condensed-Milk.jpg",
      desc: "Rich, creamy condensed milk crafted from pure cow milk.",
      fullDesc:
        "Perfect for bakeries and dessert manufacturing. Smooth texture and premium sweetness for commercial applications.",
      gallery: [
        "/products/Condensed-Milk.jpg",
        "/products/condensed2.jpg",
        "/products/condensed3.jpg",
        "/products/condensed4.jpg",
        "/products/condensed5.jpg",
      ],
    },
    {
      name: "Butter",
      img: "/products/Butter.jpg",
      desc: "Smooth, rich butter made from pure cow milk cream.",
      fullDesc:
        "Premium dairy butter suitable for hotels, bakeries and export markets. Available in salted and unsalted variants.",
      gallery: [
        "/products/Butter.jpg",
        "/products/butter2.jpg",
        "/products/butter3.jpg",
        "/products/butter4.jpg",
        "/products/butter5.jpg",
      ],
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const item = params.get("item");

    if (item) {
      const index = products.findIndex(
        (p) => p.name.toLowerCase().replace(/\s+/g, "-") === item
      );

      if (index !== -1) {
        setActiveIndex(index);
        setTimeout(() => {
          cardRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pt-20 font-poppins">
      
      <Helmet>
        <title>Milk Powder & Butter Manufacturer | Daivatam Dairy</title>
      </Helmet>

      {/* HERO SECTION SAME AS BEFORE */}
      <section className="text-center py-7 relative bg-gradient-to-r from-blue-600 to-emerald-600 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <p className="text-white text-4xl md:text-6xl font-extrabold">
            Our Premium <span className="text-blue-200">Products</span>
          </p>

          <p className="text-white/90 mt-6 text-lg max-w-2xl mx-auto">
            Pure • Hygienic • Fresh — Farm-to-Industry dairy excellence crafted with trust.
          </p>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-14">
        {products.map((product, index) => {
          const reversed = index % 2 === 1;
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-blue-200 transition-all duration-500
              ${reversed ? "md:flex-row-reverse" : ""}`}
            >
              
              {/* IMAGE */}
              <div className="md:w-1/2 w-full p-8">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[280px] object-cover rounded-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2 w-full p-8 text-center md:text-left">
                <h3 className="text-3xl font-bold text-blue-900">
                  {product.name}
                </h3>

                <p className="text-gray-700 mt-4">
                  {product.desc}
                </p>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold"
                  >
                    Enquire Now
                  </button>

                  <button
                    onClick={() =>
                      setActiveIndex(isActive ? null : index)
                    }
                    className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
                  >
                    {isActive ? "Close" : "Read More"}
                  </button>
                </div>

                {/* EXPAND SECTION */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 space-y-6"
                  >
                    <p className="text-gray-800">
                      {product.fullDesc}
                    </p>

                    {/* SMALL CARDS GALLERY */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {product.gallery.map((img, i) => (
                        <div
                          key={i}
                          className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
                        >
                          <img
                            src={img}
                            alt="product variant"
                            className="w-full h-24 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}