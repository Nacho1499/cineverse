import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import supermen from "../assets/superman.mp4"
import Scroll from './Scroll';


const Animation4 = () => {
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
        <video className='emma  img-fluid mt-5  rounded' src={supermen} loop controls/>
        
        <div className='text-light mt-3'>
        <h3>Reign Of The Supermen</h3>
        <h5 onClick={display}>Description <i class="fa-solid fa-arrow-right"></i></h5>
        <p className='para'>In the wake of The Death of Superman, the world is still mourning the loss of the Man of Steel following his fatal battle with the monster Doomsday. However, no sooner as his body been laid to rest than do four new bearers of the Superman shield come forward to take on the mantle. The Last Son of Krypton, Superboy, Steel, and the Cyborg Superman all attempt to fill the vacuum left by the world’s greatest champion. Meanwhile, Superman’s death has also signaled to the universe that Earth is vulnerable.
             Can these new Supermen and the rest of the heroes prove them wrong?</p>
        <h6>Category:[Animation] Date:2019/01/18 Runtime:01:27:08</h6>
            <a href="https://loadedfiles.org/a34194b2c9cbfcb2~i" className='btn btn-danger mt-3 mb-3'>Download <i class="fa-solid fa-download"></i></a>
        </div>
        

        </div>
        </div>




            <Footer/>
        </>
    )
}
export default Animation4;