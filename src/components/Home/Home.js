import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="title">
        <h1>This is homepage</h1>
        <img className="title-image" src="./images/title.png" alt="" />
      </div>

      <div className="flex">
        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/react.png" alt="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/css.png" style={{ width: "150px" }} alt="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/js.png" alt="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/git.png" alt="" />
            <Card.Body>
              <div>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
