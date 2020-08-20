import React from "react";
import "./App.scss";
import { Link, animateScroll } from "react-scroll";
import FadeIn from 'react-fade-in';

export default function header() {
  return (
    <div className="header">
      <div className="header-content">
        <br />
        <FadeIn delay={300} transitionDuration={2000}>
        <h1>
            Estevan Acevedo
            </h1>
          
          <h2>
            Full-stack Web Developer
        </h2>
          <br/>

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
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
        <div class="btn-container">
          <a class="elegant" href="#skills">
          &nbsp;&nbsp;&nbsp;Skills &nbsp;&nbsp;&nbsp;
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
          &nbsp;Contact&nbsp;
          </a>
          </div>
          </Link>
          </FadeIn>
      </div>
    </div>
  );
}
