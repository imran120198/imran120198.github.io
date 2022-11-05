import React from "react";
import "./Projects.css";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/99397606/193451795-90098315-5af7-45b0-b054-8f89649c1135.png"
                  alt="CricInfo"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Milaap - Clone</h2>
              <p>
                Milaap is an online crowdfunding platform that enables anyone
                across India to raise funds for healthcare, education, sports,
                disaster relief and other personal causes, with great ease. We
                build this project in 7 days with my 3 other members.
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <SiChakraui />
                <IoLogoJavascript />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://capable-taiyaki-eb17f0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns btns--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shubhfire/sordid-authority-4005"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns btns--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/99397606/187070444-972d0fca-7017-4d93-900f-9c87966335b0.png"
                  alt="Animoto"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Animoto Clone</h2>
              <p>
                Animoto is a cloud-based video creation service that produces
                video from photos, video clips, and music into video slideshows,
                and customized web-based presentations.
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://phenomenal-toffee-fb7d80.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns btns--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imran120198/cheerful-notebook-6741"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns btns--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/99397606/167252184-32ed3441-3659-477c-bdd5-0a8f0287ebf5.png"
                  alt="Farfetch"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Farfetch - Clone</h2>
              <p>
                Clone of the international Online Shopping Store. We have tried
                to build the perfect clone of the website. It's a individual
                project completed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://incandescent-bublanina-ea2aaf.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns btns--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imran120198/Farfetch-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns btns--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/99397606/161417863-556b9988-cbef-400a-bb15-5eefe0b8d74c.png"
                  alt="Onnbike"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>OnnBikes Clone</h2>
              <p>
                This project is a clone of Onnbike.com Onnbike is the most
                affordacle bike renral company in India. We build this project
                in 7 days with my 5 other members.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://loquacious-biscochitos-48b0b9.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imran120198/ONNbikes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Projects };
