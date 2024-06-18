import React from 'react'
import Navbar from '../../components/Navbar'
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const AboutUs = () => {
  return (
    <>
     <div className="about-page-container">
<div className="hero-container">
  <Navbar />
  <div className="about-hero-content d-flex align-items-center justify-content-center flex-column">
    <div className="container">
      <div className="row ">
        <div className="col-md-6 flex-column text-white">
          <h1 className="mt-5">ABOUT US</h1>
          {/* <div className="d-flex">
          <i class="fa-solid fa-house"></i>
          <span>Home > About Us</span>
          </div> */}
        </div>
      </div>
    </div>
  </div>  
</div>
</div>

<div className="counter mb-5">
        <div className="container counter-container p-4">
            <div className="row">
                <div className="col-md-3">
                     <div className="count count-bar text-center">
                        <h2 className='fw-bold'>10+</h2>
                        <p className='location'>YEARS OF EXPREINCE</p>
                     </div>
                </div>
                <div className="col-md-3"> 
                     <div className="count count-bar text-center">
                        <h2 className='fw-bold'>24</h2>
                        <p className='location'>HAIRDRESSERS</p>
                     </div>
                </div>
                <div className="col-md-3">
                     <div className="count count-bar text-center">
                        <h2 className='fw-bold'>430+</h2>
                        <p className='location'>SERVICES COMPLETED</p>
                     </div>
                </div>
                <div className="col-md-3">
                     <div className="count text-center">
                        <h2 className='fw-bold'>300+</h2>
                        <p className='location'>HAPPY CUSTOMERS</p>
                     </div>
                </div>
            </div>
        </div>
      </div>

<div className="about-container  d-flex align-items-center justify-content-center section-height">
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
                {/* <Buttons name="About Us" className="about-btn" /> */}
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

      <div className="mission mt-5 section-height d-flex align-items-center justify-content-center ">
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="our-mission bg-white text-center d-flex align-items-center justify-content-center flex-column">
                    <i class="fa-brands fa-space-awesome mission-icon mb-3 location"></i>
                       <h2>Our Mission</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quaerat, perspiciatis voluptatibus minima fugit, earum labore cumque error quidem reprehenderit inventore. Doloribus, sapiente, iusto repellendus voluptate minima harum facere sint eaque voluptatum dolores mollitia atque, numquam natus unde distinctio nemo dicta deserunt. Quis eius, nobis rerum officiis quasi excepturi.</p>
                    </div>
                </div>
                <div className="col-md-6 our-vision text-center bg-white d-flex align-items-center justify-content-center flex-column">
                <i class="fa-solid fa-lightbulb mission-icon mb-3 location"></i>
                <h2>Our Vision</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quaerat, perspiciatis voluptatibus minima fugit, earum labore cumque error quidem reprehenderit inventore. Doloribus, sapiente, iusto repellendus voluptate minima harum facere sint eaque voluptatum dolores mollitia atque, numquam natus unde distinctio nemo dicta deserunt. Quis eius, nobis rerum officiis quasi excepturi</p>
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

export default AboutUs