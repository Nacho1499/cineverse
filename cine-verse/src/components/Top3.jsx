import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import gar from "../assets/gar.mp4"
import Scroll from './Scroll';


const Top3 = () => {
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
        <video className='emma  img-fluid mt-5 rounded' src={gar} loop controls />
        
        <div className='text-light'>
        <h3>Garfield The Movie</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>After Garfield’s unexpected reunion with his long-lost father, ragged alley cat Vic, he and his canine friend Odie are forced from their perfectly pampered
             lives to join Vic on a risky heist.</p>
        <h6>Category:[Animation] Date:2024/06/09 Duration:[01:42:44] Filesize:257 MB</h6>
             <a href="https://loadedfiles.org/372ffb932030f22c" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Top3;