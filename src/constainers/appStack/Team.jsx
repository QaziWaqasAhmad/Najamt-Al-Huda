import React from "react";
import Navbar from "../../components/Navbar";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import {
    Avatar
  } from "@mui/material";

const Team = () => {
  return (
    <>
      <div className="about-page-container">
        <div className="hero-container">
          <Navbar />
          <div className="about-hero-content d-flex align-items-center justify-content-center flex-column">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 flex-column text-white">
                  <h1 className="mt-5">OUR PROFESSIONALS</h1>
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
    </>
  );
};

export default Team;
