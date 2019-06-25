import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import { GlobalStyle } from './style.js';
import store from './store/index.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Header></Header>
          hello world
      </Fragment>
      </Provider>
    )
  }
}