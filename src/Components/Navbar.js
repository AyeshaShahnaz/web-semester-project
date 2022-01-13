import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <li class="nav-item pe-5" style={{ fontFamily: "Kaushan Script" }}>
          <Link
            activeClassName="menu_active"
            className="navbar-brand ps-3"
            to="/"
          >
            Wear Your Dream
          </Link>
        </li>

        <ul class="navbar-nav mr-auto mt-2">
          <li className="nav-item ps-3 pe-3" style={{ fontFamily: "Poppins" , color:'#ffffff' }}>
            <Link
              activeClassName="menu_active"
              className="nav-link text-white bg-dark mx-5"
              to="/signUp"
            >
              SignUp
            </Link>
          </li>

          {/* <p class="text-white bg-dark">.text-white</p> */}
          <li class="nav-item pe-3" style={{ fontFamily: "Poppins" }}>
            <Link
              activeClassName="menu_active"
              className="nav-link text-white bg-dark mx-5"
              to="/MyHome"
            >
              Home
            </Link>
          </li>
          <li class="nav-item pe-3" style={{ fontFamily: "Poppins" }}>
            <Link
              activeClassName="menu_active"
              className="nav-link text-white bg-dark mx-5"
              to="/Aboutus"
            >
              Aboutus
            </Link>
          </li>
          <li class="nav-item pe-3" style={{ fontFamily: "Poppins" }}>
            <Link
              activeClassName="menu_active"
              className="nav-link text-white bg-dark mx-5"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li class="nav-item  pe-3" style={{ fontFamily: "Poppins" }}>
            <Link
              activeClassName="menu_active"
              className="nav-link text-white bg-dark mx-5"
              to="/viewuser"
            >
              viewuser
            </Link>
          </li>
          <li class="nav-item pe-3" style={{ fontFamily: "Poppins" }}>
            <Link
              activeClassName="menu_active"
              className="nav-link text-white bg-dark mx-5"
              to="/cart"
            >
              cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
