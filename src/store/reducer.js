const initialState = {
    counter: 99
}

const reducer = (state = initialState, action) => {

    if(action.type == 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }

    } else if(action.type == 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    
    return state
}

export default reducer