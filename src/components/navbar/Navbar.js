import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import Logo from"../asserts/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "black",
        }}
      >
        <div className="container-fluid">
        <img
                  src={Logo}
                  className="blackpic"
                  alt=""
                  
                />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="spans">☰</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto "
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  Wedo
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/Service" className=" nav-link active">
                  Service
                </Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Strategy
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/BS" className="dropdown-item">
                      Business Strategy
                    </Link>
                  </li>
                  <li>
                    <Link to="/Marketingstrategy" className="dropdown-item">
                      Marketing Strategy
                    </Link>
                  </li>

                  <li>
                    <Link to="/Operationalstrategy" className="dropdown-item">
                      Operational Strategy
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item mx-3">
                <Link
                  to="/Clients"
                  className="nav-link active"
                  aria-current="page"
                >
                  Clients
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  to="/Firstpage"
                  className=" nav-link active"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
