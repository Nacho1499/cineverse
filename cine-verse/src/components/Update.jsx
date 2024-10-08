import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Scroll from "./Scroll"

const Update = () => {
    return(
        <>
        <Scroll/>
        <div className='container-fluid'>
            <div className='container mt-5 mb-5'>
                <h4>Available Updates</h4>
                <hr className='text-danger'/>
                <Link to="/" className='btn btn-outline-danger mt-4'><i class=" fa-solid fa-circle-arrow-left"></i></Link>
                <div className='mt-4 text-light bg-dark p-3 rounded shadow'>
                    <h6 className='mb-3 text-danger'>Welcome mesage</h6>
                    <p>🎬 Welcome to Cine-Verse! 🎬 Dive into a universe of movies and discover your next favorite film. From hidden gems to blockbuster hits, we’ve got something for every movie lover. Enjoy the show! 🍿🎥</p>
                </div>
                <div className='mt-4 text-light bg-dark p-3 rounded shadow'>
                <h6 className='mb-3 text-danger'>Regular Updates</h6>
                    <p>To keep your movie experience fresh and exciting, regular updates are essential! We’re constantly working on new features, bug fixes, and fresh content to enhance your viewing pleasure.</p>
                </div>
                
            </div>

        </div>
        


        <Footer/>
        </>
    )
}
export default Update;