import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import hair from "../assets/hair-service.jpg";

export default function Faqs() {
  return (
    <>
   

     <div className="product mt-5 text-center">
      {/* <img src={hair} alt="hair service" className='single-image' /> */}
     </div> 

       <div className="service-name">
        <div className="service-detail d-flex align-items-center justify-content-between">
        <h3 className='fw-bold'>HAIR TREATMENT</h3>
        <span className='location fw-bold text-dark'>AED 50.00</span>
        </div>
        <div className="service-detail">
          <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ipsum vitae voluptates reprehenderit. A rerum quos omnis modi, ducimus ratione ea beatae molestias magni libero veniam cum accusantium dolor nulla officia doloremque totam et quam architecto eum dicta inventore perspiciatis voluptatem praesentium? Deserunt hic commodi aut aliquid, accusantium alias reiciendis iusto ullam sit fuga amet quia. Hic quas quos obcaecati, ducimus ratione placeat nihil voluptate tenetur dolore quo autem inventore a natus. In minus eius similique ad odit dolorem! Doloremque aperiam vitae natus possimus itaque ducimus impedit quidem, porro, tempora earum libero modi cumque molestiae officia nostrum doloribus ullam cum.</p>
        </div>

       </div>
      
    </>
  );
}
