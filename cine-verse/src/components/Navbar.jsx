import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#"><h3 >Cine<span className='text-danger'>Verse</span></h3></a>
    <button class="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav mx-auto">
      <li className="nav-item">
            <Link className="nav-link text-light" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-light">About Us</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-light"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu bg-black">
              <li><Link to="/trending" className="dropdown-item text-light" >Action</Link></li>
              <li><Link to='/animation' className="dropdown-item text-light">Animations</Link></li>
              
              
            </ul>
          </li>
      </ul>
      <Link to="/update" className='btn btn-danger mt-1 mb-2'>Updates <i class="fa-solid fa-bell"></i></Link>
        
    </div>
    
  </div>
</nav>
    
        </>
    )
}
export default Navbar;