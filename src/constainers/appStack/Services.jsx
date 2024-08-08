import React from 'react'
import Navbar from '../../components/Navbar'
import ServiceSection from '../../components/ServiceSection'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link,useNavigate } from 'react-router-dom'; 
import hair from "../../assets/head.jpg";
import skin from "../../assets/skin.jpg";
import massage from "../../assets/massage.jpg";
import Buttons from '../../components/Buttons';
import makeup from "../../assets/makeup.jpg"
import ServiceSlider from '../../components/ServiceSlider';


const products = [
    {
        id:1,
        name:"HAIR",
        price:"AED 50.00",
        image:hair,
        features: [
            "Iron With Curls",
            "Blow Dry Simple Stard",
            "Differents Kinds Of Hair Cut"
          ],
    },
    {
        id:2,
        name:"SKIN",
        price:"AED 50.00",
        image:skin,
        features: [
            "Iron With Curls",
            "Blow Dry Simple Stard",
            "Differents Kinds Of Hair Cut"
          ],
    },
    {
        id:3,
        name:"MASSAGE",
        price:"AED 50.00",
        image:massage,
        features: [
            "Iron With Curls",
            "Blow Dry Simple Stard",
            "Differents Kinds Of Hair Cut"
          ],
    },
   
]


const Services = () => {
    const history = useNavigate();
    const handleSinglePage = (productId) =>{
        navigate(`/products/${productId}`);
    };
  return (
    <>
    
    <div className="service-page-container">
<div className="hero-container">
  <Navbar />
  <div className="service-hero-content  d-flex align-items-center justify-content-center flex-column">
    <div className="container">
      <div className="row ">
        <div className="col-md-6 flex-column text-white">
          <h1 className="mt-5">OUR <br /> SERVICES</h1>
        </div>
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
               
        <ServiceSlider/>
        <div className="service_cards"> 
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row  d-flex align-items-center justify-content-center">
            {products.map((product)=>(
                <div className="col-md-4 mb-5" key={product.id}>
                <div class="card " style={{width:"18rem"}}>
                <img src={product.image} class="card-img-top" alt={product.name}/>
                <div class="card-body p-3"> 
                    <div className="d-flex align-items-center justify-content-between">
                    <h5 class=" pt-2 ">{product.name}</h5>
                    <span className="price fw-bold">{product.price}</span>
                    </div>
                <ul class=" card-ul pt-1">
                    {product.features.map((feature,index)=>(
                        <li class="" key={index}>{feature}</li>
                    ))}
                </ul>
                    <div className="text-center pb-2">
                    <Link to={`/products/${product.id}`}>
                    <Buttons
                    name="Book Now"
                    onClick={() => handleSinglePage(product.id)}
                    className="w-75 card-book "
                    />
                    </Link>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            
            </div>
        </div>
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
    </>
  )
}

export default Services