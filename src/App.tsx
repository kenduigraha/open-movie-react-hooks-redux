import React, { useRef } from 'react';
import { Button, Alert } from 'antd';
import logo from './logo.svg';
import './App.css';

function App() {
  const btnElement = useRef(null);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Alert message="Success Text" type="success" />
          <Button ref={btnElement} type="primary" >Button Ant Design</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
