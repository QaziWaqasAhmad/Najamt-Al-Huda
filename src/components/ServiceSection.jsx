import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import hair from "../assets/head.jpg";
import skin from "../assets/skin.jpg";
import massage from "../assets/massage.jpg";
import Buttons from "./Buttons";


const ServiceSection = () => {
  const theme = useTheme();
  return (
    <>
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
                <div className="text-center pb-2">
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
                <div className="text-center pb-2">
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
                <div className="text-center pb-2">
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
    </>
  );
};

export default ServiceSection;
