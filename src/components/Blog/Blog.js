import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () =>
{
    return (

        <div className='container mt-5, p-5'>

            <h2 className='text-start'> Blog:</h2>
             <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the purpose of React Router </Accordion.Header>
                <Accordion.Body className='text-start'>
                    React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>How does context api works</Accordion.Header>
                <Accordion.Body className='text-start'>
                    Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props..
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>What is the function of useRef hook</Accordion.Header>
                <Accordion.Body className='text-start'>
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
                    The returned object will persist for the full lifetime of the component.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


        </div>
       

    );
};

export default Blog;