import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import badboys from "../assets/badboys.mp4"
import Scroll from './Scroll';


const Trending1 = () => {
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
        <video className='emma  img-fluid mt-5 rounded' src={badboys} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Badboys</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>This Summer, the world’s favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous 
            comedy but this time with a twist: Miami’s finest are now on the run.</p>
        <h6>Category:[Action] Date:2024/07/22 Duration:[01:55:58] Filesize:429 MB </h6>
             <a href="https://loadedfiles.org/80c570bc788e73c6" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending1;