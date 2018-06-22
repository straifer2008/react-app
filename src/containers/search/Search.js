import React, {Component} from 'react';
import './Search.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Container, Row, Col, Input, Card, CardBody, CardTitle, CardText, CardImage} from 'mdbreact';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            products: []
        }
    };

    clearSearch = () => {
        this.setState({
            value: ''
        });
    };

    filterList = (event) => {
      //clear input value
      this.setState({
        value: event.target.value,
      });
      //search products
      let updatedList = this.props.products;
      if (updatedList) {
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().search(
            event.target.value.toLowerCase()
          ) !== -1;
        })
      }
      this.setState({products: updatedList});
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
            <div className='Search'>
              <Container>
                <Row>
                  <Col md='12'>
                    <form>
                      <div className='grey-text Search_input'>
                        <Input onChange={this.filterList} value={this.state.value} label='Пошук' group type='text' validate error='wrong' success='right' />
                          {
                              this.state.value ?
                                  <a onClick={()=>this.clearSearch()} className='Search_input_close'>&times;</a>
                              : null
                          }
                      </div>
                    </form>
                  </Col>
                </Row>
                <Row>
                  {
                    this.state.products.map((item, i) => (
                      <Col md='4' key={i}>
                        <Card>
                          <CardBody>
                            <CardImage className="img-fluid" src={item.img} waves/>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                    ))
                  }
                </Row>
              </Container>
            </div>
          </ReactCSSTransitionGroup>
        )
    }
}

Search.propTypes = {
    animationTime: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  animationTime: state.routerAnimationTimeReducer.animationTime,
  products: state.searchProductsReducer.products
});
export default connect(mapStateToProps)(Search);
