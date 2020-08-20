import React from "react";
import MyPicture from "./images/IMG_3003.jpg";
import "./App.scss";
import ResumePdf from "./images/Resume.pdf";

export default function resume() {
  return (
    <section id="about-me">
      <div className="resume-background">
        <div className="resume-title">
          <h1>About Me</h1>
        </div>
        <div className="Resume">
          <div className="my-info">
            <img className="my-picture" src={MyPicture} />

            <p>
              I am an analytical Software Engineer driven by coming to creative
              solutions to novel problems. <br /> I learn ambitiously and I am
              endlessly curious.
              <br /> I am team-oriented, thrive on direct communication and
              consistent feedback.
            </p>

            <div>
              <div>
                <b>General Assembly</b>
                <div>Software Emersive Certificate - 2020</div>
              </div>
              <br />
              <div>
                <b>Indeed</b>
                <div>Client Success Specialist 2019-2020</div>
              </div>
              <br />
              <div>
                <b>University of Arizona</b>
                <div>Philosophy, BA</div>
                <div>Molecular & Cellular Biology, BS </div>
              </div>
            </div><br/><br/><br/>
            <div class="btn-container">
            <a class="elegant" href={ResumePdf} target="_blank">
                View Resume
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
