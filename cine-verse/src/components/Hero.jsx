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
      <div class="carousel-caption text-light bg-black rounded">
        <h4>CINEVERSE</h4>
        <p>Watch unlimited movies and Tv series of your choice and lots more</p>
      </div>
      
      
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={ironman} className="d-block w-100 img-fluid hero" alt="..."/>
      <div class="carousel-caption text-light bg-black rounded">
        <h4>REGULAR UPDATES</h4>
        <p>With our regular updates on cineverse, we make sure you are up to date with trending movies</p>
      </div>
      
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={flash} className="d-block w-100 img-fluid hero" alt="..."/>
      <div class="carousel-caption text-light bg-black rounded">
        <h4>SIGN UP</h4>
        <p>Sign up today with cineverse to enjoy lots of benefits</p>
      </div>
      
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={v} className="d-block w-100 img-fluid hero" alt="..."/>
      <div class="carousel-caption text-light bg-black rounded">
        <h4>REQUEST FOR A MOVIE</h4>
        <p>With our request section, you can request for a particular movie </p>
      </div>
      
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon  bg-black rounded p-2" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-black rounded p-2" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Hero;