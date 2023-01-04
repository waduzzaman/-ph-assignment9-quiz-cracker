import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.css';



const Header = () => {
    return (
        <nav>
           
           <div className='d-flex justify-content-center gap-5 my-2 py-3 h3'>
            <div> <Link to='/'>Home</Link></div>
            <div> <Link to='/Topics' >Topics</Link></div>
            <div> <Link to='/Statistics'>Statistics</Link></div>
            <div> <Link to='/React'>React</Link></div>
            <div> <Link to='/JavaScript'>JavaScript</Link></div>
            <div> <Link to='/CSS'>CSS</Link></div>
            <div> <Link to='/Git'>Git</Link></div>
            <div><Link to='/Blog'>Blog</Link></div>
            </div>        
                 
           
        </nav>

    );
};

export default Header;