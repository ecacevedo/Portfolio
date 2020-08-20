import React from "react";
import LinkedinLogo from "./images/linkedin.png";
import GithubLogo from "./images/github.png";


import "./App.scss";

export default function contact() {
  return (
    <div id="contact">
      <h1>Contact me</h1>
      <p className="contact-blurb">
        I live in Mesa, Arizona. Feel free to reach out, I'm currently open to
        job opportunities.
      </p>

      <div className="contact-grid">
      <div class="btn-container">
          <a class="elegant" href="mailto:estevancacevedo@gmail.com">
            Email me 
          </a>
        </div>
        
        <div class="btn-container">
          <a class="elegant" href="tel:+1-480-735-4197">
            Call me
          </a>
        </div>
       
        
      </div>
      <div className="footer-logos">
        <a href="https://www.linkedin.com/in/estevan-acevedo/">
          <img className="contact-logo" src={LinkedinLogo} />
        </a>
        <a href="https://github.com/ecacevedo">
          <img className="contact-logo" src={GithubLogo} />
        </a>
      </div>
    </div>
  );
}
