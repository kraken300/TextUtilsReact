//import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";  
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

import React from 'react'

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [textMode, settextMode] = useState("dark");

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if (mode === "dark"){
      setMode("light");
      // settextMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.","success")
      document.title = "TextUtils - LightMode"
    }
    else{
      setMode ("dark");
      // settextMode("light");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled.","success");
      document.title = "TextUtils - DarkMode";

      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);

    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} />
        </div>
          {/* <Switch> */}

            {/* <Route exact path="/"> */}
              {/* <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} /> */}
            {/* </Route> */}

            {/* <Route exact path="/about">
              <About />
            </Route> */}

          {/* </Switch> */}

          {/* <About/> */}
        {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
