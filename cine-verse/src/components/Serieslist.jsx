import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from './Scroll';
import Footer from './Footer';
import toku from "../assets/toku.webp";
import die from "../assets/die.webp";
import stages from "../assets/stages.webp";
import miss from "../assets/miss.webp";
import lie from "../assets/lie.webp";
import jet from "../assets/jet.webp";
import mr from "../assets/mr.webp";
import the100 from "../assets/100.webp";
import scalet from "../assets/scalet.mp4";



const Serieslist = () => {
    return(
        
        <>
        <Scroll/>
            <div className='container-fluid bg-black  text-black p-3'>
            <video className='emma  img-fluid mt-5 rounded' src={scalet} loop muted autoPlay/>
                <div className='container mt-5 mb-5'>
                    <h4 className='text-light'>Top Series</h4>
                    <hr className='text-danger' />
                    <div className='trending-list '>

                    <div>
                        <img className='trending-image   mx-auto' src={toku} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Tokunbo</h5>
                                <p className='text-light'>Catigory[Drama]</p>
                                <a href="https://loadedfiles.org/4ba7abc41112e8b5" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='trending-image   mx-auto' src={die} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>How to Die Alone</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    <div>
                    <img className='trending-image   mx-auto' src={stages} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Stags</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="https://loadedfiles.org/6340374a93c92bf0" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    <div>
                    <img className='trending-image    mx-auto' src={miss} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Into The Fire</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="https://loadedfiles.org/a788fb3f7181fe31" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </div>
                    
                    <div className='trending-list mt-5'>

                    <div>
                        <img className='trending-image   mx-auto' src={lie} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Anonymous</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="https://loadedfiles.org/41e1868cfaec692b" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='trending-image   mx-auto' src={jet} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>The Jetty</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="https://loadedfiles.org/12ae296bb35a7c29" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    <div>
                    <img className='trending-image   mx-auto' src={mr} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Mr Inbetween</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="https://loadedfiles.org/9051ddf70fe074da" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    <div>
                    <img className='trending-image    mx-auto' src={the100} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>The 100</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="https://loadedfiles.org/458f2470f274625a" className='btn btn-danger'>Download <i class="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-danger fa-solid fa-star"></i>
                            <i class="text-light fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </div>
                    <Link to="/" className='btn btn-outline-danger mt-5'><i class=" fa-solid fa-circle-arrow-left"></i></Link>


                </div>

            </div>
            <Footer/>
        </>
    )
}
export default Serieslist;