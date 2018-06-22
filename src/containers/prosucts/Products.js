import React, {Component} from 'react';
import './Products.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SitemapRight from "../../components/sitemapRight/SitemapRight";
import SitemapWrap from "../../components/sitemapWrap/SitemapWrap";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSitemap: false
        }
    }

    openSidemap = () => {
        this.setState({
            showSitemap: true
        })
    };

    hideSitemap = (event) => {
        if (this.state.showSitemap && event.target.className === 'Products') {
            this.setState({
                showSitemap: false
            })
        }
    };
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
            <div
                className='Products'
                onClick={this.hideSitemap}
            >
              <h1>Products</h1>
              <SitemapRight
                  hide={this.state.showSitemap}
                  onClick={this.openSidemap}
              />
              <SitemapWrap
                  show={this.state.showSitemap}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
    }
}

Products.propTypes = {
    animationTime: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    animationTime: state.routerAnimationTimeReducer.animationTime
});
export default connect(mapStateToProps)(Products);
