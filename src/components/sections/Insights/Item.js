import classes from "./Item.module.scss";

const Item = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes.item} ${
        props.isCollapsed ? classes.collapse : null
      }`}
    >
      {props.children}
    </div>
  );
};

export default Item;
