import './App.css'
import React from "react";
import Compile from './execute.js'




function App() {
  return (
    <div className='main'>
      <div className="app">Online Compiler</div>
      <Compile/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000b76" fill-opacity="0.73" d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,176C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>

    </div>
  );
}

export default App;
