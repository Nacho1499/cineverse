import React from 'react';
import { Link } from 'react-router-dom';
import sonic from "../assets/sonic.jpg";
import v from "../assets/v.jpg";
import dead from "../assets/dead.jpg";
import mofasa from "../assets/mofasa.jpg";
import flashshot from "../assets/wonder.mp4"

const Soon = () => {
    return(
        <>
            <div className='container-fluid bg-black  text-black p-3'>
                <div className='container mt-3 mb-2'>
                    <h4 className='text-light'>Coming soon <i className="fa-solid fa-video-slash"></i></h4>
                    <hr className='text-danger' />
                    <div className='trending-list '>
                      <Link to="/soon1" className='text-decoration-none'>

                    <div>
                        <img className='trending-image   mx-auto' src={mofasa} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Mufasa</h5>
                                <p className='text-light'>Catigory:[Action]</p>

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
                    <Link to="/soon2" className='text-decoration-none'>
                    <div>
                        <img className='trending-image   mx-auto' src={dead} alt="" />
                        <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Dead X Wolve</h5>
                                <p className='text-light'>Catigory:[Action]</p>

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
                    <Link to="/soon3" className='text-decoration-none'>
                    <div>
                    <img className='trending-image   mx-auto' src={sonic} alt="" />
                    <div className='d-flex justify-content-around mt-3 '>
                            <div>
                                <h5 className='text-light'>Sonic 3</h5>
                                <p className='text-light'>Catigory:[Action]</p>

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
                    <Link to="/soon4" className='text-decoration-none'>
                    <div>
                    <img className='trending-image    mx-auto' src={v} alt="" />
                    <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <h5 className='text-light'>Venom 3</h5>
                                <p className='text-light'>Catigory:[Action]</p>

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
                    <video className='emma   mt-5 mb-4 rounded img-fluid' src={flashshot} loop muted autoPlay/>
                    

                    
                    
                  
                     
<button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Movie Request</button>

<div className="modal fade text-light" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog navbar">
    <div className="modal-content bg-dark">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Movie Request</h1>
        <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-light">
        <form action="" method=''>
          <div className="mb-2">
            <label  className="col-form-label">Username:</label>
            <input name='username' type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-2">
            <label  className="col-form-label">Email:</label>
            <input name='email' type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-2">
            <label  className="col-form-label">Movie Name:</label>
            <input name='movie-name' type="text" className="form-control" id="recipient-name"/>
          </div>
          <p>Your request will be attended to within 24hrs</p>
          
        </form>
      </div>
      <div className="modal-footer mb-2">
        <button type="button" className="btn btn-danger">Send Request</button>
      </div>
    </div>
  </div>
</div>

                </div>


            </div>
        </>
    )
}
export default Soon;