import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [timestamp, setTimestamp] = useState('')
  const [converted, setConverted] = useState('')

  const handleChange = (e) => {
    setTimestamp(e.target.value)
  }

  useEffect(() => {
    console.log('changing')
    if (timestamp.length >= 20) {
      let date = new Date(timestamp);
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Denver',
      };
      setConverted(date.toLocaleString('en-US', options))
    }
  }, [timestamp])

  return (
    <main>
      <header className='header'>
        <h1 className='page-title'>ISO 8601 Converter</h1>
      </header>
      <section className='converter-container'>
        <section className='input-section'>
          <label className='input-label' htmlFor='timestamp'>Enter Timestamp</label>
          <input className='timestamp-input' type='text' id='timestamp' value={timestamp} onChange={(e) => handleChange(e)}></input>
        </section>
        {converted && 
          <section className='output-section'>
            <h2 className='timezone-title'>Denver</h2>
            <div className='converted-wrapper'>
              <p className='converted-timestamp'>{converted}</p>
            </div>
          </section>
        }
      </section>
    </main>
  );
}

export default App;
