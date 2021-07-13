import React from "react";
import myImage from "../assets/img/me.png";
import JavaScript from "../assets/img/skills/javascript.png";
import ReactImg from "../assets/img/skills/react.png";
import Vue from "../assets/img/skills/vue.png";
import Redux from "../assets/img/skills/redux.png";
import Gatsby from "../assets/img/skills/gatsby.png";
import Vuetify from "../assets/img/skills/vuetify.png";
import Node from "../assets/img/skills/node.png";
import Ruby from "../assets/img/skills/ruby.png";
import Rails from "../assets/img/skills/rails.png";
import PostgreSQL from "../assets/img/skills/postgresql.png";
import MySQL from "../assets/img/skills/mysql.png";
import { SocialIcon } from "react-social-icons";
import Texas from "../assets/img/education/texas.jpg";
import Tstc from "../assets/img/education/tstc.jpg";

class About extends React.Component {

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                  <div className="title-box-2">
                    <h3 className="title-a">About Me</h3>
                    <div className="line-mf"></div>
                  </div>
                <div className="row">
                  <div className="col-md-6"> 
                    <div className="about-me pt-4 pt-md-0">
                      <p className="lead">This is Mark, a Senior Front End Engineer with 10 years of experience. <br /> The systems I build are flexible, scale-able and future-proof while remaining easy to backup, maintain and update. Perhaps most important - everything I construct is PROFITABLE because all of my processes, including design, are influenced by data and many years of experience optimizing websites and apps to exceed standards. <br /> I am efficient and communicate effectively. I believe in delivering only quality, flexible, maintainable code to my customers.</p>
                    </div>
                  </div>
                  <div className="col-md-6 about-img">
                    <img className="img-fluid rounded b-shadow-a" src={myImage} alt="Abou Me" />
                  </div>
                </div>
                <h3>Education</h3>
                <div className="education">
                  <div className="d-flex mb-5">
                    <img src={Texas} alt="Texas" className="img-edu"/>
                    <div>
                      <p className="font-weight-bold">The University of Texas at Austin</p>
                      <p>Master of Computer Applications - MCA, Computer Software Engineering</p>
                      <p>2005 - 2009</p>
                    </div>
                  </div>
                  <div className="d-flex mb-5">
                    <img src={Tstc} alt="Technical" className="img-edu"/>
                    <div>
                      <p className="font-weight-bold">Texas State Technical College</p>
                      <p>Master's degree, Computer Science</p>
                      <p>2002 - 2005</p>
                    </div>
                  </div>
                </div>
                <h3>Skills</h3>
                <div className="row skill  d-flex justify-content-around">
                  <div>
                    <img className="skill-img" src={ReactImg} alt="React"/>
                    <p className="text-center font-weight-bold">React</p>
                  </div>
                  <div>
                    <img className="skill-img" src={Redux} alt="Redux"/>
                    <p className="text-center font-weight-bold">Redux</p>
                  </div>
                  <div>
                    <img className="skill-img" src={Gatsby} alt="Gatsby"/>
                    <p className="text-center font-weight-bold">Gatsby</p>
                  </div>
                  <div>
                    <img className="skill-img" src={Vue} alt="Vue"/>
                    <p className="text-center font-weight-bold">Vue</p>
                  </div>
                  <div>
                    <img className="skill-img" src={Vuetify} alt="Vuetify"/>
                    <p className="text-center font-weight-bold">Vuetify</p>
                  </div>
                  <div>
                    <img className="skill-img" src={JavaScript} alt="JavaScript"/>
                    <p className="text-center font-weight-bold">JavaScript</p>
                  </div>
                  <div>
                    <img className="skill-img" src={Node} alt="Node"/>
                    <p className="text-center font-weight-bold">Node.js</p>
                  </div>
                  <div>
                    <img className="skill-img" src={Ruby} alt="Ruby"/>
                    <p className="text-center font-weight-bold">Ruby</p>
                  </div>
                  <div>
                    <img className="skill-img" src={Rails} alt="RoR"/>
                    <p className="text-center font-weight-bold">Ruby on Rails</p>
                  </div>
                  <div>
                    <img className="skill-img" src={PostgreSQL} alt="PostgreSQL"/>
                    <p className="text-center font-weight-bold">PostgreSQL</p>
                  </div>
                  <div>
                    <img className="skill-img" src={MySQL} alt="MySQL"/>
                    <p className="text-center font-weight-bold">MySQL</p>
                  </div>
                </div>
                <h3>Links</h3>
                <div className="about-links d-flex">
                  <SocialIcon url="https://www.linkedin.com/in/mark-miller-4b8b481aa/" target="_blank"/>
                  <SocialIcon url="https://twitter.com/MarkMiler4" target="_blank" />
                  <SocialIcon url="https://github.com/pryysm" target="_blank" />
                  <SocialIcon url="mailto:ard312712@gmail.com" target="_blank" />
                </div>
                <div className="about-resume">
                  <a href="../assets/resume/Resume.PDF" target="_blank" class="btn btn-warning py-3 px-3">Download Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
