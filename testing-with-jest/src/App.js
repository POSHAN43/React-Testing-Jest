import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './Input';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <input type='text' placeholder='Enter user name' name='username' id='inputName' defaultValue="Sudha Paikra"/>
      <img src={logo} alt='Logo' title='logo generated'/>
      {/* <Input/> */}
      <Users/>
    </div>
  );
}

export default App;
