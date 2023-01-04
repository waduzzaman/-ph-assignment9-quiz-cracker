import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";




const Topics = () =>
{

    const navigate = useNavigate();

    const navigateToReact = () =>
    {
        navigate( '/react' );
    };



    const quizTopics = useLoaderData();

    return (
        <div>

            { quizTopics.data.map( options =>
                <div className='col-md-3 p-4 mt-5'>
                    <div className='container border border-primary'>
                        <div className='row m-3 py-2'>
                            <div> <h2 className=''> { options.name }</h2></div>
                            <div><img className='col-sm-8' src={ options.logo } alt="" srcset="" /></div>
                            <div> <Button className="btn-start reactPractice" variant="info" onClick={ navigateToReact } >
                                Start Practice <FaArrowRight />
                            </Button></div>
                            
                        </div>
                    </div>

                </div>

            ) }

        </div>
    );
};

export default Topics;