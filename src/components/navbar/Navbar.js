import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a> 
                {/* BUTON DE COLLAPSE NAVBAR */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className="nav-link" >Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;