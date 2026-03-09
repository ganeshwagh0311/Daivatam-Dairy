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
        "Daivatam Fresh Cow Milk is procured from a well established farmer network and collected under strict hygienic conditions to ensure consistent quality and purity. Processed using standardized quality controls, it retains its natural nutritional profile, making it suitable for large scale dairy processing, food manufacturing, and institutional supply. We ensure reliable bulk availability, uniform composition, and safe handling to meet the operational needs of businesses that demand freshness, traceability, and dependable supply.",
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
      desc: "Daivatam Milk Powder is crafted from pure cow milk.",
      fullDesc:
        "Daivatam Milk Powder is manufactured from pure cow milk using advanced drying technology to deliver stable quality, excellent solubility, and extended shelf life. Designed for commercial applications, it is ideal for food processors, bakeries, confectionery manufacturers, and HoReCa sectors requiring consistent performance in high volume production.",
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
      desc: "Rich creamy condensed milk crafted from pure cow milk.",
      fullDesc:
        "Daivatam Condensed Milk is produced through controlled concentration of high quality cow milk to achieve uniform viscosity, smooth texture, and dependable sweetness levels. It is widely used in bakeries, dessert production and large scale kitchens.",
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
      desc: "Smooth rich butter made from pure cow milk cream.",
      fullDesc:
        "Daivatam Butter is crafted from premium cow milk cream and processed to deliver stable fat content, smooth texture, and rich dairy flavor required for professional use. Suitable for bakeries, restaurants, food processors and catering industries.",
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

      {/* HERO */}
      <section className="text-center py-10 bg-gradient-to-r from-blue-600 to-emerald-600">
        <p className="text-white text-4xl md:text-6xl font-extrabold">
          Our Premium <span className="text-blue-200">Products</span>
        </p>

        <p className="text-white/90 mt-6 text-lg max-w-2xl mx-auto">
          Pure • Hygienic • Fresh — Farm-to-Industry dairy excellence crafted with trust.
        </p>
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
              className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-blue-200 transition-all duration-500
              ${reversed ? "md:flex-row-reverse" : ""}`}
            >

              {/* IMAGE */}
              <div className="md:w-1/2 w-full p-8">
                <img
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

                {/* READ MORE */}
                {!isActive && (
                  <div className="mt-6">
                    <button
                      onClick={() => setActiveIndex(index)}
                      className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
                    >
                      Read More
                    </button>
                  </div>
                )}

                {/* FULL INFO */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 space-y-6"
                  >

                    <p className="text-gray-800">
                      {product.fullDesc}
                    </p>

                    {/* GALLERY */}
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

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">

                      <button
                        onClick={() => navigate("/contact")}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold"
                      >
                        Enquire Now
                      </button>

                      <button
                        onClick={() => setActiveIndex(null)}
                        className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
                      >
                        Close
                      </button>

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