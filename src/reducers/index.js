import { ADD_MESSAGE} from '../actions';

let conversation = [];
if(localStorage.messages){
    conversation = JSON.parse(localStorage.messages).map(message=>message);
}

const initialState = {
    messages: conversation,
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