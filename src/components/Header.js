import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../UI/Button";
import SectionWithBgImage from "../UI/SectionWithBgImage";

import classes from "./Header.module.scss";

import bgImage from "../img/cover.jpg";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <SectionWithBgImage
      bgImage={bgImage}
      className={classes.header}
    >
      <Container className={classes["mg-7"]}>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className={`${classes.heading} display-2`}>
              Twitter Insights
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <p>
              What people on Twitter think different topics? See it using this app!
              <br />
              This app downloads data related to tech topic, finds out most used
              hashtags, downloads data realted to these hashtags and sends them to cognitive APIs
              for analysis. Results are visualized right below.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <HashLink to="/#Insights">
              <Button
                as="div"
                variant="primary"
                href="#insights"
                type="button"
                size="xl"
              >
                <span>Get insights!</span>
              </Button>
            </HashLink>
          </Col>
        </Row>
      </Container>
    </SectionWithBgImage>
  );
};

export default Header;
