import React from 'react'
import logo from '../data.js'

function Header() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
          MagnusPro
        </a>
      </div>
    </nav>
  )
}

export default Header
