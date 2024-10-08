import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import shot1 from "../assets/flash.mp4"
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
        <video className='emma  img-fluid mt-5' src={shot1} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>The Flash</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Worlds collide when the Flash uses his superpowers to travel back in time to change the events of the past. However, when his attempt to save his family inadvertently alters the future, he becomes trapped in a reality in which General Zod has returned, threatening annihilation. With no other superheroes to turn to, the Flash looks to coax a very different Batman out of retirement and rescue 
            an imprisoned Kryptonian — albeit not the one he’s looking for.</p>
        <h6>Category:[Action] Date:2023/07/28 Duration:[02:24:03] Filesize:403.41 MB</h6>
             <a href="https://loadedfiles.org/a25aa3b452530997" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending1;