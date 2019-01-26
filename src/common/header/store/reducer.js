import * as contants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {

    switch(action.type) {
        case contants.SEARCH_FOCUS:
            return state.set('focused', true);
        case contants.SEARCH_BLUR:
            return state.set('focused', false);
        case contants.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state

    }

    // if(action.type === contants.SEARCH_FOCUS) {
    //     // immutable 对象
    //     return state.set('focused', true)
        
    //     // {
    //     //     focused: true
    //     // }
    // }

    // if(action.type === contants.SEARCH_BLUR) {
        
    //     return state.set('focused', false)

    //     // return {
    //     //     focused: false
    //     // }
    // }

    // if(action.type === contants.CHANGE_LIST){
    //     return state.set('list', action.data)
    // }
    // return state
}