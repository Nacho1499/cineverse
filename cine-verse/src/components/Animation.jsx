import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import lego from "../assets/lego.webp";
import wonda from "../assets/wanda.webp";
import mademan from "../assets/madman.webp";
import supermen from "../assets/superman.webp"
import infinite from "../assets/infinite.webp"
import infinite2 from "../assets/infinite2.webp"
import infinite3 from "../assets/infinite3.webp"
import frozen from "../assets/frozen.webp"
import madman from "../assets/madman.mp4"
import Scroll from './Scroll';

const Animation = () => {
    return(
        <>
        <Scroll/>
            <div className='container-fluid bg-black p-3'>
            <video className='emma  img-fluid mt-5 rounded' src={madman} loop muted autoPlay/>
                <div className='container'>
                <div className='container mt-5'>
                    <h4 className='text-light'>Animations <i className="fa-solid fa-video "></i></h4>
                    <hr className='text-danger mb-3' />
                    <div className='trending-list '>

                    <Link to='/animation1' className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={lego} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Lego Avengers</h5>
                                <p className='text-light'>Catigory:[Animation]</p>

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
                    <Link to="/animation2" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={wonda} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>WondLA</h5>
                                <p className='text-light'>Catigory:[Animation]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/animation3" className='text-decoration-none'>
                    <div>
                    <img className='trending-image   mx-auto' src={mademan} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Megamind</h5>
                                <p className='text-light'>Catigory:[Animation]</p>

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
                    <Link to="/animation4" className='text-decoration-none'>
                    <div>
                    <img className='trending-image    mx-auto' src={supermen} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Supermen</h5>
                                <p className='text-light'>Catigory:[Animation]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </Link>
                    
                    </div>
                    
                    
                    
                    
                
                </div>
                
                
                    
                    <div className='trending-list mt-5 '>
                        <Link to="/animation5" className='text-decoration-none'>

                    <div>
                        <img className='trending-image   mx-auto' src={frozen} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Frozen</h5>
                                <p className='text-light'>Catigory:[Animation]</p>

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
                    <Link to="/animation6" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={infinite} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Infinite Earth 1</h5>
                                <p className='text-light'>Catigory[Animation]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/animation7" className='text-decoration-none'>
                    <div>
                    <img className='trending-image   mx-auto' src={infinite2} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Infinite earth 2</h5>
                                <p className='text-light'>Catigory:[Animation]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/animation8" className='text-decoration-none'>
                    <div>
                    <img className='trending-image    mx-auto' src={infinite3} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Infinite Earth 3</h5>
                                <p className='text-light'>Catigory[Animation]</p>

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
                    
                  
                
                
                   
                

            




                
                
                   
                
                <Link to="/" className='btn btn-outline-danger mt-4 mb-4'><i className=" fa-solid fa-circle-arrow-left"></i></Link>
            </div>

                </div>




                

            
            <Footer/>
        </>
    )
}
export default Animation;