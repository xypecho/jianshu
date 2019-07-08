import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                </HomeLeft>
                <HomeRight></HomeRight>
            </HomeWrapper>
        )
    }
}