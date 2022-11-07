import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { FaArrowRight } from "react-icons/fa"

import { useNavigate} from 'react-router-dom';



import "./Home.css";

const Home = () => 
{

  const navigate = useNavigate();

  const navigateToTopics = () => {
    
    navigate('/topics');
  };


  return (
    <div className="container">
      <div className="title">
        <h1>This is homepage</h1>

        <img className="title-image" src="./images/title.png" alt="" />
      </div>

      <div className="flex">
        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/react.png" alt="" />
            <Card.Body>
              <div className="quiz-inner">
                <Card.Title>
                  <h4>React</h4>
                </Card.Title>
                <Button className="btn-start reactPractice" variant="primary"  onClick={navigateToTopics} >
                  Start Practice <FaArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/css.png" style={{ width: "150px" }} alt="" />
            <Card.Body>
              <div className="quiz-inner">
              <Card.Title>
                  <h4>CSS</h4>
                </Card.Title>
                <Button className="btn-start" variant="primary" onClick={navigateToTopics}>
                  Start Practice <FaArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/js.png" style={{height:'175px'}} alt="" />
            <Card.Body>
              <div className="quiz-inner">
              <Card.Title>
                  <h4>JavaScript</h4>
                </Card.Title>
                <Button className="btn-start" variant="primary" onClick={navigateToTopics}>
                  Start Practice <FaArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="quiz-card">
          <Card style={{ width: "18rem" }}>
            <img src="./images/git.png" style={{height:'175px'}} alt="" />
            <Card.Body>
              <div className="quiz-inner">
              <Card.Title>
                  <h4>Git</h4>
                </Card.Title>
                <Button className="btn-start" variant="info" onClick={navigateToTopics}>
                  Start Practice <FaArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
