import { CHANGE_HOME_INFO } from './actionTypes';
const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: []
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_HOME_INFO:
            newState.topicList = action.topicList;
            newState.articleList = action.articleList;
            newState.recommendList = action.recommendList;
            return newState;
        default:
            return state;
    }
    // switch (action.type) {
    //     case
    //     default:
    //         return state;
    // }
}