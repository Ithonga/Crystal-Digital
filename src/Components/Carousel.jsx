import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false, // optional
    
    // responsive: [
    //   {
    //     breakpoint: 1024, // tablets
    //     settings: { slidesToShow: 2 },
    //   },
    //   {
    //     breakpoint: 640, // mobile
    //     settings: { slidesToShow: 1 },
    //   },
    // ],
  };

  const slides = [
    { id: 1, image: "/bg.jpg" },
    { id: 2, image: "/bg1.jpg" },
    { id: 3, image: "/bgabout.jpg" },
    { id: 2, image: "/bg1.jpg" },
    { id: 3, image: "/bgabout.jpg" },
    { id: 2, image: "/bg1.jpg" },
    { id: 3, image: "/bgabout.jpg" },
  ];

  return (
    <div className="w-full max-w-[24rem] md:max-w-2xl mx-auto  py-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className="h-[200px] rounded-lg overflow-hidden shadow-md">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
