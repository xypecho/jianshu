import actionTypes from './actionTypes';
import axios from 'axios';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});
export const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data,
    totalPage: Math.ceil(data.length / 10)
});
export const MouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});
export const MouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            dispatch(changeList(res.data));
        }).catch(err => {
            console.error(err);
        })
    }
}