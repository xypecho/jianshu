import actionTypes from './actionTypes.js';

export default {
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
}