import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Navigation.css';

const activeLinkStyle = { color: '#907ad6' }

class Navigation extends Component {
    render() {
        return (
            <nav className="io-nav">
              <ul className="io-nav-items" role="navigation">
                <li><NavLink to='/' className="io-nav-brand">valle.io</NavLink></li>
                <li className="io-nav-link"><NavLink to='/about' activeStyle={activeLinkStyle}>About</NavLink></li>
                <li className="io-nav-link"><NavLink to='/projects' activeStyle={activeLinkStyle}>Projects</NavLink></li>
                <li className="io-nav-link" style={{marginRight: "auto"}}><NavLink to='/skills' activeStyle={activeLinkStyle}>Skills</NavLink></li>
                <li>
                  <a target="_blank" href="https://github.com/moosebot" className="io-icon" rel="noopener noreferrer">
                    <i className="io-icon fab fa-github"/>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/austin-valle-9773496a/" className="io-icon" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"/>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/_moosebot" className="io-icon" rel="noopener noreferrer">
                    <i className="fab fa-twitter"/>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UC6G4-Xp-d-geuCGoITlCwZw?view_as=subscriber" className="io-icon" rel="noopener noreferrer">
                    <i className="fab fa-youtube"/>
                  </a>
                </li>
                <li>
                  <a href="mailto:austinvalle@gmail.com" className="io-icon" rel="noopener noreferrer">
                    <i className="fas fa-envelope"/>
                  </a>
                </li>
              </ul>
            </nav>
        )
    }
}

export default Navigation;