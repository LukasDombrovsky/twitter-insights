import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={`${classes.footer} d-flex align-items-center`}>
      <Container>
        <Row>
        <Col className="d-flex justify-content-center">
            <h2>Lukas Dombrovsky | 2021</h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <i className="fa fa-phone fa-2x"></i>
            <p>+421-940-063-988</p>
          </Col>
          <Col>
            <i className="fa fa-envelope fa-2x"></i>
            <p>lukas.dombrovsky@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
