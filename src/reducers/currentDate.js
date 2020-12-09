import {actionTypes} from '../actions'

/**
 * @function currentDate - reduce that accepts current state and action to possibly update store state
 * @param (object) - current state of store, or default if it's only been initialized
 * @param (object) - passed to the reducer from store.dispatch. Holds action type and optional payload
 * @return (object) - new copy of the store, different if the action type matched the reducer
 */

export const currentDate = (state = {date: ""}, action) => {
    switch (action.type) {
        case actionTypes.DATE_STRING :
            return {...state, date: action.payload};
        default: 
            return state;
    }
}