import './App.css';
import {useState} from 'react';

function App() {
  const [timestamp, setTimestamp] = useState('')

  const handleChange = (e) => {

  }

  return (
    <main>
      <header className='header'>
        <h1 className='page-title'>ISO 8601 Converter</h1>
      </header>
      <section className='converter-container'>
        <section className='input-section'>
          <label for='timestamp'>Enter Timestamp</label>
          <input type='text' id='timestamp' value={timeStamp} onChange={(e) => handleChange(e)}></input>
        </section>
      </section>
    </main>
  );
}

export default App;
