import React, { useEffect } from 'react'
import './Category.css'
import truck from '../Assest/excavator_10951934.png'
import paint from '../Assest/paint-bucket_7330456.png'
import estate from '../Assest/tiles_9873571.png'
import solar from '../Assest/solar-panel_2820824.png'
import Aos from 'aos'

const Category = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='category-container'>
      <div className='category'>
        <div className='category-box' data-aos="fade-up"
     data-aos-duration="1500">
          <div className='category-img'>
            <img src={truck} alt='img'></img>
          </div>
          <h4>Building Repair Services</h4>

         <p>Expert building repair services, restoring structures to their optimal condition with precision and efficiency for lasting durability and safety.</p>
        </div>
        <div className='category-box'  data-aos="fade-up"
     data-aos-duration="1500">
          <div className='category-img'>
            <img src={paint} alt='img'></img>
          </div>
          <h4>Expensive Wall Paint</h4>

         <p>High-quality, premium wall paint offering exceptional durability and vibrant colors, elevating your space with luxurious sophistication and long-lasting beauty.</p>
        </div>
        <div className='category-box'  data-aos="fade-up"
     data-aos-duration="1500">
          <div className='category-img'>
            <img src={estate} alt='img'></img>
          </div>
          <h4>Best Tiles</h4>

         <p>Expert building construction services delivering quality craftsmanship, innovation, and timely completion for durable structures that exceed expectations and inspire confidence.</p>
        </div>
        <div className='category-box'  data-aos="fade-up"
     data-aos-duration="1500">
          <div className='category-img'>
            <img src={solar} alt='img'></img>
          </div>
          <h4>Solar Products </h4>

         <p>Sustainable solar products harnessing renewable energy, empowering you to reduce your carbon footprint while enjoying reliable and cost-effective energy solutions.</p>
        </div>
      </div>
    </div>
  )
}

export default Category