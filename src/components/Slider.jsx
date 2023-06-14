import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";


const Slider = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    anime({
      targets: textElement,
      translateY: [
        { value: -20, duration: 500 },
        { value: 0, duration: 800, elasticity: 300 },
        { value: -10, duration: 300 },
        { value: 0, duration: 200, elasticity: 300 },
      ],
    });
      
  }, []);

  return (
    <section className="bg-gray-900 ">
      <div className="container mx-auto ">
        {" "}
        {/* px-4 py-12 */}
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          height={900}
          renderIndicator={() => null}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none text-white z-10">
                <FcPrevious className="md:h-10 md:w-10 h-6 w-6" />
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
                <FcNext className="md:h-10 md:w-10 h-6 w-6" />
              </button>
            )
          }>
          <div
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/8471931/pexels-photo-8471931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}>
            <div className="bg-black bg-opacity-50 px-6 py-4  text-center flex flex-col items-center justify-center h-96 bg-cover bg-center ">
              <div className="min-w-64 mx-auto">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                  ref={textRef}>
                  Learn from Experts
                </h2>
                <p className="text-white text-base sm:text-lg md:text-xl">
                  Our academy offers classes taught by experienced music
                  professionals who are passionate about teaching and sharing
                  their knowledge.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1298&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}>
            <div className="bg-black bg-opacity-50 px-6 py-4  text-center  flex flex-col items-center justify-center h-96 bg-cover bg-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Wide Range of Instruments
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl">
                Explore your musical interests with a variety of instruments to
                choose from, including piano, guitar, drums, violin, and more.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/three-people-asian-family-mother-son-daughter-playing-music-together_101709-1907.jpg?w=1060')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}>
            <div className="bg-black bg-opacity-50 px-6 py-4  text-center flex flex-col items-center justify-center h-96 bg-cover bg-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Performance Opportunities
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl">
                Showcase your talent and gain confidence through regular
                performance opportunities at recitals, concerts, and community
                events.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
