//import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import { ADD_PROMPT} from '../actions';

const initialState = {
    messages: [],
}

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_PROMPT:
            return {
                ...state,
                messages: [...state.messages, {...action.payload, id: Date.now()}]
            }
        default:
            return state;
    }
}

export default reducer;