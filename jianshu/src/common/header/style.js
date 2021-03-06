import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    height: 56px;
    background-color: #fff;
    border-color: #f0f0f0;
`;

export const Logo = styled.div`
    float: left;
    height: 56px;
    width: 100px;
    padding: 0;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 20px;
    font-size: 17px;
    padding: 17px 10px;
    cursor: pointer;
    &.left{
        float:left;
        color: #333;
        margin-right: 10px;
    }
    &.right{
        float:right;
        color: #969696;
        margin: 0 6px 0 10px;
    }
    &.active{
        color: #ea6f5a;
    }
    .iconfont{
        font-size:30px;
    }
`;

export const NavWrapper = styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        top: 13px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        right: 10px;
        border-radius: 15px;
        &.focused{
            background:#969696;
            color:#fff!important;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    border: none;
    outline: none;
    padding: 0 46px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    box-sizing:border-box;
    margin-top: 9px;
    padding-left: 15px;
    transition: width .5s;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width:240px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    width: 80px;
    height: 40px;
    line-height: 40px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    &.register{
        color: #ea6f5a;
    }
    &.writing{
        color: #fff;
        background-color: #ea6f5a;
    }
    &.iconfont{
        fontSize:30px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    width:250px;
    left:0;
    top:56px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    padding: 20px 20px 10px;
`;
export const SearchInfoTitle = styled.div`
    margin-top:9px;
    font-size: 14px;
    color: #969696;
    margin-bottom: 10px;
`;
export const SearchInfoTitleSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        margin-right:8px;
        font-size:14px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;
export const SearchInfoItem = styled.a`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    display:block;
    float:left;
    margin-right: 10px;
    margin-bottom:15px;
    cursor:pointer;
    &:hover{
        color: #333;
        border-color: #b4b4b4;
    }
`;