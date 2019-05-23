import React, { Component } from 'react';
import { List, Input } from 'antd';
import store from './store/index.js';

const Search = Input.Search;

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    render() {
        return (
            <div className='todolist-wrapper'>
                <Search
                    value={this.state.inputValue}
                    className='todolist-search'
                    placeholder="todolist info"
                    enterButton="新增"
                    size="default"
                    onChange={this.handleChange}
                    onSearch={value => console.log(value)}
                />
                <List
                    size="default"
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
}