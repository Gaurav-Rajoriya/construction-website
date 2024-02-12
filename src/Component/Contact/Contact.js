import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";

const Contact = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="contact-container">
      <div class="contain">
        <div class="wrapper">
          <div class="form" data-aos="fade-right" data-aos-duration="1500">
            <h2 class="form-headline">Drop us message for any Query</h2>
            <form id="submit-form" action="">
              <p>
                <input
                  id="name"
                  class="form-input"
                  type="text"
                  placeholder="Your Name*"
                />
                <small class="name-error"></small>
              </p>
              <p>
                <input
                  id="email"
                  class="form-input"
                  type="email"
                  placeholder="Your Email*"
                />
                <small class="name-error"></small>
              </p>
              <p class="full-width">
                <input
                  id="company-name"
                  class="form-input"
                  type="text"
                  placeholder="Company Name*"
                  required
                />
                <small></small>
              </p>
              <p class="full-width">
                <textarea
                  minlength="20"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Your Message*"
                  required
                ></textarea>
                <small></small>
              </p>
              <p class="full-width">
                <input type="checkbox" id="checkbox" name="checkbox" checked />{" "}
                Yes, I would like to receive communications by call / email
                about Company's services.
              </p>
              <p class="full-width">
                <input
                  type="submit"
                  class="submit-btn"
                  value="Submit"
                  onclick="checkValidations()"
                />
               
              </p>
            </form>
          </div>

          <div class="contacts contact-wrapper"  data-aos="fade-left" data-aos-duration="1500">
            <ul>
              <li><ion-icon name="location"></ion-icon>

             CP-V-243/A,INDIANA CRUSHER ROAD,PILATHARA,PILATHARA,KANNUR-DIST.,KERALA
INDIA
670504
              </li>
              <li><ion-icon name="call"></ion-icon>

              80898 04564
              </li>
              <li><ion-icon name="mail"></ion-icon>

              haridasnkn153@gmail.com
              </li>
            </ul>
            <h4>Office Time</h4>
            <p>Morning 10am to 3pm</p>
            <p>Morning 4pm to 7pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
