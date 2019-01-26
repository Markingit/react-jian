import * as contants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type: contants.CHANGE_LIST,
    data: fromJS(data)
});

export const searchFocus = () => ({
    type: contants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: contants.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error')
        })
    }
}