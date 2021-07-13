import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import ReactImg from "../assets/img/skills/react.png";
import GatsbyImg from "../assets/img/skills/gatsby.png";
import NextImg from "../assets/img/skills/next.png";
import NodeImg from "../assets/img/skills/node.png";
import VueImg from "../assets/img/skills/vue.png";
import VuetifyImg from "../assets/img/skills/vuetify.png";
import NuxtImg from "../assets/img/skills/nuxt.png";
import RubyImg from "../assets/img/skills/ruby.png";
import RailsImg from "../assets/img/skills/rails.png";
import BootstrapImg from "../assets/img/skills/bootstrap.png";
import NetlifyImg from "../assets/img/skills/netlify.png";
import AwsImg from "../assets/img/skills/aws.png";
import StyledImg from "../assets/img/skills/styled-component.png";
import PostgreImg from "../assets/img/skills/postgresql.png";
import JSImg from "../assets/img/skills/javascript.png";


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
import l1 from "../assets/img/projects/l1.png";
import l2 from "../assets/img/projects/l2.png";
import l3 from "../assets/img/projects/l3.png";
import max1 from "../assets/img/projects/max1.png";
import max2 from "../assets/img/projects/max2.png";
import max3 from "../assets/img/projects/max3.png";
import max4 from "../assets/img/projects/max4.png";
import max5 from "../assets/img/projects/max5.png";
import max6 from "../assets/img/projects/max6.png";

const cardData = [
  {images: [goodeggs1, goodeggs2, goodeggs3],
    url:"https://www.goodeggs.com/",
    title: "Goodeggs.com",
    stack: "React, Gatsby, Node, Bootstrap, AWS",
    description: "Absurdly fresh groceries, delivered. I convert the Figma to UI using React, Redux, Hooks, Node, and Bootstrap.",
    lightbox: "gallery-emarine",
    feedback: "“Mark is a very skilled and professional engineer. He understood the requirement perfectly and recommended the most suitable solution. He is easy to work with and very cooperative, I would highly recommend him to anyone.”",
    customer: "Jordan S."
  },
  {images: [v1, v2, v3, v4],
    url:"https://takearecess.com/",
    title: "Takearecess",
    stack: "Vue, Nuxt, Vuetify, Node, Netlify",
    description: "drinks and powders to help you feel calm cool collected despite the stressful world around you",
    lightbox: "gallery-tmarine",
    feedback : "“Mark is a rockstar when it comes to programming. I gave him a near impossible task of sorting through 8 months of another developers code and get it up and running again. Not only did he get a new instance up running but he made it better. He improved the speed of the searching and integrated API into the project.”",
    customer: "Leonard S."
  },
  {images: [m1, m2, m3, m4],
    url:"https://mishky.com/",
    title: "Mishky",
    stack: "React, Bootstrap, Styled-components, AWS",
    description: "Oline Mishky Jewelry Shopping platform. built the Front end part using React and Styled-components. did mobile responsive and pixel-perfect with the design",
    lightbox: "gallery-mmarine",
    feedback: "“It was fantastic to work with Mark. He's got a great attitude and his work is always great. I will continue to work with him on other projects and would suggest you hire him too!”",
    customer: "Philips H."
  },
  {images: [spoke1, spoke2, spoke3],
    url:"https://spoke-london.com/",
    title: "Spoke-london",
    stack: "React, Next, Bootstrap, Node, AWS",
    description: "Online Menswear e-commerce platform. I built the Front end from scratch using React, Next, and Bootstrap 5. I did Mobile responsive and pixel-perfect with the design.",
    lightbox: "gallery-smarine",
    feedback:"“Best experience I have had. Extremely high quality work, highly knowledgeable, and very fast results given the assignment. Will work with again.”",
    customer: "Andrew T."
  },
  {images: [max1, max2, max3, max4, max5, max6],
    url:"https://www.maxar.com/",
    title: "MAXAR",
    stack: "Vue, Vuetify, Bootstrap, Ruby, Ruby on Rails, PostgreSQL",
    description: "Earth Intelligence & Space Infrastructure. convert Figma design to Vue Front-end. Implement new features, API Integration, and did Mobile responsive.",
    lightbox: "gallery-maxmarine",
    feedback: "“Mark is great. We've worked with him for a long time through multiple versions and he's been excellent throughout. Would not hesitate to recommend and will rehire for next project.”",
    customer: "Brandon P."
  },
  {images: [r1, r2, r3, r4, r5],
    url:"https://ridewithgps.com/",
    title: "Ridewithgps",
    stack: "React, Bootstrap, JavaScript, Ruby, Ruby on Rails",
    description: "Worked as Full-stack Developer. Built the RESTful API and API guidence. Build the Front end UI using React.",
    lightbox: "gallery-rmarine",
    feedback: "“Mark is a very skilled and professional engineer. He understood the requirement perfectly and recommended the most suitable solution. He is easy to work with and very cooperative, I would highly recommend him to anyone.”",
    customer: "Henrik N."
  },
  {images: [eq1, eq2, eq3, eq4, eq5, eq6],
    url:"https://www.equinox.com/",
    title: "Equinox",
    stack: "React, Next, Bootstrap, Node",
    description: "Online Fitness Clubs, Luxury gym, Workout clubs. Convert Figma design to React & Next from scratch. Focus to build Mobile responsive and build reusable components",
    lightbox: "gallery-vmarine",
    feedback: "“Great to work with! Very responsive and had the task completed in much less time than I anticipated.”",
    customer: "Mathew V."
  },
  {images: [f1, f2, f3, f4],
    url:"https://www.fixdrepair.com/",
    title: "Fixdrepair",
    stack: "Vue, Nuxt, Vuetify, Bootstrap, Node, AWS",
    description: "Fixd Repair needed a site overhaul, which included a new custom responsive design, using vue router for quick page switching, and a speedy load time.",
    lightbox: "gallery-fmarine",
    feedback: "“I have worked with Mark numerous time now. I can always count on him. And I'll be calling on him again. No better recommendation than that.”",
    customer: "Chales D."
  },
  {images: [i1, i2, i3, i4],
    url:"https://www.itinari.com/",
    title: "Itinari",
    stack: "Vue, Vuetify, JavaScript, Bootstrap, Node, Netlify",
    description: "Built online travel platform from scratch by using Vuejs & TypeScript. Implemented new features and did API Integration",
    lightbox: "gallery-imarine",
    feedback: "“Mark was A+++. Will 100% use him again. His work and attention to detail was amazing. Well worth every penny.”",
    customer: "William B."
  },
  {images: [l1, l2, l3],
    url:"https://www.landis.com/",
    title: "Landis",
    stack: "Vue, Nuxt, Node, Bootstrap, AWS",
    description: "Add new features and convert some figma design to Front End UI",
    lightbox: "gallery-lmarine",
    feedback: "“Mark was a pleasure to work with. In addition to being highly skilled, Igor adhered to deadlines and was highly communicative through the entire project.”",
    customer: "Ryan G."
  },
];

function Portfolio() {
  const [compNum, setCompNum] = useState(4);

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <div className="row">
              { cardData.slice(0, compNum).map((card)=>(
                <div className="col-md-6">
                  <div className="work-box">
                    <div className="work-blog">
                      <a href={card.images[0]} data-lightbox={card.lightbox}>
                        <div className="work-img">
                          <img src={card.images[0]} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div style={{ display: "flex" }}>
                          <a href={card.url} className="w-title" target="_blank" rel="noopener noreferrer">{card.title}</a>
                        </div>
                        <a href={card.url} target="_blank" rel="noopener noreferrer">
                          <p>{card.description}</p>
                        </a>
                        <div>
                          <span className="w-ctegory d-flex">
                            {card.stack.split(",").map(s=>{
                              const stack = s.trim();
                              const src = (stack == "React") ? ReactImg : 
                                          (stack == "Gatsby") ? GatsbyImg :
                                          (stack == "Next") ? NextImg :
                                          (stack == "JavaScript") ? JSImg :
                                          (stack == "Node") ? NodeImg :
                                          (stack == "Vue") ? VueImg :
                                          (stack == "Vuetify") ? VuetifyImg :
                                          (stack == "Nuxt") ? NuxtImg :
                                          (stack == "Ruby") ? RubyImg :
                                          (stack == "Ruby on Rails") ? RailsImg :
                                          (stack == "Bootstrap") ? BootstrapImg :
                                          (stack == "Netlify") ? NetlifyImg :
                                          (stack == "AWS") ? AwsImg :
                                          (stack == "PostgreSQL") ? PostgreImg :
                                          (stack == "Styled-components") ? StyledImg :
                                          null;
                              return (
                                <div className="d-block"><img src={src} className="ctegory-skills" /> <p className="text-center">{stack}</p></div>
                              )
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="work-feedback">
                        <div>
                          <span class="fa fa-star checked text-warning"></span>
                          <span class="fa fa-star checked text-warning"></span>
                          <span class="fa fa-star checked text-warning"></span>
                          <span class="fa fa-star checked text-warning"></span>
                          <span class="fa fa-star checked text-warning"></span>
                        </div>
                        <p>{card.feedback}</p>
                        <p className="feedback-customer">{card.customer}</p>
                      </div>
                    </div>
                    {card.images.length > 1 && (
                      card.images.slice(1).map(img => (
                        <a
                          href={img}
                          data-lightbox={card.lightbox}
                          style={{ display: "none" }}
                        />
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {compNum < cardData.length && (
            <div className="col-12 d-flex">
              <button className="m-auto btn-success road-more" onClick={()=>setCompNum(compNum + 4)}>Road More Projects</button>
            </div>
          )}
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
