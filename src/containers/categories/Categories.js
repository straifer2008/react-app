import React, {Component} from 'react';
import './Categories.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Categories extends Component {
    render() {
        return (
          <ReactCSSTransitionGroup
            className='animatedWrapper'
            transitionName='anim'
            transitionAppear
            transitionAppearTimeout={this.props.animationTime}
            transitionEnter={false}
            transitionLeave={false}
            >
            <div className='Categories'>
              <h1>Categories</h1>
            </div>
          </ReactCSSTransitionGroup>
        )
    }
}

Categories.propTypes = {
    animationTime: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    animationTime: state.routerAnimationTimeReducer.animationTime
});
export default connect(mapStateToProps)(Categories);
