import {combineReducers} from 'redux';
import {AllData,DataToggle} from './productReducer.js'

const reducer = combineReducers({
    AllData,
    DataToggle
    
});

export default reducer;