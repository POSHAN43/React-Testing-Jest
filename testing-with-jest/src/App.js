import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './Input';
import Users from './TestingComponent/UsersClass';
import InputBox from './TestingComponent/InputBox';
import ButtonBox from './TestingComponent/ButtonBox';
import FunctionComponentTest from './TestingComponent/FunctionComponentTest';
import RTLQuery from './TestingComponent/RTLQuery';

function App() {
  return (
    <div className="App">
      <p>React Testing </p>
      {/* <InputBox/> */}
      {/* <ButtonBox/> */}
      {/* <Users/> */}
      {/* <FunctionComponentTest/> */}
      <RTLQuery/>
    </div>
  );
}

export default App;
