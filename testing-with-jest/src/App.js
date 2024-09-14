import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './Input';
import Users from './TestingComponent/UsersClass';
import InputBox from './TestingComponent/InputBox';
import ButtonBox from './TestingComponent/ButtonBox';
import FunctionComponentTest from './TestingComponent/FunctionComponentTest';
import RTLQuery from './TestingComponent/RTLQuery';
import FindBy from './TestingComponent/FindBy';
import KeyBoardOnChange from './TestingComponent/KeyBoardOnChange';
import PropsTesting from './TestingComponent/PropsTesting';
import functionProps from './TestingComponent/functionProps';
function App() {
  const testFunction=()=>{

  }
  return (
    <div className="App">
      <p>React Testing </p>
      {/* <InputBox/> */}
      {/* <ButtonBox/> */}
      {/* <Users/> */}
      {/* <FunctionComponentTest/> */}
      {/* <RTLQuery/> */}
      {/* <FindBy/> */}
      {/* <KeyBoardOnChange/> */}
      {/* <PropsTesting name="Poshan"/> */}
      <functionProps/>
    </div>
  );
}

export default App;
