import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        const { articleList } = this.props;
        return (
            <div>
                {articleList.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            <ListInfo>
                                <p>{item.title}</p>
                                <p>{item.desc}</p>
                            </ListInfo>
                            <img src={item.imgUrl} alt="" />
                        </ListItem>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.home.articleList
    }
};
export default connect(mapStateToProps, null)(List);