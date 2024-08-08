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
import BasicDateTimePicker from "./DateAndTime";
import Item from "antd/es/list/Item";

const ProfessionalsSlider = () => {
  const cards = [
    { id:1, image: p1, name: 'Sara', designation: 'Hair Treatment ' },
    { id:2,image: p2, name: 'jhon', designation: 'Hair Treatment ' },
    { id:3,image: p3, name: 'salman', designation: 'Hair Treatment ' },
    { id:4,image: p4, name: 'waqas', designation: 'Hair Treatment ' },
    { id:5,image: p5, name: 'noman', designation: 'Hair Treatment ' },
    { id:6,image: p6, name: 'talha', designation: 'Hair Treatment ' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  // console.log(selectedCardIndex, "sadkdjdhdhd")

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cards.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(cards.length / 3) - 1 : prevIndex - 1));
  };

  const handleCardClick = (id) => {
    // alert(id)
    setSelectedCardIndex(id);
  };

  return (
    <>
      <div className="steps-head text-center p-2 mt-4">
        <span className='fw-bold'>Which professional do you prefer?</span>
      </div>
      <div className="carousel-container pt-3">
        <button className="prev-button" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="carousel">
          {cards.slice(currentIndex * 3, currentIndex * 3 + 3).map((card, index) => {
            const globalIndex = currentIndex * 3 + index; 
            return (
              <div
                key={index}
                className={`carousel-items ${globalIndex === selectedCardIndex ? 'team-card-active' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="team-card p-2">
                  <div className="imagesss text-center m-auto">
                    <Avatar
                      alt="Remy Sharp"
                      src={card.image}
                      className="m-auto"
                      sx={{ width: 100, height: 100 }}
                    />
                  </div>
                  <h6 className="text-center mt-2">{card.name}</h6>
                  <small>{card.designation}</small>
                  <div className="select-team text-center pt-2">
                    {/* <Buttons
                      name='Select'
                      className='select-pro p-0'
                    /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="next-button" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="date-picker pt-4">
        <div className="steps-head text-center p-2 mb-2">
          <span className='fw-bold'>When would you like your service?</span>
        </div>
        <BasicDateTimePicker />
      </div>
    </>
  );
};

export default ProfessionalsSlider;
