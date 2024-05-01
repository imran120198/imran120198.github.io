import React from "react";
import "./Techstacks.css";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import {
  SiHtml5,
  SiMaterialui,
  SiNetlify,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { SiChakraui } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiPhp } from "react-icons/si";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>

          <div>
            <FaNodeJs />
            <h5>Node JS</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
          <SiPhp />
          <h5>PHP</h5>
          </div>
          <div>
            <SiMysql />
            <h5>My SQL</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <DiGit />
            <h5>Git</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <SiChakraui />
            <h5>Chakra Ui</h5>
          </div>
          <div>
            <FaBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <TbBrandVercel />
            <h5>Vercel</h5>
          </div>
          {/* <div>
            <SiCypress />
            <h5>Cypress</h5>
          </div> */}
        </div>
      </div>
    </>
  );
};
