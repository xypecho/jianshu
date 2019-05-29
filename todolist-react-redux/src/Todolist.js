import React, { Component } from 'react';
import { List, Input } from 'antd';
import { connect } from 'react-redux'


const Search = Input.Search;
class Todolist extends Component {
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
                    renderItem={(item, index) => <List.Item onClick={() => this.props.handleClick(index)}>{item}</List.Item>}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleSearch() {
            const action = {
                type: 'add_todo_item'
            }
            dispatch(action);
        },
        handleClick(index) {
            const action = {
                type: 'delete_todo_item',
                index
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);