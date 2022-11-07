import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {

    const allTopics=useLoaderData();
    return (
        <div>
            <h2>This is Topics page {allTopics.length} </h2>
        </div>
    );
};

export default Topics;