import actionTypes from './actionTypes.js';

const defaultState = {
    inputValue: '',
    list: []
};

// reducer可以接受state，但是绝对不能修改state
export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === actionTypes.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...newState.list, newState.inputValue];
        newState.inputValue = '';
        return newState;
    }
    if (action.type === actionTypes.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        console.log(newState)
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === actionTypes.INIT_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        console.log(newState)
        newState.list = action.value;
        return newState;
    }
    return state;
}