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
                    <div style={{textAlign: "center"}}>
                      <h1>Regular heading 1</h1>
                      <h2>Different header 2</h2>
                      <h3>Can't think of anything to do</h3>
                      <h4>Here is some <code>font-family: "stuff here"</code></h4>
                      <p>Some <i>italics</i> and some <b>bold</b> text</p>
                      <br/>
                    </div>
                    <div className="io-container">
                        <div className="io-container-item">
                            <div style={{fontWeight: 300}}>
                                Vestibulum magna mi, scelerisque eu mi in, euismod varius ipsum. Nullam hendrerit odio nec aliquet rhoncus. Phasellus scelerisque dolor erat, ut cursus ex interdum tincidunt. Sed elementum metus justo, eget mattis leo tempor eget. Praesent porta tempus libero vel rhoncus. Nullam et turpis a metus accumsan tempus. Quisque sollicitudin purus sed justo finibus lobortis. Donec sit amet vestibulum elit.
                            </div>
                            <br/>
                            <br/>
                            <div style={{fontWeight: 400}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem sed sapien tincidunt bibendum at et nunc. Mauris et quam eu ante vulputate ultrices. Nam vitae sapien vitae sem aliquam elementum eget in nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus erat a risus ultrices convallis ac fringilla tellus. Phasellus lorem tellus, tempus et nisi id, feugiat elementum leo. Donec efficitur dui a diam maximus eleifend.
                            </div>
                            <br/>
                            <br/>
                            <div style={{fontWeight: 500}}>
                                Aenean commodo malesuada est, eget interdum dolor feugiat eget. Aenean est enim, finibus ut imperdiet ut, vehicula at metus. Sed vulputate eleifend pretium. Vestibulum lacinia tortor sit amet lectus sollicitudin, quis congue sem aliquam. Sed tincidunt eros tortor, ut hendrerit lorem venenatis ut. Ut vestibulum accumsan ex, at aliquam nisl imperdiet vitae. Donec a odio dapibus, ultricies nibh sed, auctor lorem. Ut aliquet malesuada neque, at rutrum purus. Cras nec efficitur ligula, nec sollicitudin quam. Quisque non quam nunc. Phasellus a sem tincidunt, aliquam nisl in, commodo nulla. Nam laoreet, dui sit amet porttitor facilisis, tellus mauris tincidunt nunc, non vehicula sem nunc sed est.
                            </div>
                            <br/>
                            <br/>
                            <div style={{fontWeight: 700}}>
                                Vestibulum magna mi, scelerisque eu mi in, euismod varius ipsum. Nullam hendrerit odio nec aliquet rhoncus. Phasellus scelerisque dolor erat, ut cursus ex interdum tincidunt. Sed elementum metus justo, eget mattis leo tempor eget. Praesent porta tempus libero vel rhoncus. Nullam et turpis a metus accumsan tempus. Quisque sollicitudin purus sed justo finibus lobortis. Donec sit amet vestibulum elit.
                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Home;