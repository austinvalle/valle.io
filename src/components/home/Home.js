import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={this.props.match.path === '/' ? 'SlideIn' : 'SlideOut'}
                >
                    <div className="io-container">
                        <div className="io-home-grid">
                            <div className="io-home-picture">
                                <img className="io-home-img" src={process.env.PUBLIC_URL + '/images/portfolio.jpg'} alt=""/>
                            </div>
                            <div className="io-home-intro">
                                <h2>Hey! I'm Austin...</h2>
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
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Home;