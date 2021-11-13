import Container from "react-bootstrap/Container";

import classes from "./Section.module.scss";

const Section = (props) => {
  const style = { backgroundColor: props.backgroundColor };

  return (
    <div id={props.id} className="d-flex align-items-center" style={style}>
      <Container
        className={`${classes["section-container"]} ${
          props["narrow-width"] ? "container-750" : ""
        } ${props["mid-width"] ? "container-1000" : ""} `}
        fluid={props.fluid || null}
      >
        {props.children}
      </Container>
    </div>
  );
};

export default Section;
