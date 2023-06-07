import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          renderIndicator={() => null}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none text-white z-10">
                {/* Previous Arrow Icon */}
                Previous
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none text-white">
                {/* Next Arrow Icon */}
                Next
              </button>
            )
          }>
          <div
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/8471931/pexels-photo-8471931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}></div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1298&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}></div>
          <div
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/three-people-asian-family-mother-son-daughter-playing-music-together_101709-1907.jpg?w=1060')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}></div>
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
