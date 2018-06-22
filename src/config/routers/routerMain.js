import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../../containers/main/Main";
import Products from "../../containers/prosucts/Products";
import Search from "../../containers/search/Search";
import Categories from "../../containers/categories/Categories";

class RouterMain extends Component {
    render() {
        return (
          <Switch>
            <Route exact path='/main' component={Main} />
            <Route path='/products' component={Products} />
            <Route path='/categories' component={Categories} />
            <Route path='/search' component={Search} />
            <Redirect from='/' to='/main' />
          </Switch>
        )
    }
}

export default RouterMain;
