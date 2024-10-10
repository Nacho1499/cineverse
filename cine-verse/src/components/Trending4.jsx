import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import furiosa from "../assets/furiosa.mp4"
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
        <video className='emma  img-fluid mt-5 rounded' src={furiosa} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Furiosa</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.</p>
        <h6>Category:[Action] Date;2024/06/24 Duration:[02:28:11] Filesize:466.88 MB</h6>
             <a href="https://loadedfiles.org/27fe88c74dfe3729" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending1;