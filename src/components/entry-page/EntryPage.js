import React from 'react';
import DateInput from '../date-input/DateInput';


const EntryPage = () => {
    return(
        <div className="date-entry__container">
            <h1 className="date-entry__title">Nasa apod gallery</h1>  
            <DateInput />
        </div>
    )
}

export default EntryPage;
