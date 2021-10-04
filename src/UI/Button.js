import Btn from "react-bootstrap/Button";

import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <Btn
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </Btn>
  );
};

export default Button;
