import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        axios.get('/api/home.json').then(res => {
            const data = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: data.topicList,
                articleList: data.articleList,
                recommendList: data.recommendList
            }
            this.props.changeHomeData(action);
        }).catch(err => {
            console.error(err);
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData(action) {
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);