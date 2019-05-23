const defaultState = {
    inputValue: '',
    list: []
};

// reducer可以接受state，但是绝对不能修改state
export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === "change_input_value") {
        const newState = JSON.parse(JSON.stringify(defaultState));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}