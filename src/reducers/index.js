import {combineReducers} from 'redux';
import {currentDate} from './currentDate';

const rootReducer = combineReducers({
    currentDate: currentDate,
})

export default rootReducer;