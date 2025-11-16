import { Link } from "react-router-dom";
import Slider from "react-slick";

function Hero() {
  const slides = [
    {
      id: 1,
      image: "/hero-section-image/m2.jpg",
      title: "Fresh From the Farm",
      subtitle: "Pure milk, directly from happy cows",
      buttonText: " Products",
      link: "/products",
    },
    {
      id: 2,
      image: "/hero-section-image/m3.jpg",
      title: "Goodness in Every Drop",
      subtitle: "Nutritious & natural dairy products",
      buttonText: "Explore",
      link: "/about",
    },
    {
      id: 3,
      image: "/hero-section-image/m5.jpg",
      title: "Tradition Meets Purity",
      subtitle: "Crafted with care for your family",
      buttonText: "Our Story",
      link: "/about",
    },
    {
      id: 4,
      image: "/hero-section-image/milk.jpg",
      title: "Nature’s Richness",
      subtitle: "Experience dairy the natural way",
      buttonText: "Get Started",
      link: "/contact",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full 
      h-[60vh]           /* mobile height */
      md:h-[calc(100vh-80px)]  /* desktop height */">
      
      <Slider {...settings} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="
            relative 
            h-[60vh] 
            md:h-[calc(100vh-80px)]
          ">
            
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
              
              <h1 className="
                text-3xl 
                sm:text-4xl 
                md:text-6xl 
                font-extrabold font-serif 
                text-yellow-300 drop-shadow-lg
              ">
                {slide.title}
              </h1>

              <p className="
                mt-2 
                text-base 
                sm:text-lg 
                md:text-2xl 
                text-gray-100 max-w-xl
              ">
                {slide.subtitle}
              </p>

              <Link
                to={slide.link}
                className="
                  mt-4 
                  px-5 py-2       /* mobile smaller */
                  sm:px-7 sm:py-3  /* tablet */
                  bg-green-600 hover:bg-green-700 
                  transition rounded-full 
                  font-semibold shadow-lg
                "
              >
                {slide.buttonText}
              </Link>
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
