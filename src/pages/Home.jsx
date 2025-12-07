// import { useState } from "react";
// import Hero from "../components/Hero";
// import WhyChooseUs from "../components/WhyChooseUs";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Testimonials from "../components/Testimonials";
// import CallToAction from "../components/CallToAction";
// import { FaLeaf, FaHeart, FaCheckCircle } from "react-icons/fa";

// const images = [
//   "/hero-section-image/m2.jpg",
//   "/hero-section-image/m3.jpg",
//   "/hero-section-image/m5.jpg",
//   "/hero-section-image/m2.jpg",
//   "/hero-section-image/milk.jpg",
// ];

// const recommendedProducts = [
//   {
//     name: "Fresh Cow Milk",
//     desc: "Pure & farm-fresh cow milk delivered daily.",
//     img: "/products/cowmilk.jpg",
//   },
//   {
//     name: "Organic Paneer",
//     desc: "Soft, rich, and protein-packed paneer for your meals.",
//     img: "/products/paneer.png",
//   },
//   {
//     name: "Pure Desi Ghee",
//     desc: "Traditional hand-churned ghee full of aroma & taste.",
//     img: "/products/ghee.png",
//   },
//   {
//     name: "Fresh Curd",
//     desc: "Thick, creamy curd made with natural fermentation.",
//     img: "/products/curd.png",
//   },
// ];

// const Home = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   // Product slider settings (2 in mobile)
//   const productSettings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     pauseOnHover: false,
//     centerMode: true,
//     centerPadding: "40px",
//     beforeChange: (_, next) => setActiveSlide(next),
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
//       { breakpoint: 768, settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" } },
//       { breakpoint: 480, settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" } },
//     ],
//   };

//   // Video slider settings
//   const videoSettings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     fade: true,
//     arrows: false,
//     pauseOnHover: false,
//   };

//   // Social slider settings (no repetition, 2 in mobile)
//   const socialSettings = {
//     dots: true,
//     infinite: false, // no repeat
//     speed: 800,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 2 } },
//     ],
//   };

//   const videos = [
//     { id: 1, src: "/videos/farm1.mp4" },
//     { id: 2, src: "/videos/farm2.mp4" },
//     { id: 3, src: "/videos/farm3.mp4" },
//   ];

//   const posts = [
//     { id: 1, img: "/posts/insta5.webp", href: "#" },
//     { id: 2, img: "/posts/insta2.jpg", href: "#" },
//     { id: 3, img: "/posts/insta3.jpg", href: "#" },
//     { id: 4, img: "/posts/insta4.webp", href: "#" },
//   ];

//   return (
//     <div className="overflow-hidden pt-20">
//       <Hero />

//       {/* ---------------- ABOUT ---------------- */}
//       <section className="relative bg-white py-12 px-4 sm:px-6 md:px-20 text-center">
//   <div className="max-w-4xl mx-auto">
//     <h2 className="text-3xl sm:text-4xl font-bold text-[#0077B6] mb-4">
//       About Us
//     </h2>
//     <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
//       Founded in <span className="font-semibold text-[#0077B6]">2000</span>,{" "}
//       <span className="font-semibold">Navnath Dairy</span> has established itself as a trusted name in milk procurement and processing. 
//       With years of expertise, the company has now launched its premium dairy brand{" "}
//       <span className="font-semibold text-green-700">Daivatam</span>, dedicated to delivering{" "}
//       <span className="italic">purity, taste,</span> and{" "}
//       <span className="italic">innovation</span> in dairy products.
//     </p>

//     <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-6">
//       <span className="font-semibold">Navnath Dairy</span> is not just a dairy plant — it’s a collective effort of dedicated milk producers 
//       and progressive farmers, working together for rural development and sustainable growth. 
//       Our journey has been built on <span className="font-semibold">trust, transparency,</span> 
//       and the shared goal of producing the best quality milk and milk products. 
//       We take pride in supporting our farmers while delivering fresh and safe dairy products 
//       to our consumers every day.
//     </p>
//   </div>
// </section>


//       {/* ---------------- OUR DAIRY DELIGHTS ---------------- */}
//       <section className="py-14 bg-[#FFF9F1]">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16">
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8"
//           >
//             Our Dairy Delights
//           </motion.h2>

//           <Slider {...productSettings}>
//             {recommendedProducts.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="px-2"
//               >
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-full h-56 sm:h-60 md:h-64 object-cover"
//                   />
//                   <div className="p-4 sm:p-6 text-center">
//                     <h3 className="text-lg sm:text-xl font-semibold text-emerald-800">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-600 mt-2 text-sm sm:text-base">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       <WhyChooseUs />

//       {/* ---------------- FARM GALLERY ---------------- */}
//       <section className="py-14 bg-gradient-to-b from-emerald-50 to-white">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">
//             Farm Gallery
//           </h2>

//           <Slider {...productSettings}>
//             {images.map((src, index) => (
//               <div key={index} className="px-2">
//                 <motion.div
//                   animate={{
//                     scale: activeSlide === index ? 1.05 : 1,
//                     opacity: activeSlide === index ? 1 : 0.8,
//                   }}
//                   transition={{ duration: 0.6 }}
//                   className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
//                 >
//                   <img
//                     src={src}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 ease-in-out"
//                   />
//                 </motion.div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       {/* ---------------- VIDEO SECTION ---------------- */}
//       <section className="py-14 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">
//             Our Farm in Motion
//           </h2>
//           <Slider {...videoSettings}>
//             {videos.map((video) => (
//               <div key={video.id} className="flex justify-center">
//                 <video
//                   src={video.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="rounded-2xl shadow-lg w-full max-h-[400px] object-cover"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       {/* ---------------- SOCIAL FEED ---------------- */}
//        <section className="py-14 bg-gradient-to-b from-emerald-50 to-white">
//   <div className="container mx-auto px-4 sm:px-6 md:px-16">
//     <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">
//       From Our Social Feed
//     </h2>

//     <Slider {...productSettings}>
//       {[
//         "/posts/insta2.jpg",
//         "/posts/insta3.jpg",
//         "/posts/insta3.webp",
//         "/posts/insta4.webp",
//         "/posts/insta5.webp",
//       ].map((src, index) => (
//         <div key={index} className="px-2">
//           <motion.div
//             animate={{
//               scale: activeSlide === index ? 1.05 : 1,
//               opacity: activeSlide === index ? 1 : 0.8,
//             }}
//             transition={{ duration: 0.6 }}
//             className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
//           >
//             <img
//               src={src}
//               alt={`Social Feed ${index + 1}`}
//               className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 ease-in-out"
//             />
//           </motion.div>
//         </div>
//       ))}
//     </Slider>
//   </div>
// </section>

//       {/* ---------------- ANIMAL WELFARE ---------------- */}
//       <section className="py-14 bg-[#FFF9F1]">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
//             Animal Welfare
//           </h2>
//           <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
//             At <span className="font-semibold text-emerald-800">Daivatam Dairy</span>, 
//             we ensure that our cows are cared for, fed naturally, and live in a 
//             healthy environment. Every drop of milk comes from happy, well-treated 
//             cows — because purity and compassion go hand in hand.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: <FaLeaf className="text-green-600 text-4xl mb-3" />,
//                 title: "Natural Feed",
//                 desc: "Cows enjoy nutrient-rich, toxin-free natural feed.",
//               },
//               {
//                 icon: <FaHeart className="text-red-500 text-4xl mb-3" />,
//                 title: "Happy Cows",
//                 desc: "We prioritize comfort and stress-free living for cows.",
//               },
//               {
//                 icon: <FaCheckCircle className="text-yellow-500 text-4xl mb-3" />,
//                 title: "Pure & Safe Milk",
//                 desc: "Milk is produced hygienically from healthy cows.",
//               },
//             ].map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
//               >
//                 <div className="flex flex-col items-center">
//                   {card.icon}
//                   <h3 className="font-semibold text-lg sm:text-xl mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm sm:text-base">
//                     {card.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CallToAction />
//     </div>
//   );
// };

// export default Home;




// our product demo
 {/* <section className="py-14 bg-[#FFF9F1]">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8"
          >
            Our Dairy Delights
          </motion.h2>

          <Slider {...gallerySettings}>
            {recommendedProducts.map((item, index) => (
              <div key={index} className="px-2">
                <motion.div
                  animate={{
                    scale: activeSlide === index ? 1.05 : 0.95,
                    opacity: activeSlide === index ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover" // reduced height on mobile
                  />
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-emerald-800">{item.name}</h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}

{/* <section className="py-14 bg-[#FFF9F1]">
  <div className="max-w-full mx-auto px-4 sm:px-6 md:px-16">


<motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-8"
>
  Our Dairy Products
</motion.h2>

<div className="w-full">
  <Slider
  dots={true}
  infinite={true}
  autoplay={true}
  autoplaySpeed={2500}
  slidesToShow={3}
  slidesToScroll={1}
  centerMode={false}
  className="w-full"
  responsive={[
    {
      breakpoint: 1024, // Tablet
      settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false },
    },
    {
      breakpoint: 768, // Mobile
      settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, arrows: false },
    },
    {
      breakpoint: 480, // Small Mobile
      settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, arrows: false },
    },
  ]}



  >
    {recommendedProducts.map((item, index) => (
      <div key={index} className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 min-h-[420px] sm:min-h-[460px] md:min-h-[500px]"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover"
          />
          <div className="p-4 sm:p-5 md:p-6 text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-emerald-800">
              {item.name}
            </h3>
            <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
              {item.desc}
            </p>
          </div>
        </motion.div>
      </div>
    ))}
  </Slider>
</div>


  </div>
</section> */}


// import { useState } from "react";
// import Hero from "../components/Hero";
// import WhyChooseUs from "../components/WhyChooseUs";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import CallToAction from "../components/CallToAction";
// import { FaLeaf, FaHeart, FaCheckCircle } from "react-icons/fa";

// const images = [
//   "/hero-section-image/m2.jpg",
//   "/hero-section-image/m3.jpg",
//   "/hero-section-image/m5.jpg",
//   "/hero-section-image/m2.jpg",
//   "/hero-section-image/milk.jpg",
// ];

// const recommendedProducts = [
//   {
//     name: "Fresh Cow Milk",
//   desc: "Pure & farm-fresh cow milk delivered daily straight from local farms.",
//     img: "/products/cowmilk.jpg"
//   },
//   {
//     name: "Organic Paneer",
//     desc: "Soft, rich, and protein-packed paneer for your meals.",
//     img: "/products/paneer.png"
//   },
//   {
//     name: "Pure Desi Ghee",
//     desc: "Traditional hand-churned ghee full of aroma & taste.",
//     img: "/products/ghee.png"
//   },
//   {
//     name: "Fresh Curd",
//     desc: "Thick, creamy curd made with natural fermentation.",
//     img: "/products/curd.png"
//   },
// ];

// const videos = [
//   { id: 1, src: "/videos/farm1.mp4" },
//   { id: 2, src: "/videos/farm2.mp4" },
//   { id: 3, src: "/videos/farm3.mp4" },
// ];

// export default function Home() {
//   const [activeSlide, setActiveSlide] = useState(0);

// //   const gallerySettings = {

// //   dots: true,
// //   infinite: true,
// //   speed: 800,
// //   slidesToShow: 3,
// //   slidesToScroll: 1,
// //   autoplay: true,
// //   autoplaySpeed: 2500,
// //   centerMode: true,
// //   centerPadding: "0px",
// //   beforeChange: (_, next) => setActiveSlide(next),
// //   responsive: [
// //     {
// //       breakpoint: 1024, // tablet
// //       settings: {
// //         slidesToShow: 2,
// //         centerMode: false,
// //         centerPadding: "0px",
// //       },
// //     },
// //     {
// //       breakpoint: 768, // mobile
// //       settings: {
// //         slidesToShow: 1,
// //         centerMode: false,
// //         centerPadding: "0px",
// //       },
// //     },
// //     {
// //       breakpoint: 480, // small mobile
// //       settings: {
// //         slidesToShow: 1,
// //         centerMode: false,
// //         centerPadding: "0px",
// //       },
// //     },
// //   ],
// // };


// const gallerySettings = {
//   dots: true,
//   infinite: true,
//   speed: 800,
//   slidesToShow: 3,       // DESKTOP
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2500,
//   centerMode: true,       // ONLY DESKTOP
//   centerPadding: "0px",
//   beforeChange: (_, next) => setActiveSlide(next),

//   responsive: [
//     {
//       breakpoint: 1024, // TABLET
//       settings: {
//         slidesToShow: 2,
//         centerMode: false,    // ❗️CENTER MODE OFF
//         centerPadding: "0px",
//       },
//     },
//     {
//       breakpoint: 768, // MOBILE
//       settings: {
//         slidesToShow: 1,
//         centerMode: false,     // ❗️OFF
//         centerPadding: "0px",
//       },
//     },
//     {
//       breakpoint: 480, // SMALL MOBILE (IQ Z9)
//       settings: {
//         slidesToShow: 1,
//         centerMode: false,     // ❗️OFF
//         centerPadding: "0px",
//       },
//     },
//   ],
// };
//   const videoSettings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     fade: true,
//     arrows: false,
//     pauseOnHover: false,
//   };

//   return (
//     <div className="overflow-hidden pt-20">
//       <Hero />

//       {/* ---------------- ABOUT ---------------- */}
//       <section className="relative bg-white py-12 px-4 sm:px-6 md:px-20 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-[#0077B6] mb-4">About Us</h2>
//           <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
//             Founded in <span className="font-semibold text-[#0077B6]">2000</span>, <span className="font-semibold">Navnath Dairy</span> has established itself as a trusted name in milk procurement and processing. With years of expertise, the company has now launched its premium dairy brand <span className="font-semibold text-green-700">Daivatam</span>, delivering <span className="italic">purity, taste,</span> and <span className="italic">innovation</span> in dairy products.
//           </p>
//           <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-6">
//             <span className="font-semibold">Navnath Dairy</span> is a collective effort of dedicated milk producers and progressive farmers, working together for rural development and sustainable growth. Built on <span className="font-semibold">trust, transparency,</span> delivering fresh and safe dairy products every day.
//           </p>
//         </div>
//       </section>

//       {/* ---------------- OUR DAIRY DELIGHTS ---------------- */}
// <section className="py-14 bg-[#FFF9F1]">
//   <div className="container mx-auto px-4 sm:px-6 md:px-16">

//     <motion.h2
//       initial={{ opacity: 0, y: -30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-8"
//     >
//       Our Dairy Products
//     </motion.h2>

//     <Slider
//       className="product-slider"
//       dots={true}
//       infinite={true}
//       autoplay={true}
//       autoplaySpeed={2500}
//       speed={600}
//       centerMode={false}        // ensure not center-cropped on mobile
//       variableWidth={false}     // each slide takes full slide width
//       adaptiveHeight={true}     // adjusts height per slide
//       slidesToShow={3}          // desktop default
//       slidesToScroll={1}
//       responsive={[
//         {
//           breakpoint: 1024,    // <=1024px -> tablet layout
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             centerMode: false,
//             variableWidth: false,
//           },
//         },
//         {
//           breakpoint: 768,     // <=768px -> mobile (phones)
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             centerMode: false,
//             variableWidth: false,
//             arrows: false,
//           },
//         },
//         {
//           breakpoint: 480,     // <=480px -> small phones (extra safe)
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             centerMode: false,
//             variableWidth: false,
//             arrows: false,
//             dots: true,
//           },
//         },
//       ]}
//     >

//       {recommendedProducts.map((item, index) => (
//         // Wrap slide in a flex center so it occupies the full slide width properly
//         <div key={index} className="px-2 flex justify-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="
//               bg-white rounded-xl shadow-md
//               overflow-hidden 
//               transition-all duration-300
//               w-full
//               max-w-[380px] sm:max-w-[520px] md:max-w-full
//             "
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-40 sm:h-52 md:h-64 object-cover"
//             />

//             <div className="p-3 sm:p-4 md:p-5 text-left">
//               <h3 className="text-lg sm:text-xl font-semibold text-emerald-800">
//                 {item.name}
//               </h3>

//               <p className="text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       ))}

//     </Slider>

//   </div>
// </section>
//       <WhyChooseUs />

//       {/* ---------------- FARM GALLERY ---------------- */}
//       <section className="py-14 bg-gradient-to-b from-emerald-50 to-white">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">Farm Gallery</h2>

//           <Slider {...gallerySettings}>
//             {images.map((src, index) => (
//               <div key={index} className="px-2">
//                 <motion.div
//                   animate={{
//                     scale: activeSlide === index ? 1.05 : 0.95,
//                     opacity: activeSlide === index ? 1 : 0.7,
//                   }}
//                   transition={{ duration: 0.6 }}
//                   className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
//                 >
//                   <img
//                     src={src}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 ease-in-out"
//                   />
//                 </motion.div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       {/* ---------------- VIDEO SECTION ---------------- */}
//       <section className="py-14 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">Our Farm in Motion</h2>

//           <Slider {...videoSettings}>
//             {videos.map((video) => (
//               <div key={video.id} className="flex justify-center">
//                 <video
//                   src={video.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="rounded-2xl shadow-lg w-full max-h-[300px] sm:max-h-[400px] object-cover" // reduced height on mobile
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       {/* ---------------- SOCIAL FEED ---------------- */}
//       <section className="py-14 bg-gradient-to-b from-emerald-50 to-white">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">From Our Social Feed</h2>

//           <Slider {...gallerySettings}>
//             {[
//               "/posts/insta2.jpg",
//               "/posts/insta3.jpg",
//               "/posts/insta3.webp",
//               "/posts/insta4.webp",
//               "/posts/insta5.webp",
//             ].map((src, index) => (
//               <div key={index} className="px-2">
//                 <motion.div
//                   animate={{
//                     scale: activeSlide === index ? 1.05 : 0.95,
//                     opacity: activeSlide === index ? 1 : 0.7,
//                   }}
//                   transition={{ duration: 0.6 }}
//                   className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
//                 >
//                   <img
//                     src={src}
//                     alt={`Social Feed ${index + 1}`}
//                     className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 ease-in-out"
//                   />
//                 </motion.div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

// {/* <section className="py-14 bg-gradient-to-b from-emerald-50 to-white">
//   <div className="container mx-auto px-4 sm:px-6 md:px-16">
//     <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">
//       From Our Social Feed
//     </h2>

//     <Slider {...gallerySettings}>
//       {[
//         "/posts/insta2.jpg",
//         "/posts/insta3.jpg",
//         "/posts/insta3.webp",
//         "/posts/insta4.webp",
//         "/posts/insta5.webp",
//       ].map((src, index) => (
//         <div key={index} className="px-2">
//           <motion.div
//             animate={{
//               scale: activeSlide === index ? 1.05 : 0.95,
//               opacity: activeSlide === index ? 1 : 0.7,
//             }}
//             transition={{ duration: 0.6 }}
//             className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl flex justify-center"
//           >
//             <img
//               src={src}
//               alt={`Social Feed ${index + 1}`}
//               className="h-40 w-32 object-cover transition-transform duration-700 ease-in-out" 
//             />
//           </motion.div>
//         </div>
//       ))}
//     </Slider>
//   </div>
// </section> */}

//       {/* ---------------- ANIMAL WELFARE ---------------- */}
//       <section className="py-14 bg-[#FFF9F1]">
//         <div className="container mx-auto px-4 sm:px-6 md:px-16 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">Animal Welfare</h2>
//           <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
//             At <span className="font-semibold text-emerald-800">Daivatam Dairy</span>, cows are cared for, fed naturally, and live in a healthy environment. Every drop of milk comes from happy, well-treated cows.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {[
//               { icon: <FaLeaf className="text-green-600 text-4xl mb-3" />, title: "Natural Feed", desc: "Cows enjoy nutrient-rich, toxin-free natural feed." },
//               { icon: <FaHeart className="text-red-500 text-4xl mb-3" />, title: "Happy Cows", desc: "We prioritize comfort and stress-free living for cows." },
//               { icon: <FaCheckCircle className="text-yellow-500 text-4xl mb-3" />, title: "Pure & Safe Milk", desc: "Milk is produced hygienically from healthy cows." },
//             ].map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
//               >
//                 <div className="flex flex-col items-center">
//                   {card.icon}
//                   <h3 className="font-semibold text-lg sm:text-xl mb-2">{card.title}</h3>
//                   <p className="text-gray-600 text-sm sm:text-base">{card.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <CallToAction />
    
//     </div>
//   );
// }


import { useState } from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Slider from "react-slick";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import { FaLeaf, FaHeart, FaCheckCircle } from "react-icons/fa";

const images = [
  "/hero-section-image/m2.jpg",
  "/hero-section-image/m3.jpg",
  "/hero-section-image/m5.jpg",
  "/hero-section-image/m2.jpg",
  "/hero-section-image/milk.jpg",
];

const recommendedProducts = [
  {
    name: "Fresh Cow Milk",
    desc: "Pure & farm-fresh cow milk delivered daily straight from local farms.",
    img: "/products/cowmilk.jpg"
  },
  {
    name: "Organic Paneer",
    desc: "Soft, rich, and protein-packed paneer for your meals.",
    img: "/products/paneer.png"
  },
  {
    name: "Pure Desi Ghee",
    desc: "Traditional hand-churned ghee full of aroma & taste.",
    img: "/products/ghee.png"
  },
  {
    name: "Fresh Curd",
    desc: "Thick, creamy curd made with natural fermentation.",
    img: "/products/curd.png"
  },
];

const videos = [
  { id: 1, src: "/videos/farm1.mp4" },
  { id: 2, src: "/videos/farm2.mp4" },
  { id: 3, src: "/videos/farm3.mp4" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  /** ------------------ UPDATED SLIDER SETTINGS (Desktop 3 / Tablet 2 / Mobile 1) ------------------ */
  const threeStepSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,    // <<< FIXED: Desktop now shows 3 cards
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "15px",
        },
      },
    ],
  };

  /** ------------------ VIDEO SLIDER SETTINGS ------------------ */
  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="overflow-hidden pt-20">

      <Hero />

      {/* ---------------- ABOUT ---------------- */}
      <section className="relative bg-white py-12 px-4 sm:px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0077B6] mb-4">About Us</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Founded in <span className="font-semibold text-[#0077B6]">2000</span>, 
            <span className="font-semibold"> Navnath Dairy</span> has established itself as a trusted name in milk procurement and processing.
            With years of expertise, the company has launched its premium dairy brand 
            <span className="font-semibold text-green-700"> Daivatam</span>, delivering
            <span className="italic"> purity, taste</span> and <span className="italic">innovation</span>.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-6">
            <span className="font-semibold">Navnath Dairy</span> is a collective effort of dedicated milk producers and farmers,
            built on <span className="font-semibold">trust, transparency</span> and delivering safe dairy products every day.
          </p>
        </div>
      </section>

      {/* ---------------- OUR DAIRY PRODUCTS ---------------- */}
      <section className="py-14 bg-[#FFF9F1]">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-8"
          >
            Our Dairy Products
          </motion.h2>

          <Slider {...threeStepSettings}>
            {recommendedProducts.map((item, index) => (
              <div key={index} className="px-2 min-w-0 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="
                    bg-white 
                    rounded-xl 
                    shadow-md 
                    overflow-hidden 
                    transition-all duration-300
                    w-full
                    min-h-[380px] sm:min-h-[420px] md:min-h-[480px]
                  "
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-100 sm:h-56 md:h-64 object-cover"
                  />

                  <div className="p-4 sm:p-5 text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-emerald-800">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

        </div>
      </section>

      <WhyChooseUs />

      {/* ---------------- FARM GALLERY ---------------- */}
      <section className="py-14 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">
            Farm Gallery
          </h2>

          <Slider {...threeStepSettings}>
            {images.map((src, index) => (
              <div key={index} className="px-2 min-w-0 w-full">
                <motion.div
                  animate={{
                    scale: activeSlide === index ? 1.05 : 0.95,
                    opacity: activeSlide === index ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt="Gallery"
                    className="w-full h-100 sm:h-64 md:h-80 object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </Slider>

        </div>
      </section>

      {/* ---------------- VIDEO SECTION ---------------- */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">
            Our Farm in Motion
          </h2>

          <Slider {...videoSettings}>
            {videos.map((video) => (
              <div key={video.id}>
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-2xl shadow-lg w-full max-h-[350px] object-cover"
                />
              </div>
            ))}
          </Slider>

        </div>
      </section>

      {/* ---------------- SOCIAL FEED ---------------- */}
      <section className="py-14 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-8">
            From Our Social Feed
          </h2>

          <div className="overflow-hidden">
            <Slider {...threeStepSettings}>
              {[
                "/posts/insta2.jpg",
                "/posts/insta3.jpg",
                "/posts/insta3.webp",
                "/posts/insta4.webp",
                "/posts/insta5.webp",
              ].map((src, index) => (
                <div key={index} className="px-2 min-w-0">
                  <motion.div
                    animate={{
                      scale: activeSlide === index ? 1.03 : 0.92,
                      opacity: activeSlide === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                  >
                    <img
                      src={src}
                      alt="Social"
                      className="
                        w-full 
                        h-100
                        sm:h-56 
                        md:h-72 
                        object-cover 
                        object-center 
                        select-none
                      "
                      draggable="false"
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </section>

      {/* ---------------- ANIMAL WELFARE ---------------- */}
      <section className="py-14 bg-[#FFF9F1]">
        <div className="container mx-auto px-4 sm:px-6 md:px-16 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
            Animal Welfare
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            At <span className="font-semibold text-emerald-800">Daivatam Dairy</span>, cows are cared for naturally, humanely, and live in a stress-free environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <FaLeaf className="text-green-600 text-4xl mb-3" />, title: "Natural Feed", desc: "Cows enjoy nutrient-rich, toxin-free natural feed." },
              { icon: <FaHeart className="text-red-500 text-4xl mb-3" />, title: "Happy Cows", desc: "We ensure comfort, care and stress-free living." },
              { icon: <FaCheckCircle className="text-yellow-500 text-4xl mb-3" />, title: "Pure & Safe Milk", desc: "Milk is produced hygienically from healthy cows." },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition"
              >
                <div className="flex flex-col items-center">
                  {card.icon}
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                  <p className="text-gray-600">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}

