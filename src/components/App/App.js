import './App.css';
import {useState, useEffect} from 'react';
import TimeZoneForm from '../TimeZoneForm/TimeZoneForm';
import { calculateDiff } from '../../utils';

const App = () => {
  const [timestamp, setTimestamp] = useState({convertStamp: '', diffStamp1: '', diffStamp2: '' })
  const [timestampDiff, setTimestampDiff] = useState('hmm')
  const [converted, setConverted] = useState('')
  const [city, setCity] = useState('America/Denver')

  const handleChange = (e) => {
    setTimestamp(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if (timestamp.convertStamp.length >= 20) {
      let date = new Date(timestamp.convertStamp);
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
  }, [timestamp.convertStamp, city])

  useEffect(() => {
    calculateDiff(timestamp.diffStamp1, timestamp.diffStamp2)
  }, [timestamp.diffStamp1, timestamp.diffStamp2])

  return (
    <main>
      <header className='header'>
        <h1 className='page-title'>ISO 8601 Converter</h1>
      </header>
      <section className='converter-container'>
        <section className='converter-section'>
          <h2 className='converter-header'>Convert Timezone</h2>
          <TimeZoneForm setCity={setCity} city={city}/>
          <label className='input-label' htmlFor='timestamp'>Enter Timestamp</label>
          <input 
            className='timestamp-input' 
            type='text' 
            id='timestamp' 
            name= 'convertStamp'
            value={timestamp.convertStamp} 
            onChange={(e) => handleChange(e)}
            placeholder='ex: yyyy-mm-ddThh:mm:ssz'
          />
        {converted && 
          <section className='output-section'>
            <h2 className='timezone-title'>{city}:</h2>
            <div className='converted-wrapper'>
              <p className='converted-timestamp'>{converted}</p>
            </div>
          </section>
        }
        </section>
        <section className='diff-section'>
          <h2 className='diff-title'>Calculate Difference</h2>
          <div className='diff-inputs'>
            <div>
              <label className='diff-label' htmlFor='timestamp'>Enter Timestamp 1</label>
              <input 
                className='diff-input-field' 
                type='text' 
                id='timestamp'
                name='diffStamp1' 
                value={timestamp.diffStamp1} 
                onChange={(e) => handleChange(e)}
                placeholder='ex: yyyy-mm-ddThh:mm:ssz'
              />
            </div>
            <div>
              <label className='diff-label' htmlFor='timestamp'>Enter Timestamp 2</label>
              <input 
                className='diff-input-field' 
                type='text' 
                id='timestamp' 
                name='diffStamp2'
                value={timestamp.diffStamp2} 
                onChange={(e) => handleChange(e)}
                placeholder='ex: yyyy-mm-ddThh:mm:ssz'
              />
            </div>
          </div>
        {timestampDiff && 
          <section className='diff-output-section'>
            <h2 className='timezone-title'>Difference:</h2>
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
