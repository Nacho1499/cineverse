import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import atlas from "../assets/atlas.mp4"
import Scroll from './Scroll';


const Top2 = () => {
    function display(){
        
        const para=document.querySelector(".para");
        para.classList.toggle("show");
    }
    return(
        <>
        <Scroll/>
        <div className='container-fluid bg-black p-3'>
        <div className='container'>
        <Link to="/" className='btn btn-outline-danger mt-4 '><i class=" fa-solid fa-circle-arrow-left"></i></Link>
        <video className='emma  img-fluid mt-5 rounded' src={atlas} loop controls />
        
        <div className='text-light'>
        <h3>Atlas</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>In a bleak-sounding future, an A.I. soldier has determined that the only way to end war is to end humanity.</p>
        <h6>Category:[Action/fiction] Date:2024/05/24 Duration:[02:00:05] Filesize:322.46 MB</h6>
             <a href="https://loadedfiles.org/1c99b52d9194241f" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Top2;