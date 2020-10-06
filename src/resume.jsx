import React from "react";
import MyPicture from "./images/IMG_3003.jpg";
import "./App.scss";
import ResumePdf1 from "./images/resume.pdf";

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
            I am an analytical and creative Software Engineer driven by coming to innovative solutions to novel problems.<br/> I learn ambitiously and am endlessly curious. I am coachable, adaptable and thrive on direct communication and consistent feedback.<br/>  On a team I believe a calm and lighthearted approach allows space for efficient collaboration and effective results.<br/>  I strive to  be a leader and give back via mentorship.<br/>  Software development has been fulfilling as a means to practice each of these characteristics in life.
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
              <div className="uofa-div">
                <b>University of Arizona</b>
                <div>Philosophy, BA</div>
                <div>Molecular & Cellular Biology, BS </div>
              </div>
            </div>
            <div class="btn-container">
            <a class="elegant" href={ResumePdf1} target="_blank">
                View Resume
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
