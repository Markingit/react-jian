const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {

    if(action.type === 'searc_focus') {
        return {
            focused: true
        }
    }

    if(action.type === 'searc_blur') {
        return {
            focused: false
        }
    }

    return state
}