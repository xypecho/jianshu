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
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom: 1px solid #f0f0f0;
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

export const ListItem = styled.div`
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    border-bottom: 1px solid #f0f0f0;
    overflow:hidden;
    img{
        width: 150px;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        float:right;
    }
`;

export const ListInfo = styled.div`
    float:left;
    width:550px;
    p:first-child{
        color: #333;
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    p:last-child{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`

export const RecommendItem = styled.div`
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    background-image:url(${(props) => props.imgUrl});
    background-size: contain;
`