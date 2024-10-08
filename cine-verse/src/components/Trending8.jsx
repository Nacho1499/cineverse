import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ape from "../assets/ape.mp4"
import Scroll from './Scroll';


const Trending8 = () => {
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
        <video className='emma  img-fluid mt-5' src={ape} loop controls />
        
        <div className='text-light mt-3'>
        <h3>Kingdom Of The planet Of Apes</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make 
            choices that will define a future for apes and humans alike.</p>
        <h6>Category:[Action] Date:2024/07/09 Duration:[02:24:40] Filesize:438.17 MB</h6>
             <a href="https://loadedfiles.org/a39327c7c908f1bd" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending8;