import React, { useState,useEffect } from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Aos from 'aos';


const Testimonial = () => {
    const [slidesPerView, setSlidesPerView] = useState('2');
    const handleResize = () => {
        const windowWidth = window.innerWidth;
    
        // Adjust slidesPerView based on window width
        if (windowWidth < 400) {
          setSlidesPerView(1);
        } else if (windowWidth >= 400 && windowWidth < 768) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(2);
        }
      };
    useEffect(() => {
        handleResize()
        Aos.init()
    }, [])
    
  return (
    <div className='testimonial-container'  data-aos="fade-up"
    data-aos-duration="1000">
        <h2>What Our Client Says <hr/></h2>
        <div className='testimonial'>
        <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='client'>
                <div className='client-img'>
                    <img src="data:image/jpeg;base64,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" alt="img" />
                </div>
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction truly impressed me, bringing my vision to life with exceptional service. Highly recommended for their professionalism and top-notch craftsmanship!</p>
                    <h2>Shakti Builders</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
                <div className='client-img'>
                    <img src="https://img.freepik.com/free-photo/photo-attractive-bearded-young-man-with-cherful-expression-makes-okay-gesture-with-both-hands-likes-something-dressed-red-casual-t-shirt-poses-against-white-wall-gestures-indoor_273609-16239.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.229895539.1703719784&semt=sph" alt="img" />
                </div>
                <div className='client-text'>
                    <p>
                    Exceptional service! Madathil Trading 4 Construction delivered beyond my expectations, transforming my dream home into a reality with professionalism and expertise.</p>
                    <h2>Anuj Sharma</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
                <div className='client-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcVa8p77djFvoanFZgAw4m5-JC8N4791CGA&usqp=CAU" alt="img" />
                </div>
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction surpassed all expectations with their exceptional service, turning my dream project into a stunning reality. Highly recommend!</p>
                    <h2>Shyam Builders</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
                <div className='client-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9e9CCAWSAYA-izGgs46py22cE3BeUQFF7fQ&usqp=CAU" alt="img" />
                </div>
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction exceeded expectations, delivering outstanding service and turning my dream into reality. Highly recommended for top-notch professionalism!</p>
                    <h2>Anish Varma</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
                <div className='client-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmT1nrdZR46G1oD6xaH9S_Ky9c8tIMOTXVWQ&usqp=CAU" alt="img" />
                </div>
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction went above and beyond, turning my vision into reality with exceptional service. Highly recommended for their professionalism!</p>
                    <h2>Ram Kishan Builders</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
                <div className='client-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAgCxd_m40eIZP0zoJJGH7IzdLWIsEYk_sg&usqp=CAU" alt="img" />
                </div>
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction exceeded expectations, bringing my vision to life with exceptional service. Highly recommend for their professionalism and quality workmanship!</p>
                    <h2>Himanshu Saksena</h2>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Testimonial