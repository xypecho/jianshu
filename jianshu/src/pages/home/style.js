import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:80vw;
    margin:0 auto;
    display:flex;
    flex-direction:row;
`;

export const HomeLeft = styled.div`
    flex:1;
    background:red;
    height:100px;
    .banner-img{
        width:100%;
    }
`;

export const HomeRight = styled.div`
    flex: 0 0 270px;
    margin-left:30px;
    background:blue;
    height:100px;
`;