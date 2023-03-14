import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import ReactImg from "../assets/img/skills/Front-end/react.png";
import GatsbyImg from "../assets/img/skills/Front-end/gatsby.png";
import NextImg from "../assets/img/skills/Front-end/next.png";
import NodeImg from "../assets/img/skills/Back-end/node.png";
import VueImg from "../assets/img/skills/Front-end/vue.png";
import VuetifyImg from "../assets/img/skills/Front-end/vuetify.png";
import NuxtImg from "../assets/img/skills/Front-end/nuxt.png";
import RubyImg from "../assets/img/skills/Back-end/ruby.png";
import RailsImg from "../assets/img/skills/Back-end/rails.png";
import BootstrapImg from "../assets/img/skills/Style/bootstrap.png";
import NetlifyImg from "../assets/img/skills/other/netlify.png";
import AwsImg from "../assets/img/skills/other/aws.png";
import StyledImg from "../assets/img/skills/Style/styled-component.png";
import PostgreImg from "../assets/img/skills/DB/postgresql.png";
import JSImg from "../assets/img/skills/languages/javascript.png";
import TSImg from "../assets/img/skills/languages/typescript.png";


import spoke1 from "../assets/img/projects/0.png";
import spoke2 from "../assets/img/projects/1.png";
import spoke3 from "../assets/img/projects/2.png";
import goodeggs1 from "../assets/img/projects/3.png";
import goodeggs2 from "../assets/img/projects/4.png";
import goodeggs3 from "../assets/img/projects/5.png";
import v1 from "../assets/img/projects/v1.png";
import v2 from "../assets/img/projects/v2.png";
import v3 from "../assets/img/projects/v3.png";
import v4 from "../assets/img/projects/v4.png";
import eq1 from "../assets/img/projects/eq1.png";
import eq2 from "../assets/img/projects/eq2.png";
import eq3 from "../assets/img/projects/eq3.png";
import eq4 from "../assets/img/projects/eq4.png";
import eq5 from "../assets/img/projects/eq5.png";
import eq6 from "../assets/img/projects/eq6.png";
import r1 from "../assets/img/projects/r1.png";
import r2 from "../assets/img/projects/r2.png";
import r3 from "../assets/img/projects/r3.png";
import r4 from "../assets/img/projects/r4.png";
import r5 from "../assets/img/projects/r5.png";
import f1 from "../assets/img/projects/f1.png";
import f2 from "../assets/img/projects/f2.png";
import f3 from "../assets/img/projects/f3.png";
import f4 from "../assets/img/projects/f4.png";
import i1 from "../assets/img/projects/i1.png";
import i2 from "../assets/img/projects/i2.png";
import i3 from "../assets/img/projects/i3.png";
import i4 from "../assets/img/projects/i4.png";
import m1 from "../assets/img/projects/m1.png";
import m2 from "../assets/img/projects/m2.png";
import m3 from "../assets/img/projects/m3.png";
import m4 from "../assets/img/projects/m4.png";
import max1 from "../assets/img/projects/max1.png";
import max2 from "../assets/img/projects/max2.png";
import max3 from "../assets/img/projects/max3.png";
import max4 from "../assets/img/projects/max4.png";
import max5 from "../assets/img/projects/max5.png";
import max6 from "../assets/img/projects/max6.png";
import p1 from "../assets/img/projects/p1.png";
import p2 from "../assets/img/projects/p2.png";
import p3 from "../assets/img/projects/p3.png";
import p4 from "../assets/img/projects/p4.png";
import p5 from "../assets/img/projects/p5.png";

const cardData = [
  {images: [p1, p2, p3, p4, p5],
    url:"https://www.pvp.com/",
    title: "PVP",
    stack: "React, Node, JavaScript, TypeScript, Bootstrap, AWS",
    description: "PvP is a universal gamer social community and the ultimate gaming hub. PvP is a non-toxic, positive gamer community where gamers connect! Find gamer friends, showcase your highlights and stats, and play 100+ titles across all gaming platforms.",
    lightbox: "gallery-pvp",
    role: "Software Engineer",
    duration: "1 year and 6 months",
    teamSize: "15 - 20"
  },
  {images: [goodeggs1, goodeggs2, goodeggs3],
    url:"https://www.goodeggs.com/",
    title: "Goodeggs",
    stack: "React, Gatsby, Node, Bootstrap, AWS",
    description: "Good Eggs is an online grocery delivery service. I built the Front End from scratch and developed reusable components. Also did Mobile responsive and Pixel-perfect with the design.",
    lightbox: "gallery-emarine",
    role: "Front-end Engineer",
    duration: "1 year",
    teamSize: "10 - 15"
  },
  {images: [v1, v2, v3, v4],
    url:"https://takearecess.com/",
    title: "Takearecess",
    stack: "Vue, Nuxt, Vuetify, Node, Netlify",
    description: "Takearecess is an online e-commerce platform. I built this project from scratch and did Pixel-perfect and Mobile responsively.",
    lightbox: "gallery-tmarine",
    role: "Front-end Engineer",
    duration: "8 months",
    teamSize: "10 - 15"
  },
  {images: [m1, m2, m3, m4],
    url:"https://mishky.com/",
    title: "Mishky",
    stack: "React, Bootstrap, Styled-components, AWS",
    description: "Oline Mishky Jewelry Shopping platform. built the Front end part using React and Styled-components. did mobile responsive and pixel-perfect with the design",
    lightbox: "gallery-mmarine",
    role: "Front-end Engineer",
    duration: "6 months",
    teamSize: "10 - 15"
  },
  {images: [spoke1, spoke2, spoke3],
    url:"https://spoke-london.com/",
    title: "Spoke-london",
    stack: "React, Next, Bootstrap, Node, AWS",
    description: "Online Menswear e-commerce platform. I built the Front end from scratch using React, Next, and Bootstrap 5. I did Mobile responsive and pixel-perfect with the design.",
    lightbox: "gallery-smarine",
    role: "Front-end Engineer",
    duration: "1 year and 8 months",
    teamSize: "10 - 15"
  },
  {images: [max1, max2, max3, max4, max5, max6],
    url:"https://www.maxar.com/",
    title: "MAXAR",
    stack: "Vue, Vuetify, Bootstrap, Ruby, Ruby on Rails, PostgreSQL",
    description: "Earth Intelligence & Space Infrastructure. convert Figma design to Vue Front-end. Implement new features, API Integration, and did Mobile responsive.",
    lightbox: "gallery-maxmarine",
    role: "Full-stack Engineer",
    duration: "1 year",
    teamSize: "10 - 15",
    feedback: "“Mark is great. We've worked with him for a long time through multiple versions and he's been excellent throughout. Would not hesitate to recommend and will rehire for next project.”",
    customer: "Brandon P."
  },
  {images: [r1, r2, r3, r4, r5],
    url:"https://ridewithgps.com/",
    title: "Ridewithgps",
    stack: "React, Bootstrap, JavaScript, Ruby, Ruby on Rails",
    description: "Worked as Full-stack Developer. Built the RESTful API and API guidence. Build the Front end UI using React.",
    lightbox: "gallery-rmarine",
    role: "Software Engineer",
    duration: "2 years and 4 months",
    teamSize: "10 - 15",
    feedback: "“Mark is a very skilled and professional engineer. He understood the requirement perfectly and recommended the most suitable solution. He is easy to work with and very cooperative, I would highly recommend him to anyone.”",
    customer: "Henrik N."
  },
  {images: [eq1, eq2, eq3, eq4, eq5, eq6],
    url:"https://www.equinox.com/",
    title: "Equinox",
    stack: "React, Next, Bootstrap, Node",
    description: "Online Fitness Clubs, Luxury gym, Workout clubs. Convert Figma design to React & Next from scratch. Focus to build Mobile responsive and build reusable components",
    lightbox: "gallery-vmarine",
    role: "Front-end Engineer",
    duration: "10 months",
    teamSize: "10 - 15",
    feedback: "“Great to work with! Very responsive and had the task completed in much less time than I anticipated.”",
    customer: "Mathew V."
  },
  {images: [f1, f2, f3, f4],
    url:"https://www.fixdrepair.com/",
    title: "Fixdrepair",
    stack: "Vue, Nuxt, Vuetify, Bootstrap, Node, AWS",
    description: "Fixd Repair needed a site overhaul, which included a new custom responsive design, using vue router for quick page switching, and a speedy load time.",
    lightbox: "gallery-fmarine",
    role: "Front-end Engineer",
    duration: "1 year",
    teamSize: "10 - 15",
    feedback: "“I have worked with Mark numerous time now. I can always count on him. And I'll be calling on him again. No better recommendation than that.”",
    customer: "Chales D."
  },
  {images: [i1, i2, i3, i4],
    url:"https://www.itinari.com/",
    title: "Itinari",
    stack: "Vue, Vuetify, JavaScript, Bootstrap, Node, Netlify",
    description: "Built online travel platform from scratch by using Vuejs & TypeScript. Implemented new features and did API Integration",
    lightbox: "gallery-imarine",
    role: "Front-end Engineer",
    duration: "1 year",
    teamSize: "10 - 15",
    feedback: "“Mark was A+++. Will 100% use him again. His work and attention to detail was amazing. Well worth every penny.”",
    customer: "William B."
  },
];

function Portfolio() {
  // const [compNum, setCompNum] = useState(4);

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
              { cardData.slice(0).map((card)=>(
                <div className="row work-block">
                  <div className="col-md-4 col-sm-12 period">
                    <a href={card.images[0]} data-lightbox={card.lightbox}>
                      <div className="work-img">
                        <img src={card.images[0]} alt="" className="img-fluid" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-8 col-sm--12 details">
                    <div className="work-content">
                      <a href={card.url} target="_blank" rel="noopener noreferrer">
                        <h3 className="text-primary">{card.title}</h3>
                      </a>
                      <p>{card.description}</p>
                      <div className="row">
                        <div className="col-md-4 col-sm-12 work-category">
                          <p><b>My Role</b></p>
                          <p>{card.role}</p>
                        </div>
                        <div className="col-md-4 col-sm-12 work-category">
                          <p><b>Duration</b></p>
                          <p>{card.duration}</p>
                        </div>
                        <div className="col-md-4 col-sm-12 work-category">
                          <p><b>Team size</b></p>
                          <p>{card.teamSize}</p>
                        </div>
                      </div>
                      <div>
                        <span className="w-ctegory d-flex">
                          {card.stack.split(",").map(s=>{
                            const stack = s.trim();
                            const src = (stack === "React") ? ReactImg : 
                                        (stack === "Gatsby") ? GatsbyImg :
                                        (stack === "Next") ? NextImg :
                                        (stack === "JavaScript") ? JSImg :
                                        (stack === "TypeScript") ? TSImg :
                                        (stack === "Node") ? NodeImg :
                                        (stack === "Vue") ? VueImg :
                                        (stack === "Vuetify") ? VuetifyImg :
                                        (stack === "Nuxt") ? NuxtImg :
                                        (stack === "Ruby") ? RubyImg :
                                        (stack === "Ruby on Rails") ? RailsImg :
                                        (stack === "Bootstrap") ? BootstrapImg :
                                        (stack === "Netlify") ? NetlifyImg :
                                        (stack === "AWS") ? AwsImg :
                                        (stack === "PostgreSQL") ? PostgreImg :
                                        (stack === "Styled-components") ? StyledImg :
                                        null;
                            return (
                              <div className="d-block"><img src={src} alt={src} className="ctegory-skills" /> <p className="text-center text-dark font-weight-bold">{stack}</p></div>
                            )
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  {card.images.length > 1 && (
                    card.images.slice(1).map(img => (
                      img ? 
                      <a
                        href={img}
                        data-lightbox={card.lightbox}
                        style={{ display: "none" }}
                      /> : null
                    ))
                  )}
                </div>
              ))}
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Testimonials</h3>
              <div className="line-mf"></div>
            </div>
          </div>

          <Carousel className="w-100">
            <Carousel.Item interval={2000}>
              <Carousel.Caption>
                <h3>Convert design to React components</h3>
                <p>It was fantastic to work with Mark. He's got a great attitude and his work is always great. I will continue to work with him on other projects and would suggest you hire him too!</p>
                <p className="testimonial-name">Philipe H.</p>
                <p>Grand Rapids, MI</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Carousel.Caption>
                <h3>Looking for JavaScript Expert</h3>
                <p>Mark was an absolute pleasure to work with. Any challenge he faced he was able to come up with optimally performant solutions. I would say he has expert level experience when it comes to JavaScript, dealing with clients, soft skills and the ingenuity needed to get work done. When the time comes, we will be going back to Mark for more of his quality craftsmanship.</p>
                <p className="testimonial-name">Michael P.</p>
                <p>Grand Rapids, MI</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Carousel.Caption>
                <h3>Sr React Guru</h3>
                <p>Mark was a good React developer and I enjoyed working with him. His speed and communication were great and his React skills were good. Over the life of this project Mark developed Web UI, learning the Ionic Framework and then applying his new knowledge to the project. <br /> I enjoyed working with Elvin and will likely have more work for him in the future.</p>
                <p className="testimonial-name">Nicholas R.</p>
                <p>Grand Rapids, MI</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval= {2000}>
              <Carousel.Caption>
                <h3>Build Front End UI for Takearecess</h3>
                <p>Mark is a rockstar when it comes to programming. I gave him a near impossible task of sorting through 8 months of another developers code and get it up and running again. Not only did he get a new instance up running but he made it better. He improved the speed of the searching and integrated API into the project. <br /> He is like a swiss army knife in that he can do React, Vue, JavaScript and much more. I can't wait to bring other projects to him as I know they will be a success and get done on time. Thanks for all the great work, your awesome!</p>
                <p className="testimonial-name">Leonard S.</p>
                <p>Grand Rapids, MI</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
