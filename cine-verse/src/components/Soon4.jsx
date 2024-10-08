import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import venom from "../assets/venom.mp4"
import Scroll from './Scroll';


const Soon4 = () => {
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
        <video className='emma  img-fluid mt-5' src={venom} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Venom 3</h3>
        <h5 onClick={display}></h5>
        <p className='para'></p>
             <a href="" className='btn btn-danger mt-3 mb-3'>coming soon<i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Soon4;