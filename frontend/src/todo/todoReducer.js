const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case'DESCRIPTION_CHANGED': 
            return {...state, description: action.payload}
        default:
            return state
    }
}