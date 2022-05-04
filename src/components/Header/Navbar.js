import React from "react";


class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark navbar-expand-md"
        data-aos="fade-up"
        data-aos-delay={150}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img id="brandLogo" src="assets/img/logoWhite.svg" />
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs">
                  About us
                  <br />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#OurLocations">
                  Our Locations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#DineIn">
                  Dine In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ContactUs">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex flex-column flex-md-row">

            <button type="button" className="btn" id="signInBtn" data-bs-toggle="modal" data-bs-target="#modalLogin" data-bs-whatever="Log In">
                <i className="fa fa-user" />
                 Sign In
              </button>

              <a
                className="btn"
                role="button"
                id="callUsBtn"
                style={{
                  borderRadius: "20px"
                }}
                href="tel:0000"
              >
                Call Us
              </a>

            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;