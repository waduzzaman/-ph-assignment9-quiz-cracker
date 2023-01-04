import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReactQuiz = ( { data } ) =>
{

    const practice = useLoaderData();

    return (
        <div className='container mt-5 p-5'>

        <h2 className='text-start'> JavaScript Questions:</h2>
            {
                <div className='col-md-4 p-4 mt-2 ms-4 container'>
                    <ol className='p-3'> { practice.data.questions.map( question => <li className='my-2, py-4 text-start'>{ question.options.map( option =>
                        <h5>{ option }</h5> ) }</li> ) }</ol>
                </div>

            }

        </div>
    );
};

export default ReactQuiz;