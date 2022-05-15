export const ADD_PROMPT = 'ADD_PROMPT';

export const addPrompt = (message) => {
    return({type: ADD_PROMPT, payload:message});
}