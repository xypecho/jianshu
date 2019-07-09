import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component {
    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {topicList.map((item) => {
                    return (
                        <TopicItem key={item.id}>
                            <img src={item.imgUrl} alt="" />
                            {item.title}
                        </TopicItem>
                    )
                })}
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.home.topicList
    }
};
export default connect(mapStateToProps, null)(Topic);