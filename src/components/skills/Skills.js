import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={this.props.match.path === '/skills' ? 'SlideIn' : 'SlideOut'}
                >
                    <h1>Skills page</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Skills;