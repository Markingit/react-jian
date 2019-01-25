import * as contants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {

    if(action.type === contants.SEARCH_FOCUS) {
        // immutable 对象
        return state.set('focused', true)
        
        // {
        //     focused: true
        // }
    }

    if(action.type === contants.SEARCH_BLUR) {
        
        return state.set('focused', false)

        // return {
        //     focused: false
        // }
    }

    return state
}