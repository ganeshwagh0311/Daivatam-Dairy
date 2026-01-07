import { motion } from "framer-motion";
import { FaRegClock, FaUser, FaArrowRight } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";

const blogs = [
  {
    id: 1,
    title: "Benefits of Fresh Dairy Products",
    image: "/blog/blog1.png",
    author: "Daivatam Dairy",
    date: "Sept 15, 2025",
    excerpt:
      "Discover why fresh milk and dairy products are healthier and tastier than processed alternatives...",
    category: "Health & Nutrition",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Sustainable Dairy Farming Practices",
    image: "/blog/blog2.png",
    author: "Team Daivatam",
    date: "Sept 10, 2025",
    excerpt:
      "Learn how eco-friendly dairy farming supports the environment and improves product quality...",
    category: "Sustainability",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Journey of Milk: From Cow to Cup",
    image: "/blog/blog3.png",
    author: "Admin",
    date: "Aug 28, 2025",
    excerpt:
      "Follow the journey of pure milk from our farms to your home, ensuring freshness at every step...",
    category: "Farm to Table",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Top 5 Dairy Recipes for Healthy Living",
    image: "/blog/blog4.jpg",
    author: "Nutrition Team",
    date: "Oct 01, 2025",
    excerpt:
      "Explore our favorite dairy recipes that are delicious, nutritious, and easy to prepare at home...",
    category: "Recipes",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Understanding Milk Quality Standards",
    image: "/blog/blog5.jpg",
    author: "Quality Control",
    date: "Oct 05, 2025",
    excerpt:
      "Learn about the strict quality standards we follow to ensure every drop of milk is pure and safe...",
    category: "Quality",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Dairy Farming Innovations in 2025",
    image: "/blog/blog6.jpg",
    author: "Innovation Team",
    date: "Oct 08, 2025",
    excerpt:
      "Discover the latest technological innovations transforming the dairy industry for the better...",
    category: "Innovation",
    readTime: "7 min read",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen pt-28 pb-20 px-6 md:px-16 font-[Poppins]">

      {/* Floating Decorative */}
      <div className="fixed top-20 left-10 opacity-10 animate-float">
        <GiMilkCarton size={120} className="text-blue-400" />
      </div>
      <div className="fixed bottom-20 right-10 opacity-10 animate-float-delayed">
        <GiMilkCarton size={100} className="text-green-400" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-3xl shadow-2xl p-4 md:p-8 mb-16 text-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {/* <GiMilkCarton size={60} className="text-white" /> */}
          </motion.div>

          <p className="text-5xl font-poppins md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow">
            Our <span className="text-blue-200 font-poppins ">Blog</span>
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl  font-poppins md:text-2xl font-light tracking-wide opacity-95"
          >
            Fresh Insights, Dairy Knowledge & Healthy Living 🥛
          </motion.p>

         <motion.div
  initial={{ width: 0 }}
  animate={{ width: "100%" }} // Mobile fills width
  transition={{ delay: 1, duration: 0.8 }}
  className="h-1 bg-white/40 mx-auto mt-6 rounded-full max-w-[630px]" 
  // Desktop stops at 630px
></motion.div>

        </motion.div>
      </motion.div>


{/* =========================
   BLOG CONTENT – MANAGEMENT & GROWTH
========================= */}
{/* =========================
   LEADERSHIP INSIGHT – SHIVAJI SHINDE
========================= */}
<section className="max-w-7xl mx-auto mb-24">
  <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12">
    <h2 className="text-3xl font-bold text-blue-500 mb-6">
      Shivaji Shinde – Leadership & Vision
    </h2>

    <p className="text-gray-700 mb-4 leading-relaxed">
      Shivaji Shinde is a distinguished dairy industry leader with over
      <strong> 30 years of experience</strong> spanning milk procurement,
      quality excellence, and production operations. An
      <strong> M.Sc. (Agri.) in Dairy Science</strong>, he has held senior
      leadership roles at Vadilal Dairy International Ltd., Parmalat (SPA)
      India Ltd., Parag Milk Foods (Gowardhan), and Patanjali Ayurved Ltd.,
      where he successfully led large-scale milk procurement operations
      across Maharashtra.
    </p>

    <p className="text-gray-700 mb-4 leading-relaxed">
      At <strong>DAIVATAM</strong>, his vision is to build a
      <strong> world-class, integrated dairy brand</strong> offering
      high-quality products such as milk powder, ghee, butter, whey powder,
      and value-added dairy ingredients—driven by farmer empowerment,
      innovation, sustainability, and uncompromising quality.
    </p>

    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
      “At DAIVATAM, a world-class dairy brand is built on strong farmer
      partnerships and uncompromising quality.”
    </blockquote>
  </div>
</section>

{/* =========================
   CLEAN MILK PROCUREMENT VISION
========================= */}
<section className="max-w-7xl mx-auto mb-24">
  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl shadow-lg p-6 md:p-12">
    <h2 className="text-3xl font-bold text-blue-500 mb-6">
      Vision for Clean & Quality Milk Procurement
    </h2>

    <p className="text-gray-700 mb-4 leading-relaxed">
      With over <strong>23 years of experience</strong> in the dairy sector,
      the leadership at Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam),
      Takalimiya, has played a key role in establishing structured milk
      procurement systems focused on quality, hygiene, and regulatory
      compliance.
    </p>

    <p className="text-gray-700 mb-4 leading-relaxed">
      Through continuous farmer engagement and training, clean milk
      production practices have enabled the consistent collection of
      approximately <strong>90,000 litres of milk per day</strong> at a
      single Milk Collection Centre (MCC), with a scalable model targeting
      <strong> 3 to 4 lakh litres per day</strong>.
    </p>

    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      <li>Organoleptic & temperature evaluation</li>
      <li>Fat, SNF, acidity & adulteration analysis</li>
      <li>Advanced testing using GC & FTIR technology</li>
      <li>Strict adherence to GMP, GHP & FSSAI norms</li>
    </ul>
  </div>
</section>

{/* =========================
   PLANT LEADERSHIP – SANDIP PARE
========================= */}
<section className="max-w-7xl mx-auto mb-24">
  <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12">
    <h2 className="text-3xl font-bold text-blue-500 mb-4">
      Sandip Ramdas Pare
    </h2>

    <p className="text-gray-700 mb-2">
      <strong>Position:</strong> Plant In-Charge – NDSSK
    </p>
    <p className="text-gray-700 mb-2">
      <strong>Education:</strong> B.Sc. Chemistry
    </p>
    <p className="text-gray-700 mb-4">
      <strong>Experience:</strong> 23 Years (Schreiber Dynamix, NDSSK)
    </p>

    <p className="text-gray-700 leading-relaxed">
      Mr. Sandip Pare plays a critical role in plant operations, ensuring
      strict adherence to quality standards, process discipline, and food
      safety compliance across dairy production activities.
    </p>
  </div>
</section>

{/* =========================
   QUALITY MANAGEMENT SYSTEM
========================= */}
<section className="max-w-7xl mx-auto mb-28">
  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl shadow-xl p-6 md:p-12">
    <h2 className="text-3xl font-bold text-blue-500 mb-6">
      Quality Control & Assurance System
    </h2>

    <p className="text-gray-700 mb-4 leading-relaxed">
      Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam) operates a
      robust and sustainable Quality Management System focused on
      prevention rather than end-stage inspection.
    </p>

    <p className="text-gray-700 mb-4 leading-relaxed">
      Quality Assurance objectives are aligned with
      <strong> FSSC 22000, ISO 22000, GMP, GHP, and FSSAI</strong> standards,
      supported by SOPs, traceability systems, internal audits, and CAPA
      mechanisms.
    </p>

    <p className="text-gray-700 mb-4 leading-relaxed">
      Through disciplined execution and data-driven decision-making,
      Navnath Dairy continues to deliver safe, compliant, and high-quality
      dairy products.
    </p>

    <p className="text-gray-700 italic">
      – <strong>Mrs. Pratiksha S. Dighe</strong><br />
      Manager – Quality Control & Assurance<br />
      Navnath Dudh Sankalan and Shitkaran Kendra (Daivatam), Takalimiya
    </p>
  </div>
</section>



      {/* Latest Articles Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
          Latest Articles
        </h2>
        <div className="w-24 h-1 bg-blue-300 rounded-full"></div>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ y: -15, scale: 1.03 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group relative"
          >
            <div className="absolute top-4 left-4 z-10 text-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              {blog.category}
            </div>

            <div className="relative h-64 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-7">
              <motion.h2 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {blog.title}
              </motion.h2>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4 flex-wrap">
                <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                  <FaUser className="text-blue-400" />
                  <span className="font-medium">{blog.author}</span>
                </span>
                <span className="flex items-center gap-2">
                  <FaRegClock className="text-blue-400" /> {blog.date}
                </span>
              </div>

              <span className="text-xs bg-blue-100 text-blue-400 px-3 py-1 rounded-full font-semibold">
                ⏱️ {blog.readTime}
              </span>

              <p className="text-gray-600 my-4 leading-relaxed line-clamp-3">
                {blog.excerpt}
              </p>

              <motion.a
                href={`/blog/${blog.id}`}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-blue-400 font-bold text-lg transition-colors duration-300"
              >
                Read More <FaArrowRight />
              </motion.a>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              className="h-2 bg-gradient-to-r from-blue-400 via-green-500 to-blue-500"
            ></motion.div>
          </motion.div>
        ))}
      </div>



      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-400 to-green-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 text-lg"
        >
          Load More Articles
        </motion.button>
      </motion.div>

      {/* CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
