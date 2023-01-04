import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa"
import {useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";

const Home = () =>
{


  const navigate = useNavigate(); 

  const navigateToTopics = () =>
  {
    navigate( '/topics' );
  };

  const navigateToReact = () =>
  {
    navigate( '/react' );
  };

  const navigateToJavaScript = () =>
  {
    navigate( '/javascript' );
  };

  const navigateToCSS = () =>
  {
    navigate( '/css' );
  };

  const navigateToGit = () =>
  {
    navigate( '/git' );
  };



  return (
    
    <div className="container">
      <div className="title ">
        <h1 className="py-3">This is Homepage</h1>
        <img className="title-image" src="./images/title.png" alt="" />
      </div>

      <div className="flex">
        <div className="quiz-card">
          <Card style={ { width: "15rem" } }>
            <img src="./images/react.png" style={ { width: "100px" } } alt="" />
            <Card.Body>
              <div className="quiz-inner">
                <Card.Title>
                  <h5>React</h5>
                </Card.Title>
                <Button className="btn-start reactPractice" variant="info" onClick={ navigateToReact } >
                  Start Practice <FaArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="quiz-card">
          <Card style={ { width: "15rem" } }>
            <img src="./images/js.png" style={ { width: "100px" } } alt="" />
            <Card.Body>
              <div className="quiz-inner">
                <Card.Title>
                  <h5>Java</h5>
                  <h5>Script</h5>
                </Card.Title>
                <Button className="btn-start" variant="info" onClick={ navigateToJavaScript }>
                  Start Practice <FaArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="quiz-card">
          <Card style={ { width: "15rem" } }>
            <img src="./images/css.png" style={ { width: "100px" } } alt="" />
            <Card.Body>
              <div className="quiz-inner">
                <Card.Title>
                  <h5>CSS</h5>
                </Card.Title>
                <Button className="btn-start" variant="info" onClick={ navigateToCSS }>
                  Start Practice <FaArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>      


        <div className="quiz-card">
          <Card style={ { width: "15rem" } }>
            <img src="./images/git.png" style={ { width: "100px" } } alt="" />
            <Card.Body>
              <div className="quiz-inner">
                <Card.Title>
                  <h5>Git</h5>
                </Card.Title>
                <Button className="btn-start" variant="info" onClick={ navigateToGit }>
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
