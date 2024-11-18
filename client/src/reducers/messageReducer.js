// src/reducers/messageReducer.js
import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/messageActions';

const initialState = {
    message: '',
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: '',
            };
        default:
            return state;
    }
};
