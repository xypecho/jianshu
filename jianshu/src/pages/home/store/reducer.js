import { CHANGE_HOME_INFO, GET_MORE_HOME_LIST_DATA } from './actionTypes';
const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    articleListPage: 1
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_HOME_INFO:
            newState.topicList = action.topicList;
            newState.articleList = action.articleList;
            newState.recommendList = action.recommendList;
            return newState;
        case GET_MORE_HOME_LIST_DATA:
            newState.articleList.push(...action.articleList);
            newState.articleListPage = action.articleListPage;
            return newState;
        default:
            return state;
    }
}