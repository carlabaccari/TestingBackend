import logo from './logo.svg';
import './App.css';
import React, { useState } from 'React';

function App() {
  const [responseBack, setResponseBack] = useState('');
  function fetchData() {
    fetch('https://https://backendmessismo.onrender.com/api/v1/auth/health', {
      method: 'GET'
    })
      .then(response => {
        setResponseBack(response);
      })
  }


  fetchData();
  setInterval(fetchData, 180000);
  return (
    <div className="App">
      <div>
        <p>
          Testing backend health&nbsp;
        </p>
        <div>
          <a
            href="https://backendmessismo.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GO TO RENDER
          </a>
        </div>
      </div>
      <div>
        <h1>LA RESPONSE DEL BACK ES: {responseBack}</h1>
      </div>
    </div>
  );
}

export default App;
