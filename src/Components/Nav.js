import React from "react";

function Nav() {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li>
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="link" href="#resume">
              Resume
            </a>
          </li>
          {/* <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li> */}
          <li>
            <a className="link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

     
    </header>
  );
}

export default Nav;
