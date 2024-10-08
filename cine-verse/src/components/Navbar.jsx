import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#"><h3 >Cine<span className='text-danger'>Verse</span></h3></a>
    <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end bg-black" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <div className="offcanvas-title" id="offcanvasNavbarLabel"><h3 className='text-light' >Cine <span className='text-danger'>Verse</span></h3></div>
        <button type="button" className="btn-close bg-danger" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <hr className='text-light' />
        <ul className="navbar-nav  mx-auto">
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
        <Link to="/update" className='btn btn-danger mt-1'>Updates <i class="fa-solid fa-bell"></i></Link>
        
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;