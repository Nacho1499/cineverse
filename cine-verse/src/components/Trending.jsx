import React from 'react';
import { Link } from 'react-router-dom';
import jurassic from "../assets/jurassic.jpg";
import flash from "../assets/flash.jpg";
import quiet from "../assets/quiet.jpg";
import furiosa from "../assets/furiosa.jpg"
import ape from "../assets/ape.mp4"
import Scroll from './Scroll';



const Trending = () => {
    return(
        <>
        <Scroll/>
            <div className='container-fluid bg-black  text-black p-3'>
                <div className='container mt-5'>
                    <h4 className='text-light'>Trending <i className="fa-solid fa-video "></i></h4>
                    <hr className='text-danger' />
                    <div className='trending-list '>

                   <Link to="/trending1" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={flash} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>The flash</h5>
                                <p className='text-light'>Catigory[Action]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>

                    </Link>
                    <Link  to="/trending2" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={jurassic} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Jurassic World</h5>
                                <p className='text-light'>Catigory[Action]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link  to="/trending3" className='text-decoration-none'>
                    <div>
                    <img className='trending-image   mx-auto' src={quiet} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>A Quiet Place</h5>
                                <p className='text-light'>Catigory[Action/horror]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link  to="/trending4" className='text-decoration-none'>
                    <div>
                    <img className='trending-image    mx-auto' src={furiosa} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Furiosa</h5>
                                <p className='text-light'>Catigory[Action]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </Link>
                    
                    </div>
                    
                    <Link to="/trending" className='btn btn-outline-danger mt-4 '>View Full List <i className="fa-solid fa-arrow-right"></i></Link>
                    
                    <video className='emma  img-fluid mt-5 rounded' src={ape} loop muted autoPlay/>
                </div>
                
                   
                

            </div>
        </>
    )
}
export default Trending;