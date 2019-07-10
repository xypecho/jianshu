import React, { Component } from "react";
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavWrapper, SearchInfo, SearchInfoTitle, SearchInfoTitleSwitch, SearchInfoItem } from './style';
// import { dispatch } from "rxjs/internal/observable/range";
import * as actionCreators from './store/actionCreators';

class Header extends Component {
    constructor(props) {
        super(props)
        this.getSearchItem = this.getSearchItem.bind(this);
    }
    getSearchItem() {
        const { list, focused, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
        const pageList = [];
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (list[i]) {
                pageList.push(
                    <SearchInfoItem key={list[i]} >{list[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoTitleSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606;</i>
                            换一批
                        </SearchInfoTitleSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleOnfocus, handleOnblur, list } = this.props;
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
                        <NavSearch className={focused ? 'focused' : ''} onFocus={() => handleOnfocus(list)} onBlur={handleOnblur}></NavSearch>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
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
        list: state.header.list,
        page: state.header.page,
        totalPage: state.header.totalPage,
        mouseIn: state.header.mouseIn,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnfocus(list) {
            (list.length === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleOnblur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.MouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.MouseLeave());
        },
        handleChangePage(page, totalPage, spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            console.log(originAngle)
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);