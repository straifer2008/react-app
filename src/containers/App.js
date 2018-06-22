import React, { Component } from 'react';
import './App.less';
import RouterMain from "../config/routers/routerMain";
import Menu from "./menu/Menu";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />
        <RouterMain />
      </div>
    );
  }
}

export default App;
