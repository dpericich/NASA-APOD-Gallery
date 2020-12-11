import axios from 'axios';
// import store from '../ConfigureStore';

const KEY = "yCdP2Ksp5Z28lqwFRQPOakIjlc1vcMqcYIUP6fuD";

/**
 * @function updateDate - action creator used to take date input and return an action object to update the store
 * @param {str} date - taken from date inputs and used to make APOD requests 
 * @return {object} - object with DATE_STRING action type and payload of the input date
 */

export const updateDate = (date) => {
    return {type: 'DATE_STRING', payload: date}
}

/**
 * @funciton apiImageCall - used to make call to APOD API for single picture and create and dispatch action object to the store
 * @param {function} dispatch - used to dispatch action object to global store
 * @param {funtion} getState  - used to get current state of store
 * @return - doesn't return anything. Dispatches action object to the store
 */ 

export const apiImageCall = () => {
    return (dispatch, getState) => {
        dispatch(loadingImages());

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${getState().currentDate.date}`)
        .then(res => {
            dispatch(imagesFetched(res.data));
        }).catch(err => console.log(err))
    }
}

const imagesFetched = (data) => {    
    return {type: 'IMAGES_FETCHED', payload: data}
}

const loadingImages = () => {
    return {type: 'LOADING_IMAGES'}
}