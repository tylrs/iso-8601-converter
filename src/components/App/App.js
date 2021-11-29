import './App.css';
import {useState, useEffect} from 'react';
import TimeZoneForm from '../TimeZoneForm/TimeZoneForm';

const App = () => {
  const [timestamp, setTimestamp] = useState('')
  const [diffTimestamp1, setDiffTimestamp1] = useState('')
  const [diffTimestamp2, setDiffTimestamp2] = useState('')
  const [timestampDiff, setTimestampDiff] = useState('')
  const [converted, setConverted] = useState('')
  const [city, setCity] = useState('America/Denver')

  const handleChange = (e) => {
    setTimestamp(e.target.value)
  }

  useEffect(() => {
    if (timestamp.length >= 20) {
      let date = new Date(timestamp);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: `${city}`,
      };
      setConverted(date.toLocaleString('en-US', options))
    }
  }, [timestamp, city])

  return (
    <main>
      <header className='header'>
        <h1 className='page-title'>ISO 8601 Converter</h1>
      </header>
      <section className='converter-container'>
        <section className='converter-section'>
          <label className='input-label' htmlFor='timestamp'>Enter Timestamp</label>
          <TimeZoneForm setCity={setCity} city={city}/>
          <input 
            className='timestamp-input' 
            type='text' 
            id='timestamp' 
            value={timestamp} 
            onChange={(e) => handleChange(e)}
            placeholder='ex: yyyy-mm-ddThh:mm:ssz'
          />
        {converted && 
          <section className='output-section'>
            <h2 className='timezone-title'>{city}</h2>
            <div className='converted-wrapper'>
              <p className='converted-timestamp'>{converted}</p>
            </div>
          </section>
        }
        </section>
        <section className='diff-section'>
          <h2>Calculate Difference</h2>
          <label className='diff-label-1' htmlFor='timestamp'>Enter Timestamp</label>
          <input 
            className='timestamp-input-1' 
            type='text' 
            id='timestamp' 
            value={diffTimestamp1} 
            onChange={(e) => handleChange(e)}
            placeholder='ex: yyyy-mm-ddThh:mm:ssz'
          />
          <label className='diff-label-2' htmlFor='timestamp'>Enter Timestamp</label>
          <input 
            className='timestamp-input-2' 
            type='text' 
            id='timestamp' 
            value={diffTimestamp2} 
            onChange={(e) => handleChange(e)}
            placeholder='ex: yyyy-mm-ddThh:mm:ssz'
          />
        {timestampDiff && 
          <section className='diff-output-section'>
            <h2 className='timezone-title'>Not sure</h2>
            <div className='diff-wrapper'>
              <p className='diff-timestamp'>{timestampDiff}</p>
            </div>
          </section>
        }
        </section>  
      </section>
    </main>
  );
}

export default App;
