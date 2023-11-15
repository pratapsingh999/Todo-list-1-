// reducers/index.js
import { combineReducers } from 'redux';
import matrixReducer from './matrixReducer';
import inputReducer from './inputReducer';

const rootReducer = {
    matrix: matrixReducer,
    input: inputReducer
    // Add more slices as needed
};

export default rootReducer;