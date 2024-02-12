import React from 'react'
import './Service.css'

const Service = () => {
  return (
<>
      <div className='services-section'>
        <div className='services-section-container'>
          <div className='header'>
            <span>Our Services</span>
          </div>
          <div className='services-main-box'>
            <div className='service-left'>
              <ul>
                <li>- Tiles</li>
                <li>- Paints</li>
                <li>- Electricals </li>
                <li>- Plumbing </li>
                <li>- Ply woods</li>
                <li>- All solar products </li>
                <li>- Modular Kitchen </li>
                <li>- building repair services </li>
              </ul>
            </div>
            <div className='service-right'>
              <div className='col-1 same-col'>
               
                  <img className='forhover' src='https://img.freepik.com/free-photo/modern-luxury-hotel-office-reception-lounge-with-meeting-room_105762-1772.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.229895539.1703719784&semt=sph' alt='services'></img>
                <img src='https://img.freepik.com/free-photo/top-view-paint-can_23-2149705336.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.229895539.1703719784&semt=sph' alt='services'/>
                <img src='https://img.freepik.com/free-photo/different-electrical-tools-wooden-background-flat-lay_169016-24825.jpg?w=740&t=st=1707550904~exp=1707551504~hmac=24fe2d91e8a54f44b1fd62d64e99592a019204ba8661e86d3475620e609b0dce' alt='services'/>
              </div>
              <div className='col-2 same-col'>
                  <img src='https://img.freepik.com/free-photo/high-angle-measuring-tools-still-life_23-2150440970.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.1097436010.1705554726&semt=sph' alt='service'/>
                  <img src='https://img.freepik.com/free-photo/woman-engineer-standing-with-builder-pointing-up_23-2148073209.jpg?w=360&t=st=1707550986~exp=1707551586~hmac=74e3bc13c71c6c9f19877421dc706e8d76e537d386431c93579c41169a0b0985' alt='service'/>
              </div>
              <div className='col-3 same-col'>
                  <img src='https://img.freepik.com/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.229895539.1703719784&semt=sph' alt='services'/>
                  <img src='https://img.freepik.com/free-photo/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative_123827-23424.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.229895539.1703719784&semt=ais' alt='services'/>
                  <img src='https://img.freepik.com/free-photo/beautiful-green-kitchen-interior-design_23-2150230375.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.229895539.1703719784&semt=ais' alt='services'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service