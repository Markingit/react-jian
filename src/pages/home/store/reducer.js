
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl:''
    },{
        id: 2,
        title: '手绘',
        imgUrl:''
    }],
    articleList: [{
        id: 1,
        title: '国外拿奖到手软，国内遭禁，鬼知道这部国产电影经历了什么',
        desc: '说来奇怪，有一个公认的民间传说“禁片都是好片”。 这可能是我们普通民众精神上最后一点公开的叛逆了。 但是因为各种原因被禁映的电影，却是里面有很多...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10820899-a7c49cb29be9fc86?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '国外拿奖到手软，国内遭禁，鬼知道这部国产电影经历了什么',
        desc: '说来奇怪，有一个公认的民间传说“禁片都是好片”。 这可能是我们普通民众精神上最后一点公开的叛逆了。 但是因为各种原因被禁映的电影，却是里面有很多...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10820899-a7c49cb29be9fc86?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 3,
        title: '国外拿奖到手软，国内遭禁，鬼知道这部国产电影经历了什么',
        desc: '说来奇怪，有一个公认的民间传说“禁片都是好片”。 这可能是我们普通民众精神上最后一点公开的叛逆了。 但是因为各种原因被禁映的电影，却是里面有很多...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10820899-a7c49cb29be9fc86?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 4,
        title: '国外拿奖到手软，国内遭禁，鬼知道这部国产电影经历了什么',
        desc: '说来奇怪，有一个公认的民间传说“禁片都是好片”。 这可能是我们普通民众精神上最后一点公开的叛逆了。 但是因为各种原因被禁映的电影，却是里面有很多...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10820899-a7c49cb29be9fc86?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
});

export default (state = defaultState, action) => {

    switch(action.type) {
        default:
            return state
    }
}