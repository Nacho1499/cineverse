import React from 'react';
import { Link } from 'react-router-dom';
import last from "../assets/last.webp";
import island from "../assets/island.webp";
import bel from "../assets/bel.webp";
import bebel from "../assets/bebel.webp";


const Series = () => {
    return(
        <>
            <div className='container-fluid bg-black  text-black p-3'>
                <div className='container mt-3 mb-5'>
                    <h4 className='text-light'>Tv Series</h4>
                    <hr className='text-danger' />
                    <div className='trending-list '>

                    <div>
                        <img className='trending-image   mx-auto' src={last} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Last Year Single</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='trending-image   mx-auto' src={bel} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Bel Air</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>


                            </div>
                        </div>
                    </div>
                    <div>
                    <img className='trending-image   mx-auto' src={bebel} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Rebel ridge</h5>
                                <p className='text-light'>Catigory[Action]</p>
                                <a href="https://loadedfiles.org/5e65f08862a5a716" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    <div>
                    <img className='trending-image    mx-auto' src={island} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Billionaire Island</h5>
                                <p className='text-light'>[Season 1] episode 1</p>
                                <a href="https://loadedfiles.org/eb7fb8cf07eec8df" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

                            </div>
                            <div>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-danger fa-solid fa-star"></i>
                            <i className="text-light fa-solid fa-star"></i>

                            </div>
                        </div>

                    </div>
                    </div>
                    <Link to="/serieslist" className='btn btn-outline-danger mt-5 '>View Full List <i className="fa-solid fa-arrow-right"></i></Link>
                </div>

            </div>
        </>
    )
}
export default Series;