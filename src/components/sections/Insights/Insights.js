import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Dropdown from "./Dropdown";
import Item from "./Item";
import ProgressChart from "./ProgressChart";
import SparkleProgressbar from "./SparkleProgressbar";

import classes from "./Insights.module.scss";

const Insights = (props) => {
  const data = [];
  const [isDropped, setIsDropped] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedHashtag, setSelectedHashtag] = useState({});

  axios
    .get("insightsData.json")
    .then((response) => {
      let index = 0;
      let item = {};

      // Preparing hashtags object from json data
      // Every hashtag has 6 fields, each one contains one emotion
      response.data.forEach((group) => {
        // Every 6th entry contains last emotion for hashtag
        if (index % 5 === 0 && index !== 0) {
          item.hashtag = group.hashtag;
          item.hashtagPercentage = group.countPercentage;
          item.sentimentScore = group.sentimentScore;
          item.sentimentLabel = group.sentimentLabel;
          item[group.trait] = group.traitPercentage;

          // So we push item to the object
          if (index > 0) {
            data[item.hashtag] = item;
            item = {};
          }
          // On first five indexes only emotion and percetage is relevant
        } else {
          item[group.trait] = group.traitPercentage;
        }
        index++;
      });
    })
    .catch(() => {
      // Second function handles error
      console.log("Error reading data...");
    });

  const toggleDropdownMenuHandler = () => {
    setIsCollapsed((prevIsCollapsed) => {
      return !prevIsCollapsed;
    });
    setIsDropped((prevIsDropped) => {
      return !prevIsDropped;
    });
  };

  const onItemChooseHandler = (itemId) => {
    setSelectedHashtag(data[itemId]);
    toggleDropdownMenuHandler();
  };

  return (
    <Container className={classes[props.className]}>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2 className={classes.heading}>Explore Insights</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Dropdown isDropped={isDropped}>
            {["#AI", "#EV", "#cryptocurrency"].map((itemId) => (
              <Item
                key={itemId}
                isCollapsed={isCollapsed}
                onClick={() => onItemChooseHandler(itemId)}
              >
                {itemId}
              </Item>
            ))}
            <Item onClick={toggleDropdownMenuHandler} isCollapsed={isCollapsed}>
              Select hashtag
            </Item>
          </Dropdown>
        </Col>
      </Row>
      {Object.keys(selectedHashtag).length !== 0 && (
        <Row>
          <Col>
            <ProgressChart
              percentage={selectedHashtag.hashtagPercentage}
              text="% from top hashtags"
            />
          </Col>
          <Col>
            <div className={classes.hastagTitle}>{selectedHashtag.hashtag}</div>
          </Col>
          <Col>
            <ProgressChart
              percentage={selectedHashtag.sentimentScore}
              text={selectedHashtag.sentimentLabel}
              colorScheme={{
                positive: "#16af08",
                neutral: "#99871d",
                negative: "#d60c0c",
              }}
            />
          </Col>
        </Row>
      )}
      {Object.keys(selectedHashtag).length !== 0 && (
        <Row>
          <Col>
            <SparkleProgressbar
              emotion="Openness"
              percentage={selectedHashtag.Openness}
            />
            <SparkleProgressbar
              emotion="Anger"
              color="color2"
              percentage={selectedHashtag.Anger}
            />
            <SparkleProgressbar
              emotion="Depression"
              color="color3"
              percentage={selectedHashtag.Depression}
            />
            <SparkleProgressbar
              emotion="Challenge"
              color="color4"
              percentage={selectedHashtag.Challenge}
            />
            <SparkleProgressbar
              emotion="Curiosity"
              color="color5"
              percentage={selectedHashtag.Curiosity}
            />
            <SparkleProgressbar
              emotion="Excitement"
              color="color6"
              percentage={selectedHashtag.Excitement}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Insights;
