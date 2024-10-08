import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from './Scroll';
import Footer from "../components/Footer";
import jurassic from "../assets/jurassic.jpg";
import flash from "../assets/flash.jpg";
import quiet from "../assets/quiet.jpg";
import marks from "../assets/marks.webp";
import badboy from "../assets/badboy.jpg";
import furiosa from "../assets/furiosa.jpg";
import quiet1 from "../assets/quiet1.webp";
import ape1 from "../assets/ape1.jpeg";
import theme from "../assets/theme.mp4";


const Trendinglist = () => {
    return(
        <>
        <Scroll/>

            <div className='container-fluid bg-black p-3'>
            <video className='emma  img-fluid mt-5 rounded' src={theme} loop muted autoPlay/>
                <div className='container'>
                <div className='container mt-5'>
                    <h4 className='text-light'>Trending <i class="fa-solid fa-video "></i></h4>
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
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>


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
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>


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
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>

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
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </Link>
                    
                    </div>
                    
                    
                    
                
                </div>
                
                
                    
                    <div className='trending-list mt-5 '>


                     <Link  to="/trending5" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={marks} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>The Marksman</h5>
                                <p className='text-light'>Catigory[Action]</p>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link  to="/trending6" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={badboy} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Badboys</h5>
                                <p className='text-light'>Catigory[Action]</p>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link  to="/trending7" className='text-decoration-none'>
                    <div>
                    <img className='trending-image   mx-auto' src={quiet1} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>A Quiet Place 1</h5>
                                <p className='text-light'>Catigory[Action/horror]</p>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link  to="/trending8" className='text-decoration-none'>
                    <div>
                    <img className='trending-image    mx-auto' src={ape1} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Kingdom of ..</h5>
                                <p className='text-light'>Catigory[Action]</p>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </Link>
                    
                    </div>
                    
                  
                
                
                   
                

            




                
                
                   
                
                <Link to="/" className='btn btn-outline-danger mt-4 mb-3'><i class=" fa-solid fa-circle-arrow-left"></i></Link>
            </div>

                </div>




                
                
                <Footer/>

            
        </>
    )
}
export default Trendinglist;