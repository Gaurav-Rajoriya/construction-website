import React, { useRef, useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div className='about-container'>
      <div className='about'>
        <div className='about-left' data-aos="fade-right" data-aos-duration="1500">
          <h4>Why You Should Choose Us For Your Next Project!</h4>
          <p>Choose us for unparalleled dedication to excellence, turning your dreams into reality with precision, innovation, and unwavering commitment.</p>
          <ul>
            <li><ion-icon name="checkbox-outline"></ion-icon> Building dreams, shaping futures.</li>
            <li><ion-icon name="checkbox-outline"></ion-icon> Client-centric approach, exceeding expectations.</li>
            <li><ion-icon name="checkbox-outline"></ion-icon> Precision in every construction endeavor.</li>
            <li><ion-icon name="checkbox-outline"></ion-icon> Excellence from foundation to finish.</li>
            <li><ion-icon name="checkbox-outline"></ion-icon> Commitment to lasting satisfaction.</li>
          </ul>
        </div>
        <div className='about-right' data-aos="fade-up-left" data-aos-duration="1500">
          <div className='video-box'>
            <iframe onClick={playVideo} width="560" height="315" src="https://www.youtube.com/embed/FFo-KeX_AAk?si=2R8bzyqol1_oPY4A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className='square'></div>
            <div className='square1'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
