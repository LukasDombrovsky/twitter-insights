import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "./Dropdown";
import Item from "./Item";
import ProgressChart from "./ProgressChart";
import SparkleProgressbar from "./SparkleProgressbar";
import useHttp from "../../hooks/use-http";
import Button from "../../UI/Button";

import classes from "./Insights.module.scss";

const Insights = (props) => {
  const [data, setData] = useState();
  const [dropdownCollapsed, setDropdownCollapsed] = useState(true);
  const [selectedHashtag, setSelectedHashtag] = useState({});

  const { isLoading, error, sendRequest: getData } = useHttp();

  useEffect(() => {
    const transformData = (dataObj) => {
      let index = 0;
      let item = {};
      let tempDataObj = {};

      // Preparing hashtags object from json data
      // Every hashtag has 6 fields, each one contains one emotion
      dataObj.forEach((group) => {
        // Every 6th entry contains last emotion for hashtag
        if (index % 5 === 0 && index !== 0) {
          item.hashtag = group.hashtag;
          item.hashtagPercentage = group.countPercentage;
          item.sentimentScore = group.sentimentScore;
          item.sentimentLabel = group.sentimentLabel;
          item[group.trait] = group.traitPercentage;

          // So we push item to the object
          // if (index > 0) {
          tempDataObj[item.hashtag] = item;
          item = {};
          // }
          // On first five indexes only emotion and percetage is relevant
        } else {
          item[group.trait] = group.traitPercentage;
        }
        index++;
      });
      setData(tempDataObj);
    };

    getData(
      {
        url: "https://twitter-insights-react-default-rtdb.firebaseio.com/data.json",
      },
      transformData
    );
  }, [getData]);

  const toggleDropdownMenuHandler = () => {
    setDropdownCollapsed((prevState) => {
      return !prevState;
    });
  };

  const onItemChooseHandler = (itemId) => {
    setSelectedHashtag(data[itemId]);
    toggleDropdownMenuHandler();
  };

  let content = data ? (
    <>
      {Object.keys(selectedHashtag).length !== 0 && (
        <Row>
          <Col>
            <ProgressChart
              percentage={selectedHashtag.hashtagPercentage}
              text="% from top hashtags"
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
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
    </>
  ) : (
    ""
  );

  if (error) {
    content = (
      <>
        <h4 style={{ color: "red" }}>
          Sorry. Loading of insights data failed.
        </h4>
        <Button type="button" onClick={getData}>
          Try to download data again
        </Button>
      </>
    );
  }

  if (isLoading) {
    content = "Loading data...";
  }

  return (
    <div className={classes.insights}>
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
          <Dropdown isDropped={!dropdownCollapsed}>
            {["#AI", "#EV", "#cryptocurrency"].map((itemId) => (
              <Item
                key={itemId}
                isCollapsed={dropdownCollapsed}
                onClick={() => {
                  onItemChooseHandler(itemId);
                }}
              >
                {itemId}
              </Item>
            ))}
            <Item
              onClick={toggleDropdownMenuHandler}
              isCollapsed={dropdownCollapsed}
            >
              Select hashtag
            </Item>
          </Dropdown>
        </Col>
      </Row>
      {content}
    </div>
  );
};

export default Insights;
