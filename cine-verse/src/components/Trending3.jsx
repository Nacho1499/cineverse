import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import quiet from "../assets/quiet.mp4";
import Scroll from './Scroll';


const Trending3 = () => {
    function display(){
        
        const para=document.querySelector(".para");
        para.classList.toggle("show");
    }
    return(
        <>
        <Scroll/>
        <div className='container-fluid bg-black p-3'>
        <div className='container'>
        <Link to="/trending" className='btn btn-outline-danger mt-4'><i class=" fa-solid fa-circle-arrow-left"></i></Link>
        <video className='emma  img-fluid mt-5' src={quiet} loop controls autoPlay/>
        
        <div className='text-light mt-3'>
        <h3>A Quiet Place (Day One)</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>A young woman named Sam finds herself trapped in New York City during the early stages of an invasion by alien creatures with ultra-sensitive hearing.</p>
        <h6>Category:[Action/Horror] Date:2024/07/30 Duration:[01:39:24] Filesize:157 MB</h6>
             <a href="https://loadedfiles.org/a894f936a28dbc72" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending3;