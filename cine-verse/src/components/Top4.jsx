import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ape from "../assets/ape.mp4"
import Scroll from './Scroll';


const Top4 = () => {
    function display(){
        
        const para=document.querySelector(".para");
        para.classList.toggle("show");
    }
    return(
        <>
        <Scroll/>
        <div className='container-fluid bg-black p-3'>
        <div className='container'>
        <Link to="/" className='btn btn-outline-danger mt-4'><i class=" fa-solid fa-circle-arrow-left"></i></Link>
        <video className='emma  img-fluid mt-5 rounded' src={ape} loop controls />
        
        <div className='text-light'>
        <h3>Interstellar</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.</p>
        <h6>Category:[action/fiction] Date:2022/06/28 Duration:[02:49:04] Filesize:333.40 MB </h6>
             <a href="https://loadedfiles.org/59cc286aeaa53a43" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Top4;