import actionTypes from './actionTypes';
const defaultState = {
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 0
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            newState.focused = true;
            return newState;
        case actionTypes.SEARCH_BLUR:
            newState.focused = false;
            return newState;
        case actionTypes.CHANGE_LIST:
            newState.list = action.data;
            newState.totalPage = action.totalPage;
            return newState;
        case actionTypes.MOUSE_ENTER:
            newState.mouseIn = true;
            return newState;
        case actionTypes.MOUSE_LEAVE:
            newState.mouseIn = false;
            return newState;
        case actionTypes.CHANGE_PAGE:
            newState.page = action.page;
            return newState;
        default:
            return state;
    }
}