import React from "react";
import JSImg from "../assets/img/skills/languages/javascript.png";
import TSImg from "../assets/img/skills/languages/typescript.png";
import HTMLImg from "../assets/img/skills/languages/html5.png";
import CSSImg from "../assets/img/skills/languages/css3.png";
import ReactImg from "../assets/img/skills/Front-end/react.png";
import Vue from "../assets/img/skills/Front-end/vue.png";
import Redux from "../assets/img/skills/Front-end/redux.png";
import NextImg from "../assets/img/skills/Front-end/next.png";
import Gatsby from "../assets/img/skills/Front-end/gatsby.png";
import AngularImg from "../assets/img/skills/Front-end/angular.png";
import NgRxImg from "../assets/img/skills/Front-end/ngrx.png";
import NuxtImg from "../assets/img/skills/Front-end/nuxt.png";
import Vuetify from "../assets/img/skills/Front-end/vuetify.png";
import Node from "../assets/img/skills/Back-end/node.png";
import PhpImg from "../assets/img/skills/Back-end/php.png";
import LaravelImg from "../assets/img/skills/Back-end/laravel.png";
import Ruby from "../assets/img/skills/Back-end/ruby.png";
import Rails from "../assets/img/skills/Back-end/rails.png";
import PostgreSQL from "../assets/img/skills/DB/postgresql.png";
import MongodbImg from "../assets/img/skills/DB/mongodb.png";
import MySQL from "../assets/img/skills/DB/mysql.png";
// import { SocialIcon } from "react-social-icons";
import WsuImg from "../assets/img/education/WSU.jpg";

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
                    <div className="about-me pt-4 pt-md-0">
                      <p className="lead">I am experienced Software Engineer with 7+ years of experience. <br />
                        I can provide creative, high-tech solutions to your web/mobile design and programming needs. I have much experience with NFT platform development experience using modern Frameworks. Also, can build a scalable Web Application for you. Your web app will be unique in looking, fast and user friendly.
                        <br /><br />

                        <ul>
                          <li>NFT, Blockchain experience</li>
                          <li>Great overall experience in Web & Mobile app developmentGreat overall experience in Web & Mobile app development</li>
                          <li>Ability to work independently</li>
                          <li>Clean and Commented code</li>
                          <li>Live preview before delivery</li>
                          <li>Good Communication (English)</li>
                        </ul>
                      </p>

                    </div>
                </div>
                <div className="about-resume d-flex">
                  <a href="./assets/resume/Resume.PDF" target="_blank" class="btn btn-warning py-3 px-3 m-auto">Download Resume</a>
                </div>
                
                <div id="education">
                  <h3>Education</h3>
                  <div className="education">
                    <div className="d-flex mb-5">
                      <img src={WsuImg} alt="WSU" className="img-edu"/>
                      <div>
                        <p className="font-weight-bold">Washington State University</p>
                        <p>Master's degree, Computer Software Engineering</p>
                        <p>2014 - 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div id="experience">
                  <h3>Experience</h3>
                  <div className="row">
                    <div className="col-md-3 col-sm-12 period">Jun 2019 - May 2022</div>
                    <div className="col-md-9 col-sm--12 details">
                      <p className="comp">Upwork</p>
                      <p className="title">Senior Frontend Engineer</p>
                      <ul>
                        <li>I have worked for many customers and built Websites.</li>
                      </ul>
                      <p className="tech-stack"><b>Tech Stack: </b> React.JS, React Native, Redux, Next.js, Vue.js, Vuex, Nuxt, Angular 6 - 12, Node, TypeScript, PHP, Laravel</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-12 period">May 2017 - Aug 2020</div>
                    <div className="col-md-9 col-sm--12 details">
                      <p className="comp">Linode</p>
                      <p className="title">Software Engineer</p>
                      <ul>
                        <li>Developed next generation integration platform for internal applications.</li>
                        <li>Maintained existing applications and designed and delivered new applications.</li>
                      </ul>
                      <p className="tech-stack"><b>Tech Stack: </b> React.JS, React Native, Redux, Next.js, Vue.js, Vuex, Nuxt, Angular 6 - 12, Node, TypeScript, PHP, Laravel</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-12 period">Apr 2017 - Jun 2019</div>
                    <div className="col-md-9 col-sm--12 details">
                      <p className="comp">Palador</p>
                      <p className="title">Frontend Engineer</p>
                      <ul>
                        <li>Developed a few Websites using modern JS Frameworks.</li>
                        <li>Maintained existing applications and designed and delivered new applications.</li>
                      </ul>
                      <p className="tech-stack"><b>Tech Stack: </b> React, Vue, Angular, JavaScript Bootstrap, Ajax, jQuery, HTML, and CSS</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-12 period">Jul 2015 - May 2017</div>
                    <div className="col-md-9 col-sm--12 details">
                      <p className="comp">Liaison Technologies</p>
                      <p className="title">Web Developer</p>
                      <ul>
                        <li>Developed next generation integration platform for internal applications.</li>
                        <li>Maintained existing applications and designed and delivered new applications.</li>
                      </ul>
                      <p className="tech-stack"><b>Tech Stack: </b> React, JavaScript, PHP, Laravel, Bootstrap, Ajax, jQuery, HTML, and CSS</p>
                    </div>
                  </div>
                </div>

                <div id="skills">
                  <h3>Skills</h3>
                  <div>
                    <p className="font-weight-bold skill-part ml-5">Programing Languages</p>
                    <div className="row skill  d-flex">
                      <div>
                        <img className="skill-img" src={JSImg} alt="JavaScript"/>
                        <p className="text-center font-weight-bold">JavaScript</p>
                      </div>
                      <div>
                        <img className="skill-img" src={TSImg} alt="TypeScript"/>
                        <p className="text-center font-weight-bold">TypeScript</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Vuetify} alt="PHP"/>
                        <p className="text-center font-weight-bold">PHP</p>
                      </div>
                      <div>
                        <img className="skill-img" src={HTMLImg} alt="HTML 5"/>
                        <p className="text-center font-weight-bold">HTML 5</p>
                      </div>
                      <div>
                        <img className="skill-img" src={CSSImg} alt="CSS"/>
                        <p className="text-center font-weight-bold">CSS 3</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-weight-bold skill-part ml-5">Front-end Skillsets</p>
                    <div className="row skill  d-flex">
                      <div>
                        <img className="skill-img" src={ReactImg} alt="React"/>
                        <p className="text-center font-weight-bold">React</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Redux} alt="Redux"/>
                        <p className="text-center font-weight-bold">Redux</p>
                      </div>
                      <div>
                        <img className="skill-img" src={NextImg} alt="Next"/>
                        <p className="text-center font-weight-bold">Next.js</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Gatsby} alt="Gatsby"/>
                        <p className="text-center font-weight-bold">Gatsby</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Node} alt="Node"/>
                        <p className="text-center font-weight-bold">Node.js</p>
                      </div>
                      <br />
                      <div>
                        <img className="skill-img" src={AngularImg} alt="Angular"/>
                        <p className="text-center font-weight-bold">Angular</p>
                      </div>
                      <div>
                        <img className="skill-img" src={NgRxImg} alt="NgRx"/>
                        <p className="text-center font-weight-bold">NgRx</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Vue} alt="Vue"/>
                        <p className="text-center font-weight-bold">Vue</p>
                      </div>
                      <div>
                        <img className="skill-img" src={NuxtImg} alt="Nuxt"/>
                        <p className="text-center font-weight-bold">Nuxt.js</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Vuetify} alt="Vuetify"/>
                        <p className="text-center font-weight-bold">Vuetify</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-weight-bold skill-part ml-5">Back-end part Skillsets</p>
                    <div className="row skill  d-flex">
                      <div>
                        <img className="skill-img" src={Node} alt="Node"/>
                        <p className="text-center font-weight-bold">Node</p>
                      </div>
                      <div>
                        <img className="skill-img" src={TSImg} alt="TypeScript"/>
                        <p className="text-center font-weight-bold">TypeScript</p>
                      </div>
                      <div>
                        <img className="skill-img" src={PhpImg} alt="PHP"/>
                        <p className="text-center font-weight-bold">PHP</p>
                      </div>
                      <div>
                        <img className="skill-img" src={LaravelImg} alt="Laravel"/>
                        <p className="text-center font-weight-bold">Laravel</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Ruby} alt="Ruby"/>
                        <p className="text-center font-weight-bold">Ruby</p>
                      </div>
                      <div>
                        <img className="skill-img" src={Rails} alt="RoR"/>
                        <p className="text-center font-weight-bold">Ruby on Rails</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-weight-bold skill-part ml-5">Database</p>
                    <div className="row skill  d-flex">
                      <div>
                        <img className="skill-img" src={MySQL} alt="MySQL"/>
                        <p className="text-center font-weight-bold">MySQL</p>
                      </div>
                      <div>
                        <img className="skill-img" src={MongodbImg} alt="MongoDB"/>
                        <p className="text-center font-weight-bold">MongoDB</p>
                      </div>
                      <div>
                        <img className="skill-img" src={PostgreSQL} alt="PostgreSQL"/>
                        <p className="text-center font-weight-bold">PostgreSQL</p>
                      </div>
                    </div>
                  </div>
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
