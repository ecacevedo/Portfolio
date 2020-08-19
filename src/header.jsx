import React from "react";
import "./App.scss";
import { Link, animateScroll } from "react-scroll";

export default function header() {
  return (
    <div className="header">
      <div className="header-content">
        <br />
        <h1>
          Estevan Acevedo
          <br />
          Full-stack Web Developer
        </h1>

        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div class="btn-container">
            <a class="elegant" href="#about-me">
              About Me
            </a>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
        <div class="btn-container">
          <a class="elegant" href="#projects">
            Projects
          </a>
        </div>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
        <div class="btn-container">
          <a class="elegant" href="#contact">
            Contact
          </a>
          </div>
          </Link>
      </div>
    </div>
  );
}
