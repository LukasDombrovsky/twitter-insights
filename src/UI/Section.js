import Container from "react-bootstrap/Container"

import classes from "./Section.module.scss"

const Section = (props) => {
  return (
    <div id={props.id} className="d-flex align-items-center">
      <Container className={classes["section-container"]}>
        {props.children}
      </Container>
    </div>
  );
};

export default Section;
