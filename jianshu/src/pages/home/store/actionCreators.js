import axios from 'axios';
import { CHANGE_HOME_INFO } from './actionTypes';

const changeHomeData = (data) => {
    return {
        type: CHANGE_HOME_INFO,
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList
    }
};

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const data = res.data.data;
            dispatch(changeHomeData(data));
        })
    }
};