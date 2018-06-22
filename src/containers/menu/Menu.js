import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Menu.less';
import {Navbar} from "mdbreact";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMobileMenu: false
        }
    }

    toggleMobileMenu = () => {
        this.setState({
            activeMobileMenu: !this.state.activeMobileMenu
        })
    };

    render() {
        return (
          <div className={this.state.activeMobileMenu ? 'Menu Menu_mobileMenu-active' : 'Menu'}>

            <button onClick={()=>this.toggleMobileMenu()} type='button' className='btn btn-rounded btn-primary Menu_mobileMenu'>
                {
                    this.state.activeMobileMenu ?
                        <i className='fa fa-close fa-2x' aria-hidden='true' />
                    :   <i className='fa fa-bars fa-2x' aria-hidden='true' />
                }
            </button>

            <Navbar className='Menu_nav z-depth-3 flex-column align-items-center justify-content-around' color='white'>
              {
                  this.props.menu.map((item, i) => (
                    <NavLink key={i} className='Menu_nav_bar_link' activeClassName='Menu_nav_bar_link-active' to={`/${item.page}`}>
                      <i className={`fa fa-${item.icon}`} aria-hidden='true' />
                      <p className='Menu_nav_bar_link_text'>{item.name}</p>
                    </NavLink>
                  ))
              }
            </Navbar>

          </div>
        )
    }
}

Menu.propTypes = {
    menu: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    menu: state.mainMenuReducer.menu
});

export default connect(mapStateToProps, null, null, {
    pure: false
})(Menu);
