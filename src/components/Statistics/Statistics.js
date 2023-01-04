import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {

    const quizTopics = useLoaderData();

    return (
        <div className='bg-light bg-gradient container'>
            <h1 className='mt-5'> This is Stat Page:</h1>

            <h2 className='mt-5 p-5'>Total Quiz Topic:{quizTopics.data.length}</h2>
            <h2 className='mt-2 p-2'>{quizTopics.data.map(totalquiz=><div>
                <h2>{totalquiz.name}: {totalquiz.total}</h2>
            </div>)}</h2>

            
        </div>
    );
};

export default Statistics;