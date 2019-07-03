import React, { Component } from "react";
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavWrapper, SearchInfo, SearchInfoTitle, SearchInfoTitleSwitch, SearchInfoItem } from './style';
import { dispatch } from "rxjs/internal/observable/range";
import * as actionCreators from './store/actionCreators';

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleOnfocus = this.handleOnfocus.bind(this);
        this.handleOnblur = this.handleOnblur.bind(this);
        this.getSearchItem = this.getSearchItem.bind(this);
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
    getSearchItem(show) {
        const {list}=this.props;
        if (show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoTitleSwitch>
                                    换一批
                        </SearchInfoTitleSwitch>
                    </SearchInfoTitle>
                    <div>
                        {list.map((k,v)=>{
                            return(
                                <SearchInfoItem key={v}>{k}</SearchInfoItem>
                            )
                        })}
                        {/* <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>学习教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>我</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>学习教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>学习教育</SearchInfoItem> */}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const {focused,handleOnfocus,handleOnblur}=this.props;
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
                        <NavSearch className={focused ? 'focused' : ''} onFocus={handleOnfocus} onBlur={handleOnblur}></NavSearch>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
                        {this.getSearchItem(focused)}
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
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        list:state.header.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnfocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleOnblur() {
            dispatch(actionCreators.searchBlur());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);