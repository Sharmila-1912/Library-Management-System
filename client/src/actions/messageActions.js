// src/actions/messageActions.js
export const SET_MESSAGE = 'SET_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const setMessage = (message) => {
    return {
        type: SET_MESSAGE,
        payload: message,
    };
};

export const clearMessage = () => {
    return {
        type: CLEAR_MESSAGE,
    };
};
