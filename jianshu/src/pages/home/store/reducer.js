const defaultState = {
    topicList: [
        {
            id: 1,
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562689894700&di=01bf491f6771f43f2b2a496c4fdb4724&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1508447609%2C3628622553%26fm%3D214%26gp%3D0.jpg',
            title: '历史'
        },
        {
            id: 2,
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562689894700&di=01bf491f6771f43f2b2a496c4fdb4724&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1508447609%2C3628622553%26fm%3D214%26gp%3D0.jpg',
            title: '政治'
        }
    ]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}