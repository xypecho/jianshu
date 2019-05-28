import actionTypes from './actionTypes.js';
import axios from 'axios';

export const actionCreators = {
    getInputChangeAction: (value) => {
        return {
            type: actionTypes.CHANGE_INPUT_VALUE,
            value
        }
    },
    getAddTodoAction: () => {
        return {
            type: actionTypes.ADD_TODO_ITEM
        }
    },
    getDeleteTodoAction: (index) => {
        return {
            type: actionTypes.DELETE_TODO_ITEM,
            index
        }
    },
    initTodoAction: (value) => {
        return {
            type: actionTypes.INIT_TODO_ITEM,
            value
        }
    }
    // getTodoList: () => {
    //     return () => {
    //         console.log(module)
    //         // axios.get('/api/todolist').then(res => {
    //         //     console.log(res.data);
    //         //     const action = this.initTodoAction(res.data);
    //         //     console.log(action)
    //         //     store.dispatch(action);
    //         // })
    //     }
    // }
}
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist').then(res => {
            console.log(res.data);
            const action = actionCreators.initTodoAction(res.data);
            console.log(action)
            dispatch(action);
        })
    }
}