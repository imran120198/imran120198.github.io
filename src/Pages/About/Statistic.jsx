import React from "react";
import "./Statistic.css";
import { ThemeContext } from "../../Context/theme"

export const Statistic = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={"section " + themename}>
        <h2 className="section__title different">Statistics</h2>
        <div className="statsection">
        <img theme={themename} src="https://github-readme-streak-stats.herokuapp.com/?user=imran120198&" alt=""/>
        </div>
      </div>
    </>
  );
};
