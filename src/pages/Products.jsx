import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Products() {
  const navigate = useNavigate();

  const products = [
    {
  name: "Fresh Cow Milk",
  img: "/products/cowmilk.jpg",
  fullDesc: `
Daivatam Fresh Cow Milk is procured from a well established farmer network and collected under strict hygienic conditions to ensure consistent quality and purity. 

Processed using standardized quality controls, it retains its natural nutritional profile, making it suitable for large scale dairy processing, food manufacturing, and institutional supply.

We ensure reliable bulk availability, uniform composition, and safe handling to meet the operational needs of businesses that demand freshness, traceability, and dependable supply.
  `,
},
    {
      name: "Milk Powder",
      img: "/products/Milk_Powder.jpg",
      fullDesc:
        `Daivatam Milk Powder is manufactured from pure cow milk using advanced drying technology to 
deliver stable quality, excellent solubility, and extended shelf life. Designed for commercial 
applications, it is ideal for food processors, bakeries, confectionery manufacturers, and HoReCa 
sectors requiring consistent performance in high volume production. 
It offers ease of storage, transportation efficiency, and reliable functionality across diverse 
formulations.`
    },
    {
      name: "Condensed Milk",
      img: "/products/Condensed-Milk.jpg",
      fullDesc:
        `Daivatam Condensed Milk is produced through controlled concentration of high-quality cow milk 
to achieve uniform viscosity, smooth texture, and dependable sweetness levels. Tailored for 
industrial and culinary applications, it is widely used in bakeries, sweet manufacturers, dessert 
production, and large scale kitchens. 
Its consistent quality and batch uniformity ensure predictable results in every production cycle.`
    },
    {
      name: "Butter",
      img: "/products/Butter.jpg",
      fullDesc:
        `Daivatam Butter is crafted from premium cow milk cream and processed to deliver stable fat 
content, smooth texture, and rich dairy flavor required for professional use. Suitable for 
bakeries, restaurants, food processors, and institutional catering, it performs reliably in cooking, 
baking, and product formulation. 
Our bulk supply model ensures continuity, quality assurance, and efficiency for high demand 
operations.`
    },
  ];

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
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">

        {products.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-blue-200 transition-all duration-500
              ${reversed ? "md:flex-row-reverse" : ""}`}
            >

              {/* IMAGE */}
              <div className="md:w-1/2 w-full p-8">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2 w-full p-8 text-center md:text-left">

                {/* NAME */}
                <h3 className="text-3xl font-bold text-blue-900">
                  {product.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 mt-4">
                  {product.fullDesc}
                </p>

                {/* BUTTON */}
                <div className="mt-6 flex justify-center md:justify-start">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold"
                  >
                    Enquire Now
                  </button>
                </div>

              </div>

            </motion.div>
          );
        })}

      </section>

    </div>
  );
}