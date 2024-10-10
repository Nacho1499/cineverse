import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import infinit3 from "../assets/inifint3.mp4"
import Scroll from './Scroll';


const Animation8 = () => {
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
        <video className='emma  img-fluid mt-5 rounded' src={infinit3} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Infinite Earth 3</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Trapped in a pocket universe, surviving Earths face annihilation by the Anti-Monitor. Time shatters, bringing past heroes to aid Justice League against the epitome 
            of evil. Their sacrifice may lead to victory.</p>
        <h6>Category:[Animation] Date:2024/09/02 Duration:[01:42:44] Filesize:226 MB</h6>
            <a href="https://loadedfiles.org/5216ab9f5bf34db8" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Animation8;