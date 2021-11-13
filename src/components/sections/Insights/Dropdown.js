import classes from "./Dropdown.module.scss";

const Dropdown = (props) => {
  return (
    <div
      className={`${classes.dropdown} ${
        props.isDropped ? classes.dropped : null
      }`}
    >
      {props.children}
    </div>
  );
};

export default Dropdown;
