import React, { Component } from 'react';
import { List, Input } from 'antd';

const Search = Input.Search;
export default class TodolistUI extends Component {
    render() {
        return (
            <div className='todolist-wrapper'>
                <Search
                    value={this.props.inputValue}
                    className='todolist-search'
                    placeholder="todolist info"
                    enterButton="新增"
                    size="default"
                    onChange={this.props.handleChange}
                    onSearch={this.props.handleSearch}
                />
                <List
                    size="default"
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => <List.Item onClick={(index) => this.props.handleClick(index)}>{item}</List.Item>}
                />
            </div>
        )
    }
}