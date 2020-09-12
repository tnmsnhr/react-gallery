import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <div> 
            <nav class="navbar navbar-expand-lg navbar-dark primary-color">
                <NavLink class="navbar-brand" to="#"><span className="logo">G.</span></NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <NavLink class="nav-link" to="#">Gallery <span class="sr-only">(current)</span></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="#">Features</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="#">Pricing</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link disabled" to="#">Disabled</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;