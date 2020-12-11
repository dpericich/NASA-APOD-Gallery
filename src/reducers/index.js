import {combineReducers} from 'redux';
import {currentDate} from './currentDate';
import {apiImageReducer} from './apiImageCall';
import { imagesLoading } from './imagesLoading';

const rootReducer = combineReducers({
    currentDate: currentDate,
    img: apiImageReducer,
    loading: imagesLoading,
})

export default rootReducer;