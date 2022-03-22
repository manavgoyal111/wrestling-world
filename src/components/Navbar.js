import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Wrestling World
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nutrition">
                  Nutrition
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documentaries">
                  Documentaries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/legends">
                  Legends
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hypevideos">
                  Hype Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/matches">
                  Matches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/offseasonresources">
                  Offseason Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technicaldvds">
                  Technical Dvds
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/openvideos">
                  Open Videos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
