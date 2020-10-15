// eslint-disable-next-line
import React, { useRef } from 'react';
import { Button, Alert } from 'antd';
import logo from './logo.svg';
import './App.css';

function App() {
  const btnElement = useRef(null);

  console.log(process.env);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Alert message={process.env.NODE_ENV} type="success" />
          <Button ref={btnElement} type="primary">
            Button {process.env.REACT_APP_API_KEY}
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
