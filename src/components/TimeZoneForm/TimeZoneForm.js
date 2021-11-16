import React, {useState} from 'react';
import './TimeZoneForm.css';
import convertedTimeZones from '../time-zone-list';

const TimeZoneForm = ({setCity}) => {

    return (
        <form>
            <label for='changeTimezone'>Choose Destination Time Zone:</label>
            <select name='changeTimezone' id='changeTimezone' onChange={(e) => setCity(e.target.value)}>
                {convertedTimeZones}
            </select>
        </form>
    )
}

export default TimeZoneForm;