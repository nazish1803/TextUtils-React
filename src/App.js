
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)  
    },"1500")
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = "rgb(0 7 20)";
      showAlert("Darkmode has been enable", "success");
      document.title = "TextUtils - DarkMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enable", "success");
      document.title = "TextUtils - LightMode"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} toggleMode={toggleMode} />
      </>
  );
}

export default App;
