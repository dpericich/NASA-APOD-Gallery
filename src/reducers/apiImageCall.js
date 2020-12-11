import {actionTypes} from '../actions/ActionTypes';


/**
 * @function {function} apiImageReducer - take in state and action and update state if the action is getting info form APOD API
 * @param {object} state - current store state
 * @param {object} action - object with type and payload
 * @return {object} - modified or orignal state
 */

export const apiImageReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.IMAGES_FETCHED:
            return {...state, spaceImg: action.payload}
        default:
            return state;
    }
}