import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Button } from '@mui/material';

const Home = () => {
  const [testData, setTestData] = useState();
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setTestData(data))
  })

  console.log(testData)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(testData)}
        <Button>TEST</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
