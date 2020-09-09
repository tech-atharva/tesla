import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <NavLink class="navbar-brand" to="/">Tesla</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <NavLink class="nav-link" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link" activeClassName="active" to="/model_s">Tesla model-S</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link" activeClassName="active" to="/model_x">Tesla model-X</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link" activeClassName="active" to="/model_y">Tesla model-Y</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link" activeClassName="active" to="/about">About</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar;