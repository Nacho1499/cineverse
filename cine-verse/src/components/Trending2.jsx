import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import jurassic from "../assets/jurassic.mp4"
import Scroll from './Scroll';


const Trending2 = () => {
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
        <video className='emma  img-fluid mt-5' src={jurassic} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Jurassic World (Dominion)</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on
             a planet they now share with history’s most fearsome creatures.</p>
        <h6>Category:[Action] Date:2022/06/14 Duration:[02:27:01] Filesize:331.13 MB</h6>
             <a href="https://loadedfiles.org/3a02d60c2975eb9e" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Trending2;