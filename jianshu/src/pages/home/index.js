import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    addEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
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
                {this.props.isShowScrollToTop ? <BackToTop onClick={this.scrollToTop}>顶部</BackToTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.addEvent(); // 新增监听滚动事件
    }
    componentWillUnmount() {
        // 组件销毁移出滚动监听
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollTopShow() {
            if (document.documentElement.scrollTop > 400) {
                dispatch(actionCreators.changeScrollTopStatus(true));
            } else {
                dispatch(actionCreators.changeScrollTopStatus(false));
            }
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isShowScrollToTop: state.home.isShowScrollToTop
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);