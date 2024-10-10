import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import quietplace1 from "../assets/quietplace1.mp4"
import Scroll from './Scroll';


const Trending7 = () => {
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
        <video className='emma  img-fluid mt-5 rounded' src={quietplace1} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>A Quiet Place 1</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.</p>
        <h6>Category[Action/Horror] Duration:[01:30:38] Filesize:167.95 MB</h6>
             <a href="https://loadedfiles.org/0d29b0a61c085e60" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending7;