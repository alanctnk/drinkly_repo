
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-fawn">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="drink logo" height="30" />
            DRINKLY
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link className="nav-link" to="/drinks">Drinks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favorites</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
