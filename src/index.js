import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { BrowserRouter } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import rootReducer from './config/redux/reducers'

const store = () => createStore(
    rootReducer,
    applyMiddleware(createLogger())
);

const history = createHistory();

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter hystory={history}>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
