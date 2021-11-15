import React, {useState} from 'react';
import './TimeZoneForm.css';

const TimeZoneForm = () => {
    const [city, setCity] = useState('America/Denver')

    return (
        <form>
            <label for='changeTimezone'>Choose Time zone to Convert to</label>
            <select name='changeTimezone' id='changeTimezone'>
                <option value='America/Denver'>America/Denver</option>
            </select>
        </form>
    )
}

export default TimeZoneForm;