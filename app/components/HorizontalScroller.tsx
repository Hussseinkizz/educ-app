"use client";
import Slider from "react-slick";

const HorizontalScroller = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <div className="--max-w-screen-lg mx-auto w-4/5 px-4">
      <Slider {...settings}>
        {/* Add your card components here */}
        <div className="w-full">
          <div className="h-64 rounded-lg bg-gray-100 p-4">
            <h3 className="text-lg font-semibold">Card 1</h3>
            <p>This is the content of Card 1.</p>
          </div>
        </div>
        <div className="w-full">
          <div className="h-64 rounded-lg bg-gray-100 p-4">
            <h3 className="text-lg font-semibold">Card 2</h3>
            <p>This is the content of Card 2.</p>
          </div>
        </div>
        <div className="w-full">
          <div className="h-64 rounded-lg bg-gray-100 p-4">
            <h3 className="text-lg font-semibold">Card 3</h3>
            <p>This is the content of Card 3.</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </Slider>
    </div>
  );
};

export default HorizontalScroller;
