import { useState } from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Slider from "react-slick";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import { FaLeaf, FaHeart, FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const images = [
  "/hero-section-image/m2.jpg",
  "/hero-section-image/m3.jpg",
  "/hero-section-image/m5.jpg",
  "/hero-section-image/m2.jpg",
  "/hero-section-image/milk.jpg",
    "/hero-section-image/m6.jpeg",

];

const recommendedProducts = [
  {
    id: "fresh-cow-milk",
    name: "Fresh Cow Milk",
    desc: "Pure & farm-fresh cow milk delivered daily straight from local farms.",
    img: "/products/cowmilk.jpg",
  },
  {
    id: "butter",
    name: "Butter",
    desc: "Rich, creamy, and naturally churned butter for everyday cooking.",
    img: "/products/Butter.jpg",
  },
  {
    id: "condensed-milk",
    name: "Condensed Milk",
    desc: "Thick, sweetened condensed milk made from fresh milk, perfect for desserts, sweets, and beverages.",
    img: "/products/Condensed-Milk.jpg",
  },
  {
    id: "milk-powder",
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
const navigate = useNavigate();
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
  <title>
    Cow Milk Powder  in Maharashtra | Daivatam Dairy  | Milk Powder & Butter Manufacturer in Ahmednagar Maharashtra India| Daivatam Dairy | Milk Powder & Butter Manufacturer in Ahmednagar Maharashtra
  </title>

  <meta
    name="description"
    content="Daivatam Dairy is a trusted cow milk powder manufacturer in Maharashtra, supplying pure and hygienic dairy milk powder such as Daivatam Pure Cow Milk Powder, Daivatam Gold Milk Powder and Daivatam Fresh Dairy Powder across Maharashtra including Ahmednagar, Pune, Mumbai, Nashik and Nagpur. Daivatam Dairy is a leading dairy company in Maharashtra, India. We are premium milk powder and butter manufacturer and B2B dairy supplier offering bulk and export quality dairy products."
  />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Daivatam Dairy",
        "url": "https://www.daivatamdairy.com",
        "logo": "https://www.daivatamdairy.com/favicon.png",
        "areaServed": {
          "@type": "State",
          "name": "Maharashtra"
        },
        "brand": [
          "Daivatam Pure Cow Milk Powder",
          "Daivatam Gold Milk Powder",
          "Daivatam Fresh Dairy Powder"
        ],
        "description": "Cow milk powder manufacturer and dairy products supplier in Maharashtra"
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

    Daivatam Dairy, Daivatam Dairy India, Daivatam Dairy Products,
Dairy Company in India, Milk Powder Manufacturer India,
Butter Manufacturer India, Premium Dairy Products Supplier,
B2B Dairy Supplier India, Bulk Milk Powder Supplier,
Dairy Product Manufacturer Maharashtra, High Quality Dairy Products,
Export Quality Milk Powder, Best Dairy Brand India,
Milk Powder Manufacturer, Skimmed Milk Powder Supplier,
Full Cream Milk Powder India, Bulk Milk Powder Supplier India,
Dairy Milk Powder Wholesale, High Quality Milk Powder,
Butter Manufacturer India, Dairy Butter Supplier,
Bulk Butter Supplier India, Fresh Butter Wholesale,
Unsalted Butter Supplier, Industrial Butter Supplier,
Benefits of Milk Powder, How Milk Powder is Made,
Dairy Industry in India, Milk Powder vs Fresh Milk,
Uses of Butter in Food Industry, Dairy Export Business India,
Best Dairy Products for Business, Health Benefits of Dairy Products,
How to Choose Milk Powder Supplier, B2B Dairy Market Trends,
About Daivatam Dairy, Dairy Company in Maharashtra,
Trusted Dairy Manufacturer India, Dairy Production Company India,
Leading Dairy Brand India, Jobs in Dairy Industry,
Dairy Company Jobs India, Careers at Daivatam Dairy,
Contact Daivatam Dairy, Dairy Supplier Contact India,
Milk Powder Supplier Contact, Butter Supplier Contact India,
Dairy Company Near Me, Dairy Company in Ahmednagar,
Milk Powder Supplier Maharashtra, Butter Manufacturer Maharashtra,
Keshav Shinde, Founder of Daivatam Dairy, Daivatam Dairy Owner,
Daivatam Dairy CEO, Daivatam Dairy Company Details,
Bulk Milk Powder Supplier India, Dairy Products Wholesale Supplier,
Milk Powder for Business, Butter Supplier for Hotels,
Dairy Export Supplier India, Industrial Dairy Supplier
<h1>Daivatam Dairy – Trusted Dairy Products Manufacturer in India.Daivatam Dairy – Premium Dairy Products Manufacturer in India</h1>
<h2>Milk Powder Manufacturer in India</h2>
<h2>Butter Manufacturer & Bulk Supplier India</h2>
<h2>Trusted Dairy Company in Maharashtra</h2>
<h2>B2B Dairy Products Supplier</h2>
<h1>Welcome to Daivatam Dairy – Trusted Dairy Manufacturer in Maharashtra</h1>
<p>
Daivatam Dairy is a leading dairy product manufacturer based in Taklimiya, Rahuri, Ahmednagar (Ahilyanagar), Maharashtra. We specialize in supplying high-quality milk powder and butter to businesses across India.
</p>

<p>
With a strong commitment to quality and consistency, Daivatam Dairy serves small to large-scale businesses including retailers, wholesalers, and food industries. Our products are processed with strict quality standards to ensure purity, freshness, and long shelf life.
</p>

<p>
We aim to become a trusted B2B dairy partner by delivering premium dairy products that meet industry needs efficiently and reliably.
</p>
<h2>Frequently Asked Questions</h2>
<h3>What is Daivatam Dairy?</h3>
<p>Daivatam Dairy is a dairy manufacturing company in Maharashtra supplying milk powder and butter.</p>

<h3>Who is the owner of Daivatam Dairy?</h3>
<p>The owner of Daivatam Dairy is Keshav Shinde.</p>

<h3>Where is Daivatam Dairy located?</h3>
<p>It is located in Taklimiya, Rahuri, Ahmednagar, Maharashtra.</p>

<h3>What products do you offer?</h3>
<p>We offer milk powder and butter for bulk and business use.</p>
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
<section className="py-14 bg-[#FFF9F1] font-poppins">
  <div className="container mx-auto px-4 sm:px-6 md:px-16">

    <p className="text-3xl sm:text-4xl font-bold text-center text-[#0077B6] mb-10">
      Our Dairy Products
    </p>

    {/* Desktop */}
    <div className="hidden lg:block">
      <Slider {...desktopSlider}>
        {recommendedProducts.map((item, index) => (
          <div key={index} className="px-3">

            <motion.div
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onDoubleClick={() => navigate(`/products?item=${item.id}`)}
              className="rounded-2xl overflow-hidden shadow-xl bg-white cursor-pointer"
            >

              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                draggable={false}
                className="w-full h-72 object-cover select-none"
              />

              <div className="p-4">
                <p className="text-lg font-semibold text-emerald-800">
                  {item.name}
                </p>

                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>

            </motion.div>

          </div>
        ))}
      </Slider>
    </div>

    {/* Tablet */}
    <div className="hidden md:block lg:hidden">
      <Slider {...tabletSlider}>
        {recommendedProducts.map((item, index) => (
          <div key={index} className="px-3">

            <motion.div
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onDoubleClick={() => navigate(`/products?item=${item.id}`)}
              className="rounded-2xl overflow-hidden shadow-xl bg-white cursor-pointer"
            >

              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                draggable={false}
                className="w-full h-72 object-cover select-none"
              />

              <div className="p-4">
                <p className="text-lg font-semibold text-emerald-800">
                  {item.name}
                </p>

                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>

            </motion.div>

          </div>
        ))}
      </Slider>
    </div>

    {/* Mobile */}
    <div className="block md:hidden">
      <Slider
        {...mobileSlider}
        speed={250}
        swipe={true}
        draggable={true}
        touchMove={true}
        cssEase="linear"
      >
        {recommendedProducts.map((item, index) => (
          <div key={index} className="px-2">

            <div
              onDoubleClick={() => navigate(`/products?item=${item.id}`)}
              className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
            >

              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                draggable={false}
                className="w-full h-72 object-cover select-none"
              />

              <div className="p-4">
                <p className="text-lg font-semibold text-emerald-800">
                  {item.name}
                </p>

                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>

            </div>

          </div>
        ))}
      </Slider>
    </div>

  </div>
</section>

<section className="py-16 bg-gradient-to-b from-white to-emerald-50 font-poppins">
  <div className="container mx-auto px-4 sm:px-6 md:px-16">

    {/* Google Business Info */}
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 max-w-3xl mx-auto text-center">

      <p className="text-2xl font-bold text-gray-900">
        Daivatam Dairy
      </p>

      <p className="text-gray-500 mt-1 text-sm">
        Rahuri Rd, Rahuri, Taklimiya, Maharashtra 413705, India
      </p>

      <div className="flex items-center justify-center gap-3 mt-4">

        <span className="text-3xl font-semibold text-gray-800">
          5.0
        </span>

        <span className="text-yellow-400 text-2xl">
          ⭐⭐⭐⭐⭐
        </span>

        {/* <span className="text-gray-600 text-sm">
          2 reviews
        </span> */}

      </div>

    </div>


    {/* Section Heading */}
    <p className="text-3xl sm:text-4xl font-bold text-center text-[#0077B6] mb-12">
      Customer Reviews
    </p>


    {/* Review Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Review 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <p className="text-lg font-semibold text-gray-900">
          Vishal Wagh
        </p>

        <div className="text-yellow-400 mt-1">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mt-4 italic">
          "Best dairy products manufacturer in India."
        </p>

      </div>


      {/* Review 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <p className="text-lg font-semibold text-gray-900">
          Subhash Wagh
        </p>

        <div className="text-yellow-400 mt-1">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mt-4 italic">
          "At Daivatam Dairy, strong production planning, strict quality standards, and efficient dispatch system help us consistently deliver bulk milk powder to our partners with confidence."
        </p>

      </div>


      {/* Empty Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <p className="text-lg font-semibold text-gray-900">
          Prajakta Gaikwad
        </p>

        <div className="text-yellow-400 mt-1">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mt-4 italic">
          Daivatam Dairy provides excellent quality dairy products with consistent supply and professional service. Their milk powder and butter quality meet industrial standards, making them a reliable partner for our food processing needs
        </p>

      </div>

    </div>

  </div>
</section>
      <WhyChooseUs />

      {/* ---------------- FARM GALLERY ---------------- */}
 <section className="py-14 bg-gradient-to-b font-poppins from-emerald-50 to-white">
  <div className="container mx-auto px-4 sm:px-6 md:px-16">

    <p className="text-3xl sm:text-4xl font-bold text-center text-[#0077B6] mb-8">
      Farm Gallery
    </p>

    {/* Desktop */}
    <div className="hidden lg:block">
      <Slider
        {...desktopSlider}
        swipe={true}
        draggable={true}
        touchMove={true}
        swipeToSlide={true}
      >
        {images.map((src, index) => (
          <div key={index} className="px-4">
            <div className="gallery-card rounded-[28px] overflow-hidden shadow-xl">
              <img
                src={src}
                className="w-full h-72 object-cover"
                alt={`Farm Gallery ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Tablet */}
    <div className="hidden md:block lg:hidden">
      <Slider
        {...tabletSlider}
        swipe={true}
        draggable={true}
        touchMove={true}
        swipeToSlide={true}
      >
        {images.map((src, index) => (
          <div key={index} className="px-4">
            <div className="gallery-card rounded-[28px] overflow-hidden shadow-xl">
              <img
                src={src}
                className="w-full h-64 object-cover"
                alt={`Farm Gallery ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Mobile */}
    <div className="block md:hidden">
      <Slider
        {...mobileSlider}
        swipe={true}
        draggable={true}
        touchMove={true}
        swipeToSlide={true}
      >
        {images.map((src, index) => (
          <div key={index} className="px-4">
            <div className="gallery-card rounded-[28px] overflow-hidden shadow-xl">
              <img
                src={src}
                className="w-full h-64 object-cover"
                alt={`Farm Gallery ${index + 1}`}
              />
            </div>
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
      <Slider
        {...desktopSlider}
        swipe={true}
        draggable={true}
        touchMove={true}
        swipeToSlide={true}
      >
        {[
          "/posts/sm1.jpg",
          "/posts/sm2.jpg",
          "/posts/sm3.jpg",
          "/posts/sm4.jpg",
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
      <Slider
        {...tabletSlider}
        swipe={true}
        draggable={true}
        touchMove={true}
        swipeToSlide={true}
      >
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
              transition={{ duration: 0.2 }}
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
      <Slider
        {...mobileSlider}
        swipe={true}
        draggable={true}
        touchMove={true}
        swipeToSlide={true}
      >
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
              transition={{ duration: 0.1 }}
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
