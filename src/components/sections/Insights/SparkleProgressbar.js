// import { keyframes, css } from "styled-components";

import { useState } from "react";
import { useEffect } from "react";
import classes from "./SparkleProgressbar.module.scss";

const SparkleProgressbar = (props) => {
  const [sparkleBarStyle, setSparkleBarStyle] = useState();

  useEffect(() => {
    if(props.percentage) {
      setTimeout(setSparkleBarStyle({width: props.percentage + "%"}), 1000);
    }
  }, [props.percentage]);

  return (
    <div
      className={classes.sparkleProgressbar}
      index="2"
      emotion={props.emotion}
    >
      <div className={`${classes.sparkleBar} ${classes[props.color]}`} style={sparkleBarStyle} >
        <span></span>
      </div>
      <div className={classes.sparkleLabel} style={{left: props.percentage + "%"}}>
        <span></span>
        <div className={classes.perc}>{props.emotion}</div>
      </div>
    </div>
  );
};

export default SparkleProgressbar;
