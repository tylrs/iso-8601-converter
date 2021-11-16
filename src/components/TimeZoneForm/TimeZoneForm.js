import React, {useState} from 'react';
import './TimeZoneForm.css';
import convertedTimeZones from '../time-zone-list';

const TimeZoneForm = () => {
    const [city, setCity] = useState('America/Denver')

    return (
        <form>
            <label for='changeTimezone'>Choose Destination Time Zone:</label>
            <select name='changeTimezone' id='changeTimezone'>
                {convertedTimeZones}
            </select>
        </form>
    )
}

export default TimeZoneForm;