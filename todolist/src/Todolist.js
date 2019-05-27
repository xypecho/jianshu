import React, { Component } from 'react';
import store from './store/index.js';
import actionCreators from './store/actionCreators.js';
// import TodolistUI from './TodolistUI.js';
import { TodolistUI } from './TodolistUI.js';

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleChange(e) {
        // 这是最初的写法
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
    handleClick(index) {
        // const action = {
        //     type: actionTypes.DELETE_TODO_ITEM,
        //     index
        // }
        const action = actionCreators.getDeleteTodoAction(index);
        store.dispatch(action);
    }
    render() {
        return (
            <TodolistUI
                inputValue={this.state.inputValue}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                list={this.state.list}
                handleClick={this.handleClick}
            />
        )
    }
}