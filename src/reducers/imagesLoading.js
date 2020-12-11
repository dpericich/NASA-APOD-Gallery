import {actionTypes} from '../actions/ActionTypes';

export const imagesLoading = (state = false, action) => {
    switch(action.type) {
        case actionTypes.LOADING_IMAGES: 
            return true;
        case actionTypes.IMAGES_FETCHED: 
            return false;
        default: 
            return state;
    }
}