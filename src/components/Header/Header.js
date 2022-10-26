import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav>
 
            <Link to='/'>Home</Link>
            <Link to='/Topics'>Topics</Link>
            <Link to='/Statistics'>Statistics</Link>
            <Link to='/Blog'>Blog</Link>

        </nav>
    );
};

export default Header;