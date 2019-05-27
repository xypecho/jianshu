import React, { Component } from 'react';
import { List, Input } from 'antd';
import store from './store/index.js';
import actionCreators from './store/actionCreators.js';

const Search = Input.Search;

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleChange(e) {
        // const action = {
        //     type: actionTypes.CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = actionCreators.getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleSearch() {
        // const action = {
        //     type: actionTypes.ADD_TODO_ITEM
        // }
        const action = actionCreators.getAddTodoAction();
        store.dispatch(action);
    }
    handleClick = (index) => {
        // const action = {
        //     type: actionTypes.DELETE_TODO_ITEM,
        //     index
        // }
        const action = actionCreators.getDeleteTodoAction(index);
        store.dispatch(action);
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
                    onSearch={this.handleSearch}
                />
                <List
                    size="default"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={() => this.handleClick(index)}>{item}</List.Item>}
                />
            </div>
        )
    }
}