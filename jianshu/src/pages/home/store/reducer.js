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
        },
        {
            id: 3,
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562689894700&di=01bf491f6771f43f2b2a496c4fdb4724&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1508447609%2C3628622553%26fm%3D214%26gp%3D0.jpg',
            title: '地理'
        },
        {
            id: 4,
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562689894700&di=01bf491f6771f43f2b2a496c4fdb4724&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1508447609%2C3628622553%26fm%3D214%26gp%3D0.jpg',
            title: '语文'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '程序员自黑的梗！产品经理：功能实现起来很简单！——程序员：草',
            desc: '在这个盛行自黑的时代，作为全宇宙最神秘最会自黑的程序员群体，他们其实是非常可爱并且努力工作的一群人。所以，如果你的身边有程序员朋友，要多多关心他...',
            imgUrl: '//upload-images.jianshu.io/upload_images/15776993-77079d1cfca66884?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '程序员自黑的梗！产品经理：功能实现起来很简单！——程序员：草',
            desc: '在这个盛行自黑的时代，作为全宇宙最神秘最会自黑的程序员群体，他们其实是非常可爱并且努力工作的一群人。所以，如果你的身边有程序员朋友，要多多关心他...',
            imgUrl: '//upload-images.jianshu.io/upload_images/15776993-77079d1cfca66884?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '程序员自黑的梗！产品经理：功能实现起来很简单！——程序员：草',
            desc: '在这个盛行自黑的时代，作为全宇宙最神秘最会自黑的程序员群体，他们其实是非常可爱并且努力工作的一群人。所以，如果你的身边有程序员朋友，要多多关心他...',
            imgUrl: '//upload-images.jianshu.io/upload_images/15776993-77079d1cfca66884?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '程序员自黑的梗！产品经理：功能实现起来很简单！——程序员：草',
            desc: '在这个盛行自黑的时代，作为全宇宙最神秘最会自黑的程序员群体，他们其实是非常可爱并且努力工作的一群人。所以，如果你的身边有程序员朋友，要多多关心他...',
            imgUrl: '//upload-images.jianshu.io/upload_images/15776993-77079d1cfca66884?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}