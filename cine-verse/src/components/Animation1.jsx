import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import lego from "../assets/lego.mp4"
import Scroll from './Scroll';


const Animation1 = () => {
    function display(){
        
        const para=document.querySelector(".para");
        para.classList.toggle("show");
    }
    return(
        <>
        <Scroll/>
    <div className='container-fluid bg-black p-3'>
        <div className='container'>
        <Link to="/animation" className='btn btn-outline-danger mt-4'><i class=" fa-solid fa-circle-arrow-left"></i></Link>
        <video className='emma  img-fluid mt-5  rounded' src={lego} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Lego Avengers</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>The Avengers meet a dangerous new foe quite unlike anything they’ve ever encountered before.</p>
        <h6>Category:[Animation] Date:2023/10/27 Duration:[43 Mins] Filesize:121.38 MB</h6>
            <a href="https://loadedfiles.org/92ee4e4045b1deb4" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Animation1;