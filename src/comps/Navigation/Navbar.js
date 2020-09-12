import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <div className='container'>
            <ul className='navbar'>
                <li><NavLink to='/' exact>Shots</NavLink></li>
                <li><NavLink to='/liked-shots'>Liked Shots</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;