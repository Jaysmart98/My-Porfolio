import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div id='bodycontainer'>
      <nav id='Header' class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
        <h2 id='Port' class=" navbar-brand">Joshua Ogunbunmi</h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link class="nav-link" to={"/about"}>About</Link>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu">
                <li><Link class="nav-link" to={"/projects"}>Projects</Link></li>
                <li><a class="dropdown-item" href="#">Testimonials</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to={"/projects"}>Projects</Link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Testimonials</a>
            </li>

            <li class="nav-item">
            <Link class="nav-link" to={"/contact"}>Contact</Link>
            </li>
          </ul>

          <form class="d-flex" role="">
            <button id='DCV' class="btn btn-outline-success" type="submit">Download CV</button>
          </form>
          
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
