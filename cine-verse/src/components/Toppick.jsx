import React from 'react';
import { Link } from 'react-router-dom';
import installer from "../assets/installer.jpg";
import ironman from "../assets/ironman.jpg";
import morbius from "../assets/morbius.jpg";
import atlas from "../assets/atlas.webp";

const Toppick = () => {
    return(
        <>
            <div className='container-fluid bg-black  text-black p-3'>
                <div className='container mt-5 mb-4'>
                    <h4 className='text-light'>Top pick <i className="fa-solid fa-video "></i></h4>
                    <hr className='text-danger' />
                    <div className='trending-list '>
                        <Link to="/top1" className='text-decoration-none'>

                    <div>
                        <img className='trending-image   mx-auto' src={morbius} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Morbius</h5>
                                <p className='text-light'>Catigory:[Action]</p>

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
                    <Link to="/top2" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={atlas} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Atlas</h5>
                                <p className='text-light'>Catigory:[Action/fiction]</p>

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
                    <Link to="/top3" className='text-decoration-none'>
                    <div>
                    <img className='trending-image   mx-auto' src={ironman} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Garfield</h5>
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
                    <Link to="/top4" className='text-decoration-none'>
                    <div>
                    <img className='trending-image    mx-auto' src={installer} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Interstaller</h5>
                                <p className='text-light'>Catigory:[Action/Fiction]</p>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </Link>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Toppick;