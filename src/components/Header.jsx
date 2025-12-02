import React from 'react'
import logo from '../data.js'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-light" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" href="#">
          <img 
            src={logo.logo[0].image} 
            alt="Logo" 
            width="30" 
            height="30" 
            className="d-inline-block align-text-top me-2 rounded-circle" 
          />
          Magnus Technologies Inc.
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* 'ms-auto' pushes links to the right */}
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header