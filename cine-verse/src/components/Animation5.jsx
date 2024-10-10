import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import frozen from "../assets/frozen.mp4"
import Scroll from './Scroll';


const Animation5 = () => {
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
        <video className='emma  img-fluid mt-5  rounded' src={frozen} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Frozen</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven in an epic journey to find Anna’s sister Elsa, whose icy powers 
            have trapped the kingdom of Arendelle in eternal winter.</p>
        <h6>Category:[Animation] Date:2024/06/17 Duration:[01:42:13] Filesize:304.54 MB</h6>
            <a href="https://loadedfiles.org/1f7e1897f1a02cce" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Animation5;