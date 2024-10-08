import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import marksman from "../assets/marksman.mp4"
import Scroll from './Scroll';


const Trending5 = () => {
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
        <video className='emma  img-fluid mt-5' src={marksman} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>The Marksman</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get
             him to safety, as they go on the run from the relentless assassins.</p>
        <h6>Category:[Action] Date:2021/04/13 Duration:[01:47:29]
        Filesize:213.21 MB</h6>
             <a href="https://loadedfiles.org/77eeb6069515b9ae" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending5;