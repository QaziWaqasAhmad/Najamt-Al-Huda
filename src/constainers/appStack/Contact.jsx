import React from 'react'
import Navbar from '../../components/Navbar'
import TextFeilds from '../../components/TextFeilds'
import TextField from '@mui/material/TextField';
import Buttons from '../../components/Buttons';

const Contact = () => {
  return (
    <>
      <div className="about-page-container">
<div className="hero-container">
  <Navbar />
  <div className="about-hero-content d-flex align-items-center justify-content-center flex-column">
    <div className="container">
      <div className="row ">
        <div className="col-md-6 flex-column text-white">
          <h1 className="mt-5">GET IN TOUCH</h1>
        </div>
      </div>
    </div>
  </div>  
  
  </div>
</div>
<div className="contact-container section-height mt-4 d-flex align-items-center justify-content-center flex-column">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6">
                 <div className="row">
                  <div className="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722544.6272144164!2d51.305971177361656!3d24.33612786894189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1715191153632!5m2!1sen!2sus" width="550" height="274" style={{border:0, borderRadius:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                 </div>
                 <div className="row mt-4 d-flex align-items-center justify-content-center">
                  <div className="col-md-6">
                  <div className="location-card w-100 d-flex align-items-center text-start justify-content-start p-3 gap-2 bg-white">
                 <i class="fa-solid fa-location-dot location fs-2"></i>
                 <div className="text-dark w-100">
                    <h5>We Are Located</h5>
                    <span>Jumerah, Dubai</span> 
                    </div>
                 </div>
                  </div> 
                  <div className="col-md-6">
                  <div className="location-card w-100 d-flex align-items-center text-start justify-content-start p-3 gap-2 bg-white">
                  <i class="fa-solid fa-phone fs-2 location"></i>
                 <div className="text-dark w-100">
                 <h5>Call Us</h5>
                    <span>+971 123 38998</span>
                    </div>
                 </div>
                  </div> 
                  
                 </div>
                 <div className="row mt-4 d-flex align-items-center justify-content-center">
                  <div className="col-md-6">
                  <div className="location-card w-100 d-flex align-items-center text-start justify-content-start p-3 gap-2 bg-white">
                  <i class="fa-solid fa-envelope-open fs-2 location"></i>
                 <div className="text-dark w-100">
                 <h5>Email</h5>
                    <span>Nahws@gmail.com</span>
                    </div>
                 </div>
                  </div> 
                  <div className="col-md-6">
                  <div className="location-card w-100 d-flex align-items-center text-start justify-content-center p-3 gap-2 bg-white">
                  <i class="fa-solid fa-calendar-check fs-2 location"></i>
                    <h5>Book Appointment</h5>
                 </div>
                  </div> 
                  
                 </div>
                
              </div>
              <div className="col-md-6">
               <div className="contact-form bg-white p-3">
                  <div className="row">
                    <div className="col-md-6">
                 <TextFeilds id="f-name" type="text"  label="First Name" className="w-100 border-text" name="f-name"  />
                    </div>
                    <div className="col-md-6">
                    <TextFeilds id="l-name" type="text"  label="Last Name" className="w-100" name="l-name"  />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                 <TextFeilds id="email" type="email"  label="Email" className="w-100" name="email"  />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                 <TextFeilds id="phone" type="text"  label="Phone" className="w-100" name="phone"  />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <TextField
                      id="outlined-multiline-flexible"
                      label="Multiline"
                      multiline
                      rows={8}
                      type="text"
                      className="w-100 mb-3"
                    />
                    </div>
                  </div>
                  <Buttons
                  name="Send"
                  className="w-100 send"
                  />
                </div>
              </div>
            </div>
          </div>
         </div>

    </>
  )
}

export default Contact