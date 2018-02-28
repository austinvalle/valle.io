import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={this.props.match.path === '/projects' ? 'SlideIn' : 'SlideOut'}
                >
                    <div className="io-container">
                        <h2>Coming soon...</h2>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Projects;