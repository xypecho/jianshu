import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavWrapper } from './style';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleOnfocus = this.handleOnfocus.bind(this);
        this.handleOnblur = this.handleOnblur.bind(this);
    }
    handleOnfocus() {
        this.setState({
            focused: true
        })
    }
    handleOnblur() {
        this.setState({
            focused: false
        })
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe76a;</i>
                    </NavItem>
                    <NavWrapper>
                        <NavSearch className={this.state.focused ? 'focused' : ''} onFocus={this.handleOnfocus} onBlur={this.handleOnblur}></NavSearch>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
                    </NavWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>写文章</Button>
                    <Button className='register'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}