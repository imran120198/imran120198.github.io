import React from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/99397606?v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am <span className="different">Imran Khan </span>{" "}
                from <span className="different"> Ramgarh Jharkhand</span>.I am
                an Aspiring Full Stack Web Developer who likes learning and
                building things that upgrade my skills.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Volley Ball Enthusiast
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watch Anime
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
