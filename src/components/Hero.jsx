import { Link } from "react-router-dom";
import Slider from "react-slick";

function Hero() {
  const slides = [
    { id: 1, image: "/hero-section-image/f2.png" },
    { id: 2, image: "/hero-section-image/BMC.jpg" },
    { id: 3, image: "/hero-section-image/F3.jpg" },
    { id: 4, image: "/hero-section-image/F4.jpg" },
    { id: 5, image: "/hero-section-image/m6.jpeg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
  };

  return (
    <div
      className="
        relative w-full
        h-[70vh]
        md:h-[80vh]
        -mt-14 md:-mt-16
      "
    >
      <Slider {...settings} className="h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="
              relative
              h-[70vh]
              md:h-[80vh]
            "
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay optional */}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}

            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
              
              <h1
                className="
                text-3xl
                sm:text-4xl
                md:text-6xl
                font-extrabold font-serif
                text-yellow-300 drop-shadow-lg
              "
              >
                {slide.title}
              </h1>

              <p
                className="
                mt-2
                text-base
                sm:text-lg
                md:text-2xl
                text-gray-100 max-w-xl
              "
              >
                {slide.subtitle}
              </p>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;