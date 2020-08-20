import React from 'react'
import "./App.scss";
import JsLogo from "./images/jslogo.png";
import HtmlLogo from "./images/htmllogo.png";
import JsxLogo from "./images/jsxlogo.png";
import CssLogo from "./images/css.png";
import SassLogo from "./images/sass.png";
import BootstrapLogo from "./images/bootstrap.png";
import ReactLogo from "./images/react.png";
import RubyLogo from "./images/ruby.png";
import NodeJsLogo from "./images/nodejs.png";
import RailsLogo from "./images/rails.png";
import ExpressLogo from "./images/express.png";
import MongoDBLogo from "./images/mongodb.png";
import PostgreSQLLogo from "./images/postgresql.png";
import JestLogo from "./images/jest.png";
import HerokuLogo from "./images/heroku.png";
import GithubLogo from "./images/github.png";

export default function skills() {
  return (
    <section id="skills">
    <div>
       <div className="Skills">
          <ul>
            <h1>Skills</h1><br/><br/><br/>

            <div className="skill-box">
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={HtmlLogo} />
                <div>HTML 5</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={JsxLogo} />
                <div>JSX</div>
              </div>
            </div>

            <br />

            <div className="skill-box">
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={CssLogo} />
                <div>CSS 3</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={SassLogo} />
                <div>SASS</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={BootstrapLogo} />
                <div>Bootstrap</div>
              </div>
            </div>
            <br />

            <div className="skill-box">
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={JsLogo} />
                <div>Javascript</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={ReactLogo} />
                <div>React</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={NodeJsLogo} />
                <div>Node</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={RubyLogo} />
                <div>Ruby</div>
              </div>
            </div>
            <br />

            <div className="skill-box">
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={RailsLogo} />
                <div>Ruby On Rails</div>
              </div>
              
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={MongoDBLogo} />
                <div>MongoDB</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={ExpressLogo} />
                <div>Express</div>
              </div>
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={PostgreSQLLogo} />
                <div>PostgreSQL</div>
              </div>
            </div>
            <br />
            <div className="skill-box">
            <div className="skill-logo-box-individual">
              <img className="skill-logo" src={JestLogo} />
              <div>Jest</div>
            </div>
            <div className="skill-logo-box-individual">
              <img className="skill-logo" src={HerokuLogo} />
              <div>Heroku</div>
            </div>
            
              <div className="skill-logo-box-individual">
                <img className="skill-logo" src={GithubLogo} />
                <div>Github</div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      </section>
  )
}
