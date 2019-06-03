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

export const Logo = styled.a.attrs({
    href: '/'
})`
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
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    border: none;
    outline: none;
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    box-sizing:border-box;
    margin-top: 9px;
    padding-left: 15px;
    &::placeholder{
        color: #999;
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
`;