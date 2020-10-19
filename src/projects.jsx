import React from "react";
import DiningDecider from "./images/DiningDecider.png";
import VirtualButterflyDays from "./images/virtualButterflyDays.png";
import YummyDish from "./images/YummyDish.png";
import ExchangeZero from "./images/ExchangeZero.png";

export default function projects() {
  return (
    <div className="projects-background" id="projects">
      <div className="projects-title">
        <h1>Selected Projects</h1>
      </div>
      <div className="projects">
        <a
          className="individual-project"
          href="https://virtual-butterfly-days.herokuapp.com/"
        >
          <h2 className="project-headers">Virtual Butterfly Days</h2>
          <img className="project-image" src={VirtualButterflyDays} />
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

        <br />

        <a
          className="individual-project"
          href="https://pages.git.generalassemb.ly/estevanacevedo/DiningDecider/"
        >
          <h2 className="project-headers">Dining Decider</h2>
          <img className="project-image" src={DiningDecider} />
        </a>
      </div>
    </div>
  );
}
