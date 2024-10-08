import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Scroll from "./Scroll"

const About = () => {
    return(
        <>
        <Scroll/>
            <div className='container-fluid bg-black'>
                <div className='container text-light p-3'>
                <h3 className='mt-4' >Cine<span className='text-danger'>Verse</span></h3>
                <hr className='text-danger' />
                    <p className='mt-4'>Cine-Verse is a feature-rich movie app designed to enhance the film-watching experience for users. It offers a comprehensive movie database with detailed information on films, including plot summaries, cast and crew, and production details. Users can access both expert and community reviews, view ratings, and explore curated lists and recommendations tailored to their preferences. The app includes tools for creating personalized watchlists, tracking viewing history, and setting reminders for upcoming releases. Additionally, Cine-Verse keeps users updated with the latest industry news and trends, and provides interactive features like forums and discussion boards for engaging with other film enthusiasts. With its advanced search capabilities and intuitive interface, Cine-Verse aims to be a one-stop 
                        destination for discovering, discussing, and enjoying movies.
                        <br />
                        <br />
                        <br />
                        The app keeps users informed about the latest developments in the film industry, including upcoming releases, film festival highlights, and major news events. This section ensures that users stay up-to-date with current trends and cinematic happenings.
                        </p>
                        <br />
                         <p>In essence, Cine-Verse aims to be a comprehensive and interactive platform for movie lovers, combining detailed film information, personalized recommendations, and community engagement to enrich the film-watching experience.




</p>        

                         
                         <Link to="/" className='btn btn-outline-danger mt-4 mb-4'><i className=" fa-solid fa-circle-arrow-left"></i></Link>
                </div>

            </div>
            
            <Footer/>
        </>
    )
}
export default About;