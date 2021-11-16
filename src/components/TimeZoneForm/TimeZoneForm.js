import React, {useState} from 'react';
import './TimeZoneForm.css';
import convertedTimeZones from '../time-zone-list';

const TimeZoneForm = ({setCity, city}) => {

    return (
        <form className='timezone-form'>
            <label for='changeTimezone'>Choose Destination Time Zone:</label>
            <select name='changeTimezone' id='changeTimezone' value={city} onChange={(e) => setCity(e.target.value)}>
                {convertedTimeZones}
            </select>
        </form>
    )
}

export default TimeZoneForm;