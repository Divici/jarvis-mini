import { ADD_MESSAGE} from '../actions';

const initialState = {
    messages: [],
}

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {...action.payload, id: Date.now()}]
            }
        default:
            return state;
    }
}

export default reducer;