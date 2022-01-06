import './App.css'
import React from "react";
import Compile from './execute.js'




function App() {
  return (
    <div className='main'>
      <div className="app">Online Compiler</div>
      <Compile/>
    </div>
  );
}

export default App;
