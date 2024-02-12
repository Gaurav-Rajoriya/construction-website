import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Hero.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function App() {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <>
      <div className="slider">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.1097436010.1705554726&semt=sph"
              alt="img"
            />

            <div className="hero-text" data-aos="fade-up">
              <h2>
                Welcome to Madathil Trading 4 Construction Pvt. Ltd: <br></br>{" "}
                Where Dreams are Built
              </h2>

              <p>
                Transforming dreams into reality, our construction company
                pioneers innovation and excellence, building foundations for
                enduring success and client satisfaction.
              </p>
              <button className="btn">
                <Link to='/contact'>Join Now</Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/construction-site-silhouettes_1127-3253.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.1097436010.1705554726&semt=sph"
              alt="img"
            />
            <div className="hero-text" data-aos="fade-up">
              <h2>
                Building Dreams, Crafting Futures:<br></br> Madathil Trading 4
                Construction Pvt. Ltd
              </h2>

              <p>
                Pioneering innovation, we turn dreams into reality, crafting
                foundations for lasting success and satisfying our clients with
                excellence in construction.
              </p>
              <button className="btn">
                <Link to='/contact'>Join Now</Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://nirogranite.com/wp-content/uploads/2023/05/Understanding-Homogeneous-Tiles-And-Differences-To-Other-Tiles-scaled.jpeg"
              alt="img"
            />
            <div className="hero-text" data-aos="fade-up">
              <h2>
                Embarking on Dreams, Forging Futures: Explore <br></br>Madathil
                Trading 4 Construction Pvt. Ltd!
              </h2>

              <p>
                Innovating construction, we turn dreams into reality, laying
                foundations for lasting success and satisfying clients with
                excellence in every project.
              </p>
              <button className="btn">
                <Link to='/contact'>Join Now</Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/construction-site-operations-background_1409-5622.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.1097436010.1705554726&semt=sph"
              alt="img"
            />
            <div className="hero-text" data-aos="fade-up">
              <h2>
                Architecting Dreams, Shaping Futures: Discover <br></br>Madathil
                Trading 4 Construction Pvt. Ltd!
              </h2>

              <p>
                Turning dreams into reality, our construction firm innovates,
                ensuring lasting success and client satisfaction through
                excellence in every project.
              </p>
              <button className="btn">
                <Link to='/contact'>Join Now</Link>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="tag">
          <div className="flex" data-aos="zoom-in-up"> 
            {" "}
            <h4>Looking for a best construction company</h4>
            <button className="btn2">
              <Link to='/contact'>Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
