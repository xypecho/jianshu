import React, { Fragment } from 'react';
import Header from './common/header/index.js';
import { GlobalStyle } from './style.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header></Header>
        hello world
      </Fragment>
    )
  }
}