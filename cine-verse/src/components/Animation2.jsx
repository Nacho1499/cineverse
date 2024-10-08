import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import wonda from "../assets/wanda.mp4"
import Scroll from './Scroll';


const Animation2 = () => {
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
        <video className='emma  img-fluid mt-5' src={wonda} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>WondLA</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>A young woman tries to figure out her place in the world while on the run with her robot mother, an over-sized water beast and a tall blue creature.</p>
        <h6>Category:[Animation] date:202/06/28 Duration:[00:25:35] Filesize:35 MB</h6>
            <a href="https://loadedfiles.org/ebc0647654aa3e93" className='btn mt-3 btn-danger mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Animation2;