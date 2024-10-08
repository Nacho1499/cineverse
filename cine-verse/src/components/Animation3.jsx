import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import madman from "../assets/madman.mp4"
import Scroll from './Scroll';


const Animation3 = () => {
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
        <video className='emma  img-fluid mt-5' src={madman} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Megaminf vs The Doom Sydicate</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Megamind’s former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends to stop his 
            former evil teammates from launching Metro City to the Moon.</p>
        <h6>Category:[Animation] Date:2024/01/03 Duration:[01:42:44] Filesize:307.32 MB</h6>
            <a href="https://loadedfiles.org/cfce5170fdbdd422" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Animation3;