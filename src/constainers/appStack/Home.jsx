import {
  Avatar
} from "@mui/material";

import React, { useEffect, useState } from "react";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import Buttons from "../../components/Buttons";
import Navbar from "../../components/Navbar";
import ServiceSection from "../../components/ServiceSection";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import hair from "../../assets/head.jpg";
import skin from "../../assets/skin.jpg";
import massage from "../../assets/massage.jpg";
import TextFeilds from "../../components/TextFeilds";
import TextField from '@mui/material/TextField';
import offer from "../../assets/offer.jpg"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Home = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // useEffect(()=>{
  //   setModal(true)
  //   const seenModal = localStorage.getItem('seenModal')
  //   if(seenModal){
  //     setModal(false)
  //   }else{
  //     localStorage.setItem('seenModal')
  //   }
  // },[])

   
  return (
    <>
      <div className="home-container">
        <div className="hero-container">
          <Navbar />
          <div className="hero-content d-flex align-items-center justify-content-center flex-column">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 flex-column text-white">
                  <h1 className="reveal-text">Najamt Al Huda </h1>
                  <h1 className="fs-2">
                    Women's Salon & Beauty <br /> Services At Home In The UAE
                  </h1>
                  <Buttons name="Services" className="book-app mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-container d-flex align-items-center justify-content-center section-height">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-content">
                <div className="heading">
                  <span className="reveal-text ">KNOW MORE</span>
                  <h2 className="fw-bold">ABOUT US</h2>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia consectetur, doloremque ut assumenda commodi sint
                  accusantium sunt quibusdam optio consequatur odio error
                  excepturi, aliquam in eligendi illum architecto unde!
                  Accusamus unde, dicta ab nesciunt quia dignissimos obcaecati
                  eaque fugit commodi molestiae architecto repellendus, odit, at
                  enim fuga nobis a saepe dolores voluptatem adipisci
                  cupiditate. Molestiae accusantium illum tempora nihil, nostrum
                  ipsam eligendi consequuntur rerum architecto quasi dolores
                  voluptas, deleniti placeat.
                </p>
                <Buttons name="About Us" className="about-btn" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-image">
                <img src={about1} alt="" className="w-100 rounded-img" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-image">
                <img src={about2} alt="" className="w-100 rounded-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-container section-height p-5 d-flex align-items-center justify-content-center flex-column">
        <div className="heading mx-auto text-center">
          <span className="reveal-text ">SERVICES</span>
          <h2 className="fw-bold">OUR SERVICES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            aperiam <br />
            earum odio mollitia ad error!
          </p>
        </div>

        <div className="service_cards"> 
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4">
            <div class="card " style={{width:"18rem"}}>
            <img src={hair} class="card-img-top" alt="..."/>
            <div class="card-body p-3"> 
                <div className="d-flex align-items-center justify-content-between">
                <h5 class=" pt-2 ">Hair</h5>
                <span className="price fw-bold">AED 50.00</span>
                </div>
            <ul class=" card-ul pt-1">
                <li class="">Iron With Curls</li>
                <li class="">Blow Dry Simple Stard</li>
                <li class="">Differents Kinds Of Hair Cut</li>
            </ul>
                <div className="text-center pb-2 d-none">
                <Buttons
                name="Book Now"
                className="w-75 card-book "
                />
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card " style={{width:"18rem"}}>
            <img src={massage} class="card-img-top" alt="..."/>
            <div class="card-body p-3"> 
                <div className="d-flex align-items-center justify-content-between">
                <h5 class=" pt-2 ">Massage</h5>
                <span className="price fw-bold">AED 50.00</span>
                </div>
            <ul class="card-ul pt-1">
                <li class="">Head & Foot Massage</li>
                <li class="">Neck & Shoulders Massage</li>
                <li class="">Back & Lags Massage</li>
            </ul>
                <div className="text-center pb-2 d-none">
                <Buttons
                name="Book Now"
                className="w-75 card-book "
                />
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card " style={{width:"18rem"}}>
            <img src={skin} class="card-img-top" alt="..."/>
            <div class="card-body p-3"> 
                <div className="d-flex align-items-center justify-content-between">
                <h5 class=" pt-2 ">Skin Service</h5>
                <span className="price fw-bold">AED 50.00</span>
                </div>
            <ul class=" card-ul pt-1">
                <li class="">Facial Whitening</li>
                <li class="">Herbal Facial</li>
                <li class="">Deep Cleansing Facial</li>
            </ul>
                <div className="text-center pb-2 d-none">
                <Buttons
                name="Book Now"
                className="w-75 card-book "
                />
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>

        <div className="view-services mx-auto text-center mt-4">
            <Buttons
            name="View All Services"
            />
        </div>
      </div>
      <div className="why-us section-height d-flex align-items-center justify-content-center flex-column">
      <div className="heading mx-auto text-center">
          <span className="reveal-text ">WHY CHOOSE US</span>
          <h2 className="fw-bold">THERE ARE SO MANY REASONS <br /> TO LOVE NAJAMT-UL-HUDA!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            aperiam <br />
            earum odio mollitia ad error!
          </p>
        </div>
        <div className="why-us-container mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3 ">
                <div className="our-card p-3 text-center d-flex align-items-center justify-content-center flex-column">
                <i class="fa-solid fa-star location"></i>
                <h5 className="fw-bold">Top rated professionals</h5>
                <p className="pb-2">Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!</p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="our-card p-3 text-center d-flex align-items-center justify-content-center flex-column">
                <i class="fa-regular fa-calendar-check location "></i>
                <h5 className="fw-bold">Same-day availability</h5>
                <p className="pb-3">Book in less than 60 seconds, and even select same-day slots.</p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="our-card p-3 text-center d-flex align-items-center justify-content-center flex-column">
                <i class="fa-solid fa-ranking-star location"></i>
                <h5 className="fw-bold">Top quality</h5>
                <p className="pb-3">Our professionals are equipped with the best tools.</p>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="our-card p-3 text-center d-flex align-items-center justify-content-center flex-column">
                <i class="fa-solid fa-mask location"></i>
                <h5 className="fw-bold">Super app</h5>
                <p className="pb-3">Being a Super app means we’ve got the widest range of home services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-container section-height d-flex align-items-center justify-content-center flex-column">
        <div className="heading mx-auto text-center">
          <span className="reveal-text ">TEAM</span>
          <h2 className="fw-bold">OUR PROFESSIONALS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            aperiam <br />
            earum odio mollitia ad error!
          </p>
        </div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4">
              <div className="team-card">
               <div className="imagesss text-center m-auto">
               <Avatar
              alt="Remy Sharp"
              src={p1}
              className="m-auto"
              sx={{ width: 150, height: 150 }}
            />
               </div>
                <h4 className="text-center mt-3">SARA</h4>
                <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, provident?</p>
                <div className="stars d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
               <div className="imagesss text-center m-auto">
               <Avatar
              alt="Remy Sharp"
              src={p2}
              className="m-auto"
              sx={{ width: 150, height: 150 }}
            />
               </div>
                <h4 className="text-center mt-3">ELIZABETH</h4>
                <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, provident?</p>
                <div className="stars d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
               <div className="imagesss text-center m-auto">
               <Avatar
              alt="Remy Sharp"
              src={p3}
              className="m-auto"
              sx={{ width: 150, height: 150 }}
            />
               </div>
                <h4 className="text-center mt-3">JESSICA</h4>
                <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, provident?</p>
                <div className="stars d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            
            
            
          </div>
          <div className="row mt-3 d-none">
            <div className="col-md-4">
              <div className="team-profile mx-auto text-center">
                <img src={p4} alt="team" className="pro-1" />
              </div>
              <div className="team-content text-center mt-3">
              <h4>SARA</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, voluptate!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-profile mx-auto text-center">
                <img src={p5} alt="team" className="pro-1" />
              </div>
              <div className="team-content text-center mt-3">
              <h4>SARA</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, voluptate!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-profile mx-auto text-center">
                <img src={p6} alt="team" className="pro-1" />
              </div>
              <div className="team-content text-center mt-3">
              <h4>SARA</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, voluptate!</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <div className="contact mt-5">
      <div className="heading mx-auto text-center">
          <span className="reveal-text ">CONTACT US</span>
          <h2 className="fw-bold">Feel Free To Contact Us!</h2>
        </div>

      <div className="contact-container section-height d-flex align-items-center justify-content-center flex-column">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="map-embedded">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722544.6272144164!2d51.305971177361656!3d24.33612786894189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1715191153632!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div className="col-md-5">
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
      </div>
      

     {/* OFFER BANNER MODAL */}

     <Modal isOpen={modal} toggle={toggle} {...args} className='modal-offer'>
        <img src={offer} alt="offer" className="modal-image" />
        <i class="fa-solid fa-xmark fs-2 text-white cancel-modal"></i>
      </Modal>

    </>
  );
};

export default Home;
