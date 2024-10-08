import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import murbus from "../assets/murbus.mp4"
import Scroll from './Scroll';


const Top1 = () => {
    function display(){
        
        const para=document.querySelector(".para");
        para.classList.toggle("show");
    }

    return(
        <>
        <Scroll/>
        <div className='container-fluid bg-black p-3'>
        <div className='container'>
        <Link to="/" className='btn btn-outline-danger mt-4'><i class="fa-solid fa-circle-arrow-left"></i></Link>
        <video className='emma  img-fluid mt-5' src={murbus} loop controls/>
        
        <div className='text-light'>
        <h3>Morbius</h3>
        <h5  onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals
             itself to be a remedy potentially worse than the disease.</p>
             <h6>Category:[Action] Date:2022/05/14 Duration:[01:43:26] Filesize:185.99 MB </h6>
             <a href="https://loadedfiles.org/6292c4ed948162dc" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Top1;