import React from 'react'
import {
    Link
  } from "react-router-dom";
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand navsignature" to="/">Al-Fahim</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blog">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/youtube">Youtube</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <span className="navbar-text icons">
        <a href="https://www.facebook.com/profile.php?id=100048229787569" target="_blank" ><i className="fab fa-facebook text-primary"></i></a>
      <i className="fab fa-twitter text-info"></i>
      <i className="fab fa-youtube text-danger"></i>
      </span>
    </div>
  </div>
</nav>
        </div>
    )
}
