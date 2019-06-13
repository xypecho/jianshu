const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    console.log(state);
    console.log(action);
    return state;
}