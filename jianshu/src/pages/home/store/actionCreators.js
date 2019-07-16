import axios from 'axios';
import { CHANGE_HOME_INFO, GET_MORE_HOME_LIST_DATA, CHANGE_SCROLLTOP_STATUS } from './actionTypes';

const changeHomeData = (data) => {
    return {
        type: CHANGE_HOME_INFO,
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList
    }
};

const getMoreHomeListData = (data, page) => {
    return {
        type: GET_MORE_HOME_LIST_DATA,
        articleList: data.articleList,
        articleListPage: page
    }
}

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const data = res.data.data;
            dispatch(changeHomeData(data));
        })
    }
};

export const getMoreHomeList = (page) => {
    console.log(page);
    return (dispatch) => {
        axios.get(`/api/homeList.json?page=${page}`).then(res => {
            const data = res.data.data;
            dispatch(getMoreHomeListData(data, page + 1));
        })
    }
}

export const changeScrollTopStatus = (status) => {
    return {
        type: CHANGE_SCROLLTOP_STATUS,
        status
    }
}