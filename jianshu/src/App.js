import React, { Fragment } from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['呆呆', 'sada']
    }
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.handleChange} value={this.state.inputValue} />
        <button onClick={this.handleClick}>click it</button>
        {
          this.state.list.map((item, key) => {
            return <li key={key}>{item}</li>
          })
        }
      </Fragment>
    )
  }
}