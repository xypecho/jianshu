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
`