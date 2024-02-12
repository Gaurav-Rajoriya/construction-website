import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import Category from '../Catogary/Category';
import Details from '../Details/Details';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Category />
      <Service />
      <Details />
      <Testimonial />
      <Contact />
      
    </>
  );
};

export default Home;
