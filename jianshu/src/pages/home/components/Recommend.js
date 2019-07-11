import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
    render() {
        const { recommendList } = this.props;
        return (
            <RecommendWrapper>
                {recommendList.map((item) => {
                    return (
                        <RecommendItem key={item.id} imgUrl={item.imgUrl} />
                    )
                })}
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.home.recommendList
    }
}

export default connect(mapStateToProps)(Recommend);