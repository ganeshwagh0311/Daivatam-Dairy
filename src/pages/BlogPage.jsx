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
    excerpt: "Discover why fresh milk and dairy products are healthier and tastier than processed alternatives...",
    category: "Health & Nutrition",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Dairy Farming Practices",
    image: "/blog/blog2.png",
    author: "Team Daivatam",
    date: "Sept 10, 2025",
    excerpt: "Learn how eco-friendly dairy farming supports the environment and improves product quality...",
    category: "Sustainability",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Journey of Milk: From Cow to Cup",
    image: "/blog/blog3.png",
    author: "Admin",
    date: "Aug 28, 2025",
    excerpt: "Follow the journey of pure milk from our farms to your home, ensuring freshness at every step...",
    category: "Farm to Table",
    readTime: "6 min read"
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gradient-to-br from-cream-50 via-white to-green-50 min-h-screen pt-28 pb-20 px-6 md:px-16 font-[Poppins]">
      
      {/* Animated Background Elements */}
      <div className="fixed top-20 left-10 opacity-10 animate-float">
        <GiMilkCarton size={120} className="text-green-500" />
      </div>
      <div className="fixed bottom-20 right-10 opacity-10 animate-float-delayed">
        <GiMilkCarton size={100} className="text-green-400" />
      </div>

      {/* Hero Section with Enhanced Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-3xl shadow-2xl p-10 md:p-20 mb-20 text-center overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
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
            <GiMilkCarton size={60} />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our <span className="text-cream-200">Blog</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-light tracking-wide"
          >
            Fresh Insights, Dairy Knowledge & Healthy Living 🥛
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-cream-200 mx-auto mt-6 rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">Latest Articles</h2>
        <div className="w-24 h-1 bg-green-500 rounded-full"></div>
      </motion.div>

      {/* Blog Grid with Enhanced Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -15, 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group relative"
          >
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg animate-fade-in">
              {blog.category}
            </div>

            {/* Image Container with Overlay */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-7">
              {/* Title with Animation */}
              <motion.h2 
                className="text-2xl font-bold text-green-700 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300"
              >
                {blog.title}
              </motion.h2>

              {/* Meta Info */}
              <div className="flex items-center justify-between gap-3 text-sm text-gray-500 mb-4 flex-wrap">
                <span className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                  <FaUser className="text-green-500" /> 
                  <span className="font-medium">{blog.author}</span>
                </span>
                <span className="flex items-center gap-2">
                  <FaRegClock className="text-green-500" /> 
                  {blog.date}
                </span>
              </div>

              {/* Read Time Badge */}
              <div className="mb-4">
                <span className="text-xs bg-cream-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                  ⏱️ {blog.readTime}
                </span>
              </div>

              {/* Excerpt */}
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Read More Button */}
              <motion.a
                href={`/blog/${blog.id}`}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:text-green-700 transition-colors duration-300 group/link"
              >
                Read More 
                <FaArrowRight className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </motion.a>
            </div>

            {/* Bottom Accent Line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600"
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
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 text-lg"
        >
          Load More Articles
        </motion.button>
      </motion.div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;