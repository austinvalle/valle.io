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
                    <h1>Projects page</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Projects;