import React from "react";
import "../assets/css/stars.scss";
import Typed from "react-typed";
import ReactImg from "../assets/img/skills/Front-end/react.png";
import VueImg from "../assets/img/skills/Front-end/vue.png";
import NodeImg from "../assets/img/skills/Back-end/node.png";

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, This is Daniel</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Senior Full Stack Developer",
                      "Senior Front End Developer",
                      "Node Back-end Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
              <p className="built-by">I have built this portfolio using React</p>
            </div>
          </div>
        </div>


        <div className="skill-imgs">
          <marquee direction="down" className="img-react" behavior="alternate" height="500">
            <marquee behavior="alternate">
              <img src={ReactImg} alt="React" />
              <p>React</p>
            </marquee>
          </marquee>
          <marquee direction="down" className="img-vue" height="500">
            <marquee>
              <img src={VueImg} alt="Vue" />
              <p>Vue</p>
            </marquee>
          </marquee>
          <marquee direction="up" className="img-ruby" behavior="alternate" height="500" width="50%">
            <marquee behavior="alternate">
              <img src={NodeImg} alt="Node" />
              <p>Node.js</p>
            </marquee>
          </marquee>
        </div>
      </div>
    );
  }
}

export default Intro;
