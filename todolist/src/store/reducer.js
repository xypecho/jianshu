const defaultState = {
    inputValue: '',
    list: [1, 2, 3]
};

// reducer可以接受state，但是绝对不能修改state
export default (state = defaultState, action) => {
    // console.log(state, action)
    if (action.type === "change_input_value") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === "add_todo_item") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...newState.list, newState.inputValue];
        newState.inputValue = '';
        console.log(newState)
        return newState;
    }
    // const newState = JSON.parse(JSON.stringify(defaultState));
    // switch (action.type) {
    //     case "change_input_value":
    //         newState.inputValue = action.value;
    //         return newState;
    //     case "add_todo_item":
    //         newState.list = [...newState.list, newState.inputValue];
    //         console.log(newState)
    //         return newState;
    //     default:
    //         break;
    // }
    return state;
}