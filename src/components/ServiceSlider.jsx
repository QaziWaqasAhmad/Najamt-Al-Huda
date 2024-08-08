import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { clientCategory } from '../services/products/Products';
// import { breakpoints } from '@mui/system';

const ServiceSlider = () => {
  const [categories, setCategories] = useState([]);

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0%",
        }
      }
    ]
  };

//   useEffect(() => {
//     getCategory();
//   }, []);

  
  const services = [
    {
        name:'Hair Service'
    },
    {
        name:'Skin Service'
    },
    {
        name:'SPA Service'
    },
    {
        name:'Massage Service'
    },
    {
        name:'Massage Service'
    },
  ]

  return ( 
    <div className="category-slider-container mb-5">
      {/* <h4 className='text-center mb-4 underline'>CATEGORIES</h4> */}
      {services?.length > 4 ? (
        <Slider {...settings} className=''>
          {services?.map((item,index) => (
            <div className='p-3' key={index}>
              <button
                className="category-button"
              >
                {item.name}
              </button>
            </div>
          ))}
        </Slider>
      ) : (
        services?.map((item,index) => (
          <div className='p-3' key={index}>
            <button
             className="category-button"
            >
              {item.name}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ServiceSlider;
