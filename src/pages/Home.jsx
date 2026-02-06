import { useState } from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Slider from "react-slick";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import { FaLeaf, FaHeart, FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

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
    img: "/products/cowmilk.jpg",
  },
  {
    name: "Butter",
    desc: "Rich, creamy, and naturally churned butter for everyday cooking.",
    img: "/products/Butter.jpg",
  },
  {
  name: "Condensed Milk",
  desc: "Thick, sweetened condensed milk made from fresh milk, perfect for desserts, sweets, and beverages.",
  img: "/products/Condensed-Milk.jpg",
},
  {
    name: "Milk Powder",
    desc: "High-quality milk powder made from fresh milk, rich and creamy when reconstituted.",
    img: "/products/Milk_Powder.jpg",
  },
];

const videos = [
  // { id: 1, src: "/videos/farm1.mp4" },
  // { id: 2, src: "/videos/farm2.mp4" },
  // { id: 3, src: "/videos/farm3.mp4" },
   { id: 3, src: "/videos/farm4.mp4" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  /** ---------------- DESKTOP SLIDER (3 CARDS) ---------------- */
  const desktopSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  /** ---------------- TABLET SLIDER (2 CARDS) ---------------- */
  const tabletSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  /** ---------------- MOBILE SLIDER (1 CARD) ---------------- */
  const mobileSlider = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  /** ---------------- VIDEO SLIDER ---------------- */
  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };


  const images = [
  "/FARMGALLERY/G1.jpg",
  "/FARMGALLERY/G2.jpg",
  "/FARMGALLERY/G3.jpg",
  "/FARMGALLERY/G4.jpg",
];
  return (
    <div className="overflow-hidden pt-20">
      <Helmet>
  <title>Daivatam Dairy | Leading Dairy Products Manufacturer in India</title>
  <meta
    name="description"
    content="Daivatam Dairy is a leading dairy products manufacturer in India supplying milk powder, butter and bulk dairy products across India and overseas."
  />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Daivatam Dairy",
        "url": "https://www.daivatamdairy.com",
        "logo": "https://www.daivatamdairy.com/favicon.png"
      }
    `}
  </script>
</Helmet>

<div style={{
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: "0"
  }}>
<h1>Daivatam Dairy – Trusted Dairy Products Manufacturer in India</h1>
</div>

      <Hero />

      {/* ---------------- ABOUT ---------------- */}
      <section className="relativ py-10 px-4 sm:px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl sm:text-4xl font-poppins font-bold text-[#0077B6] mb-4">
            About Us
          </p>

          <p className="text-sm sm:text-base font-poppins md:text-lg text-gray-700 leading-relaxed">
            Founded in <span className="font-semibold text-[#0077B6]">2000</span>,
            <span className="font-semibold font-poppins "> Navnath Dairy</span> has established itself as a trusted name in milk procurement and processing.
            With years of expertise, the company has launched its premium dairy brand
            <span className="font-semibold font-poppins text-green-700"> Daivatam</span>, delivering
            <span className="font-poppins"> purity, taste</span> and <span className="italic">innovation</span>.
          </p>

          <p className="text-sm sm:text-base font-poppins md:text-lg text-gray-700 leading-relaxed mt-6">
            <span className="font-semibold font-poppins">Navnath Dairy</span> is a collective effort of dedicated milk producers and farmers,
            built on <span className="font-semibold font-poppins">trust, transparency</span> and delivering safe dairy products every day.
          </p>
        </div>
      </section>

      {/* ---------------- OUR DAIRY PRODUCTS ---------------- */}
      <section className="py-14 bg-[#FFF9F1]">
        <div className="container font-poppins mx-auto px-4 sm:px-6 md:px-16">

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-center text-[#0077B6] mb-8"
          >
            Our Dairy Products
          </motion.p>

          {/* DESKTOP SLIDER (≥1024px) */}
          <div className="hidden lg:block">
            <Slider {...desktopSlider}>
              {recommendedProducts.map((item, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden min-h-[420px]"
                  >
                    <img src={item.img} className="w-full h-96 object-cover" />
                    <div className="p-5 font-poppins text-left">
                      <p className="text-xl font-poppins font-semibold text-emerald-800">
                        {item.name}
                      </p>
                      <p className="text-gray-600 font-poppins mt-1 text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          {/* TABLET SLIDER (768px–1023px) */}
          <div className="hidden md:block lg:hidden">
            <Slider {...tabletSlider}>
              {recommendedProducts.map((item, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl font-poppins shadow-md overflow-hidden min-h-[420px]"
                  >
                    <img src={item.img} className="w-full h-66 object-cover" />
                    <div className="p-5">
                      <p className="text-lg font-semibold font-poppins text-emerald-800">
                        {item.name}
                      </p>
                      <p className="text-gray-700 font-poppins text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          {/* MOBILE SLIDER (≤767px) */}
          <div className="block md:hidden">
            <Slider {...mobileSlider}>
              {recommendedProducts.map((item, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl font-poppins shadow-md overflow-hidden min-h-[380px]"
                  >
                    <img src={item.img} className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <p className="text-lg font-poppins font-semibold text-emerald-800">
                        {item.name}
                      </p>
                      <p className="text-gray-600 font-poppins text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </section>

      <WhyChooseUs />

      {/* ---------------- FARM GALLERY ---------------- */}
   <section className="py-14 bg-gradient-to-b font-poppins from-emerald-50 to-white">
  <div className="container font-poppins mx-auto px-4 sm:px-6 md:px-16">
    <p className="text-3xl sm:text-4xl font-bold text-center font-poppins text-[#0077B6] mb-8">
      Farm Gallery
    </p>

    {/* Desktop */}
    <div className="hidden lg:block">
      <Slider {...desktopSlider}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <motion.div
              animate={{
                scale: activeSlide === index ? 1.05 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl font-poppins overflow-hidden shadow-lg"
            >
              <img
                src={src}
                className="w-full font-poppins h-72 object-cover"
                alt={`Farm Gallery ${index + 1}`}
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Tablet */}
    <div className="hidden font-poppins md:block lg:hidden">
      <Slider {...tabletSlider}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <motion.div
              animate={{
                scale: activeSlide === index ? 1.05 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl font-poppins overflow-hidden shadow-lg"
            >
              <img
                src={src}
                className="w-full font-poppins h-64 object-cover"
                alt={`Farm Gallery ${index + 1}`}
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Mobile */}
    <div className="block font-poppins md:hidden">
      <Slider {...mobileSlider}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <motion.div
              animate={{
                scale: activeSlide === index ? 1.05 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl font-poppins overflow-hidden shadow-lg"
            >
              <img
                src={src}
                className="w-full font-poppins h-64 object-cover"
                alt={`Farm Gallery ${index + 1}`}
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

      {/* ---------------- VIDEO SECTION ---------------- */}
    <section className="py-14 bg-white">
  <div className="container mx-auto px-4 sm:px-6 md:px-16">
    <p className="text-3xl sm:text-4xl font-bold text-center text-[#0077B6] mb-8 font-poppins">
      Our Farm in Motion
    </p>

    <Slider {...videoSettings}>
      {videos.map((video) => (
        <div key={video.id} className="px-2">
          <video
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="
              rounded-2xl shadow-lg w-full object-cover
              h-[220px]
              sm:h-[280px]
              md:h-[380px]
              lg:h-[480px]
              xl:h-[560px]
            "
            onClick={(e) => {
              e.currentTarget.muted = false;
              e.currentTarget.play();
            }}
          />
        </div>
      ))}
    </Slider>
  </div>
</section>



      {/* ---------------- SOCIAL FEED ---------------- */}
  <section className="py-14 bg-gradient-to-b from-emerald-50 to-white font-poppins">
  <div className="container mx-auto px-4 sm:px-6 md:px-16">

    <p className="text-3xl sm:text-4xl font-bold text-center text-[#0077B6] mb-10">
      From Our Social Feed
    </p>

    {/* Desktop */}
    <div className="hidden lg:block">
      <Slider {...desktopSlider}>
        {[
          "/posts/sm1.jpg",
          "/posts/sm2.jpg",
          "/posts/sm3.jpg",
          "/posts/sm4.jpg",
          "/posts/sm5.jpg",
        ].map((src, index) => (
          <div key={index} className="px-3">
            <motion.div
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-white"
            >
              <img
                src={src}
                alt="Social Post"
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover aspect-[4/5] select-none"
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Tablet */}
    <div className="hidden md:block lg:hidden">
      <Slider {...tabletSlider}>
        {[
          "/posts/sm1.jpg",
          "/posts/sm2.jpg",
          "/posts/sm3.jpg",
          "/posts/sm4.jpg",
          "/posts/sm5.jpg",
        ].map((src, index) => (
          <div key={index} className="px-3">
            <motion.div
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-white"
            >
              <img
                src={src}
                alt="Social Post"
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover aspect-[4/5] select-none"
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Mobile */}
    <div className="block md:hidden">
      <Slider {...mobileSlider}>
        {[
          "/posts/sm1.jpg",
          "/posts/sm2.jpg",
          "/posts/sm3.jpg",
          "/posts/sm4.jpg",
          "/posts/sm5.jpg",
        ].map((src, index) => (
          <div key={index} className="px-2">
            <motion.div
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={src}
                alt="Social Post"
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover aspect-[4/5] select-none"
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>

  </div>
</section>



      {/* ---------------- ANIMAL WELFARE ---------------- */}
      <section className="py-14 font-poppins bg-[#FFF9F1]">
        <div className="container font-poppins mx-auto px-4 sm:px-6 md:px-16 text-center">
          <p className="text-3xl font-poppins sm:text-4xl font-bold text-[#0077B6] mb-6">
            Animal Welfare
          </p>

          <p className="text-gray-700 font-poppins max-w-3xl mx-auto mb-10">
            At <span className="font-semibold font-poppins text-emerald-800">Daivatam Dairy</span>, cows are cared for naturally, humanely, and live in a stress-free environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-poppins gap-6">
            {[ 
              { icon: <FaLeaf className="text-green-600 text-4xl mb-3 font-poppins" />, title: "Natural Feed", desc: "Cows enjoy nutrient-rich, toxin-free natural feed." },
              { icon: <FaHeart className="text-red-500 text-4xl mb-3 font-poppins" />, title: "Happy Cows", desc: "We ensure comfort, care and stress-free living." },
              { icon: <FaCheckCircle className="text-yellow-500 text-4xl mb-3 font-poppins" />, title: "Pure & Safe Milk", desc: "Milk is produced hygienically from healthy cows." },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 font-poppins rounded-2xl shadow-lg"
              >
                <div className="flex font-poppins flex-col items-center">
                  {card.icon}
                  <p className="font-semibold font-poppins text-lg">{card.title}</p>
                  <p className="text-gray-600 font-poppins">{card.desc}</p>
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
