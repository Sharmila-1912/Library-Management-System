// src/reducers/index.js
import { combineReducers } from 'redux';
import { messageReducer } from './messageReducer';
// Import other reducers

const rootReducer = combineReducers({
    messageReducer,
    // Add other reducers here
});

export default rootReducer;
