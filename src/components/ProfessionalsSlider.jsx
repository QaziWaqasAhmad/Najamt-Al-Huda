import {
  Avatar
} from "@mui/material";
import React, { useState } from 'react';
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import Buttons from './Buttons';
import StaticDateTimePickerLandscape from './DateAndTime';    
import BasicDateTimePicker from "./DateAndTime";



const ProfessionalsSlider = () => {
  const cards = [
    { image: p1, name: 'Sara', designation:'Hair Treatment ' },
    { image: p2, name: 'Sara', designation:'Hair Treatment ' },
    { image: p3, name: 'Sara', designation:'Hair Treatment ' },
    { image: p4, name: 'Sara', designation:'Hair Treatment ' },
    { image: p5, name: 'Sara', designation:'Hair Treatment ' },
    { image: p6, name: 'Sara', designation:'Hair Treatment ' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cards.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(cards.length / 3) - 1 : prevIndex - 1));
  };

  return (
       <>
        
        <div className="steps-head text-center p-2 mt-4">
      <span className='fw-bold'>Which professional do you prefer?</span>
      </div>
    <div className="carousel-container pt-3">
      <button className="prev-button" onClick={prevSlide}>
      <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div className="carousel">
        {cards.slice(currentIndex * 3, currentIndex * 3 + 3).map((card, index) => (
          <div key={index} className="carousel-items">
           <div className="team-card">
               <div className="imagesss text-center m-auto">
               <Avatar
              alt="Remy Sharp"
              src={card.image}
              className="m-auto"
              sx={{ width: 100, height: 100 }}
            />
               </div>
                <h6 className="text-center mt-3">{card.name}</h6>
                <small>{card.designation}</small>
              <div className="select-team text-center pt-2">
              <Buttons
               name='Select'
               className='select-pro p-0'
               />
              </div>
                
              </div>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
      <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    
      <div className="date-picker pt-4">  
       <div className="steps-head text-center p-2 mb-2">
      <span className='fw-bold'>When would you like your service?</span>
      </div>
      <BasicDateTimePicker/> 
      </div>
     {/* </div> */}
       </>
  );
};

export default ProfessionalsSlider;
