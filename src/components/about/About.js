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
                    <h2>Coming soon...</h2>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default About;