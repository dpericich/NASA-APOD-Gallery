export const actionTypes = {
    DATE_STRING : 'DATE_STRING',
}

/**
 * @function updateDate - action creator used to take date input and return an action object to update the store
 * @param {str} date - taken from date inputs and used to make APOD requests 
 * @return {object} - object with DATE_STRING action type and payload of the input date
 */

export const updateDate = (date) => {
    return {type: 'DATE_STRING', payload: date}
}