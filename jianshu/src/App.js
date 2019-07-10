import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import { GlobalStyle } from './style.js';
import store from './store/index.js';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Header></Header>
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/details' exact component={Detail}></Route>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}