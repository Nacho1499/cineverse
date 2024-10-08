import React from 'react';
import kong from "../assets/kong.webp";
import gaurd from "../assets/gaurd.webp";
import killer from "../assets/killer.webp";
import tweeter from "../assets/tweeter.webp";


const Related = () => {
    return(
        <>
            <div className='container-fluid bg-black  text-black p-3'>
                <div className='container mt-5 mb-5'>
                    <h4 className='text-light'>Related</h4>
                    <hr className='text-danger' />
                    <div className='trending-list '>

                    <div>
                        <img className='trending-image   mx-auto' src={kong} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Godzilla x Kong</h5>
                                <p className='text-light'>Catigory[Action]</p>
                                <a href="https://loadedfiles.org/4ceb7434c0e2149c" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

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
                        <img className='trending-image   mx-auto' src={killer} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>The killer</h5>
                                <p className='text-light'>Catigory[Action]</p>
                                <a href="https://loadedfiles.org/f5610d3a1221ae5b" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

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
                    <img className='trending-image   mx-auto' src={tweeter} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Twisters</h5>
                                <p className='text-light'>Catigory[Action]</p>
                                <a href="https://loadedfiles.org/8ba7452a0a81893c" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

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
                    <img className='trending-image    mx-auto' src={gaurd} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Old Guard</h5>
                                <p className='text-light'>Catigory[Action]</p>
                                <a href="https://loadedfiles.org/7d68ce3abf3671c0" className='btn btn-danger'>Download <i className="fa-solid fa-download"></i></a>

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

                </div>

            </div>
        </>
    )
}
export default Related;