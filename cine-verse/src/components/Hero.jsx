import React from 'react';
import pic24 from "../assets/24.jpg";
import ironman from "../assets/ironman.jpg";
import flash from "../assets/flash.jpg";
import v from "../assets/v.jpg";


const Hero = () => {
    return(
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="4000">
      <img src={pic24} className="d-block w-100 img-fluid hero" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={ironman} className="d-block w-100 img-fluid hero" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={flash} className="d-block w-100 img-fluid hero" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={v} className="d-block w-100 img-fluid hero" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Hero;