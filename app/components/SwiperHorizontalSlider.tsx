"use client";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

const SwiperHorizontalSlider = () => {
  const swiperRef = useRef<any>(null);

  // Initialize Swiper when the component mounts
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 70,
        },
      },
    });
  }, []);

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Add your card components here */}
          <div className="swiper-slide">
            <div className="h-64 rounded-lg bg-gray-100 p-4">
              <h3 className="text-lg font-semibold">Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="h-64 rounded-lg bg-gray-100 p-4">
              <h3 className="text-lg font-semibold">Card 2</h3>
              <p>This is the content of Card 2.</p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="h-64 rounded-lg bg-gray-100 p-4">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>This is the content of Card 3.</p>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperHorizontalSlider;
