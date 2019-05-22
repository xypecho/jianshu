import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
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
  componentDidMount() {
    axios.get('/api/todolist').then(res => {
      this.setState(() => {
        return {
          list: [...res.data]
        }
      })
    }).catch(err => {
      console.log(err);
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
App.propTypes = {
  inputValue: PropTypes.array
};