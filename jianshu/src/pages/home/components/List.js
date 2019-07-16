import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { getMoreHomeList } from '../store/actionCreators';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const { articleList, getMoreHomeList, articleListPage } = this.props;
        return (
            <div>
                {articleList.map((item, index) => {
                    return (
                        <Link key={index} to='/details'>
                            <ListItem key={item.id}>
                                <ListInfo>
                                    <p>{item.title}</p>
                                    <p>{item.desc}</p>
                                </ListInfo>
                                <img src={item.imgUrl} alt="" />
                            </ListItem>
                        </Link>
                    )
                })}
                <LoadMore onClick={() => getMoreHomeList(articleListPage)}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.home.articleList,
        articleListPage: state.home.articleListPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreHomeList(articleListPage) {
            dispatch(getMoreHomeList(articleListPage))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);