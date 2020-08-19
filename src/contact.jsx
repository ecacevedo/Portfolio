import React from 'react'
import LinkedinLogo from "./images/linkedin.png"
import GithubLogo from "./images/github.png"
import GmailLogo from "./images/gmail.png"
import PhoneLogo from "./images/contact.png"
import "./App.scss";


export default function contact() {
  return (
    <div id="contact">
      <h1>Contact me</h1>
      <p>I live in Mesa, Arizona. Feel free to reach out, I'm currently open to job opportunities.</p>
      <div className="contact-grid">
      <a href="mailto:estevancacevedo@gmail.com"><img className="contact-logo" src={GmailLogo} />estevancacevedo@gmail.com</a>
      <p><img className="contact-logo" src={PhoneLogo} />(480) 735-4197</p>
      <br />
      
      <a href="https://www.linkedin.com/in/estevan-acevedo/" >
      <img className="contact-logo" src={LinkedinLogo} />
      </a>
      <a href="https://github.com/ecacevedo" >
          <img className="contact-logo" src={GithubLogo} /></a>
          </div>
    </div>
  )
}
