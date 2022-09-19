import React from "react";
import { ThemeContext } from "../../Context/theme";
import GitHubCalendar from "react-github-calendar"
export const Github = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <GitHubCalendar
          username="imran-khan98"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />
      </div>
    </>
  );
};
