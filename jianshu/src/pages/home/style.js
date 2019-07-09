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

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
`;

export const TopicItem = styled.div`
    background:#f7f7f7;
    float:left;
    height:32px;
    line-height:32px;
    border:1px solid #dcdcdc;
    font-size:14px;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    img{
        height:32px;
        float:left;
        margin-right:10px;
    }
`;