import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './About.css';

class About extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={this.props.match.path === '/about' ? 'SlideIn' : 'SlideOut'}
            >
                <div className="io-container">
                    <h1 style={{fontWeight: 500}}>Hey I'm Austin...</h1>
                    <div className="io-container-item">
                        <img className="io-about-img" src={process.env.PUBLIC_URL + '/images/desk-shot.jpg'} alt="Desk Shot" />
                    </div>
                    <div className="io-about-body">
                        <p>
                        I'm a full-stack developer currently working at Progressive Insurance. 
                        In my current role I lead a team of developers, building solutions for the Claims platform. 
                        These solutions range from web applications to support internal loss reporting, to exposing APIs 
                        to partners such as Uber and Safelite. These applications are primarily built with Angular, .NET Web API, 
                        and SQL Server/DB2. 
                        </p>
                        <p>
                        In my free time, I am passionate about learning new programming languages, frameworks, and emerging 
                        technologies. My attention is currently set on Go, Serverless architectures, and React. 
                        </p>
                        <p>
                        I'm always looking for new projects to contribute to, so shoot me a <a className="io-link" href="mailto:austinvalle@gmail.com"rel="noopener noreferrer">message</a>! 
                        </p>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default About;