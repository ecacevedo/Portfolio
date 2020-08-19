import React from "react";
import DiningDecider from "./images/DiningDecider.png";
import GenerativeUnsplash from "./images/GenerativeUnsplash.png";
import YummyDish from "./images/YummyDish.png";
import ExchangeZero from "./images/ExchangeZero.png";

export default function projects() {
  return (
    <div className="projects-background" id="projects">
      
      <div className="projects-title">Projects</div>
      <div className="projects">
        <a
          className="individual-project"
          href="https://pages.git.generalassemb.ly/estevanacevedo/DiningDecider/">
          <h2 className="project-headers">Dining Decider</h2>
          <img className="project-image" src={DiningDecider} />
        </a>
        
        <br />
        <a
          className="individual-project"
          href="https://generativeunsplash.netlify.app"
        >
          <h2 className="project-headers">Generative Unsplash</h2>
          <img className="project-image" src={GenerativeUnsplash} />
        </a>
        <br />
        <a className="individual-project" href="http://tan-wrench.surge.sh/">
          <h2 className="project-headers">Yummy Dish</h2>
          <img className="project-image" src={YummyDish} />
        </a>
        <br />
        <a
          className="individual-project"
          href="https://exchangezero.netlify.app"
        >
          <h2 className="project-headers">Exchange Zero</h2>
          <img className="project-image" src={ExchangeZero} />
        </a>
        </div>
    </div>
  );
}
