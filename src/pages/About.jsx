import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaStar, FaTrophy, FaUsers, FaHandHoldingHeart } from "react-icons/fa";
import { GiMilkCarton, GiCow } from "react-icons/gi";

export default function About() {
  const values = [
    { icon: <FaLeaf />, title: "100% Natural", desc: "No additives or preservatives" },
    { icon: <FaHeart />, title: "Care & Love", desc: "Every product made with passion" },
    { icon: <FaStar />, title: "Premium Quality", desc: "Best in class dairy products" },
    { icon: <FaTrophy />, title: "Award Winning", desc: "Recognized for excellence" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-green-50 pt-24 font-[Poppins] overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed top-40 left-20 opacity-5 animate-spin-slow">
        <GiMilkCarton size={200} className="text-green-500" />
      </div>
      <div className="fixed bottom-40 right-20 opacity-5 animate-float">
        <GiCow size={180} className="text-blue-500" />
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ✨ Trusted Since 2000
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              About Daivatam
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 flex items-center justify-center gap-3 flex-wrap"
          >
            <span className="flex items-center gap-2">
              <FaLeaf className="text-green-500" /> Our Journey
            </span>
            <span className="text-green-500">•</span>
            <span className="flex items-center gap-2">
              <FaHeart className="text-blue-500" /> Our Promise
            </span>
            <span className="text-green-500">•</span>
            <span className="flex items-center gap-2">
              <FaStar className="text-green-500" /> Our Values
            </span>
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 mx-auto mt-8 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </section>

      {/* About Content - Image & Text */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image with Multiple Layers */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Background Cards */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform rotate-3 opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform -rotate-3 opacity-20"></div>
          
          {/* Main Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="/about/image.png"
              alt="Our Dairy Farm"
              className="w-full h-[450px] object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Floating Badge on Image */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <GiMilkCarton className="text-green-500 text-3xl" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Premium</p>
                  <p className="text-xs text-gray-600">Quality</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-green-600 font-bold text-sm uppercase tracking-wider"
            >
              🌱 Established 2000
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold mt-3 mb-6"
            >
              <span className="bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
                Who We Are
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-5"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-bold text-green-600">Daivatam Dairy</span>, we believe in 
              bringing you the purest and freshest dairy products, straight from our farms to your table.  
              With a commitment to quality, hygiene, and tradition, we nurture our cows with love and 
              care to ensure every drop of milk is as natural as it gets.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">Our story</span> began with a passion for authentic dairy and a vision to connect people 
                with the farm-fresh goodness they truly deserve. Over the years, we've grown into a trusted 
                name for milk, paneer, curd, ghee, and more – while staying rooted in our values.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: "🥛", text: "100% Pure Milk" },
                { icon: "🌾", text: "Organic Farming" },
                { icon: "💚", text: "Animal Welfare" },
                { icon: "🏆", text: "Certified Quality" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white p-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-xl transition-all"
                >
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 via-cream-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">✨ What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="bg-white rounded-3xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative text-5xl mb-4 inline-block text-green-600 group-hover:text-blue-600 transition-colors duration-300"
                >
                  {value.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 relative">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm relative">{value.desc}</p>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
              Our Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { number: "20+", label: "Years of Experience", icon: <FaTrophy />, color: "from-green-500 to-green-700" },
              { number: "2500+", label: "Happy Customers", icon: <FaUsers />, color: "from-blue-500 to-blue-700" },
              { number: "100%", label: "Pure & Natural Products", icon: <FaHandHoldingHeart />, color: "from-green-600 to-blue-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`bg-gradient-to-br ${stat.color} text-white rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden group`}
              >
                {/* Animated Background Circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl mb-4 relative z-10"
                >
                  {stat.icon}
                </motion.div>

                <motion.h3 
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-6xl font-extrabold mb-3 relative z-10"
                >
                  {stat.number}
                </motion.h3>

                <p className="text-xl font-medium relative z-10">{stat.label}</p>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-white/30"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}