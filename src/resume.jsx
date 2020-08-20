import React from "react";
import MyPicture from "./images/IMG_3003.jpg";
import "./App.scss";


export default function resume() {
  return (
    <section id="about-me">
    <div className="resume-background">
      <div className="resume-title"><h1>About Me</h1></div>
      <div className="Resume">
        
          <div className="my-info">
            
            <img className="my-picture" src={MyPicture} />
          
          <p>
              I am an analytical Software Engineer driven by coming
              to creative solutions to novel problems. <br /> I learn
              ambitiously and I am endlessly curious.
              <br /> I am team-oriented, thrive on direct communication and
              consistent feedback.
            </p>

            <div className="education-divst">
              <ul className="education-divst-title">
                General Assembly
                <div>Software Emersive Certificate - 2020</div>
              </ul>
              <ul className="education-divst-title">
                Indeed
                <div>Client Success Specialist 2019-2020</div>
              </ul>

              <ul className="education-divst-title">
                University of Arizona
                <div>Philosophy, BA</div>
                <div>Molecular & Cellular Biology, BS </div>
              </ul>
            </div>
          </div>
        
        
      </div>
      </div>
      </section>
  );
}
