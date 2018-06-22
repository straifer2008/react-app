import React, {Component} from 'react';
import './Main.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

class Main extends Component {
    render() {
        return <ReactCSSTransitionGroup
          className='animatedWrapper Main'
          transitionName='anim'
          transitionAppear
          transitionAppearTimeout={this.props.animationTime}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className='Main_carusel-wrapper'>
            <Carousel
              className='Main_carousel'
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              interval={15000}
              dynamicHeight
              emulateTouch
              autoPlay
              infiniteLoop
                >
              <div className='Main_carousel_slide'>
                <div className='Main_carousel_slide_content'>
                  <h1 className='Main_title'>Main title - 1slide</h1>
                </div>
              </div>
              <div className='Main_carousel_slide Main_carousel_slide-2'>
                <div className='Main_carousel_slide_content'>
                  <h1 className='Main_title'>Main title - 2slide</h1>
                </div>
              </div>
              <div className='Main_carousel_slide Main_carousel_slide-3'>
                <div className='Main_carousel_slide_content'>
                  <h1 className='Main_title'>Main title - 3slide</h1>
                </div>
              </div>
              <div className='Main_carousel_slide Main_carousel_slide-4'>
                <div className='Main_carousel_slide_content'>
                  <h1 className='Main_title'>Main title - 4slide</h1>
                </div>
              </div>
            </Carousel>
          </div>
        </ReactCSSTransitionGroup>
    }
}

Main.propTypes = {
    animationTime: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    animationTime: state.routerAnimationTimeReducer.animationTime
});
export default connect(mapStateToProps)(Main);
