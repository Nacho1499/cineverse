import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import infinit2 from "../assets/infinit2.mp4"
import Scroll from './Scroll';


const Animation7 = () => {
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
        <video className='emma  img-fluid mt-5 rounded' src={infinit2} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Infinite Earth 2</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>The Anti-Monitor (the Monitor’s evil counterpart) is released into the DC Multiverse and begins to destroy the different Earths that compose it. The Monitor attempts to 
            recruit heroes from across the Multiverse to fight back.</p>
            <h6>Category:[Animation] Date:2024/08/23 Duration:[01:34:43] Filesize:214.01 MB</h6>
            <a href="https://loadedfiles.org/7befbb20e4d62d9c" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Animation7;