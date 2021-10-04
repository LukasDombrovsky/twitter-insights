import classes from "./ProgressChart.module.scss";

const ProgressChart = (props) => {
  const rotation = (360 * props.percentage) / 100;
  
  let color = "#2CB4EE";
  if (props.hasOwnProperty("colorScheme") && props.colorScheme.hasOwnProperty(props.text) ) {
    color = props.colorScheme[props.text];
  }

  return (
    <>
      <div
        className={`${classes.progressChart} ${
          props.percentage > 50 ? classes["gt-50"] : ""
        }`}
      >
        <div className={classes.progress}>
          <div
            className={classes["progress-fill"]}
            style={{ transform: "rotate(" + rotation + "deg)" }}
          ></div>
        </div>
        <div className={classes.percents}>
          <div className={classes["percents-wrapper"]}>
            <span style={{"color": color}}>{props.percentage}%</span>
          </div>
        </div>
      </div>
      <div className={classes["percents-text"]} style={{"color": color}}>{props.text}</div>
    </>
  );
};

export default ProgressChart;
