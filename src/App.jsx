
import './App.css';
import About from './components/About';
import {Navbar} from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Main, Route, Routes , Link} from 'react-router-dom';




function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert ] = useState(null);


  const showAlert = (message , type)=>
  {
    setAlert
    ({
      msg : message,
      type : type
    })
    
  }
  const toggleMode =()=>
  {
    if (mode === 'light')
    {
      setMode('dark')
      document.body.style.background='grey';
      showAlert("Dark mode has been Enabled","success")
    }
    

    else
    {
      setMode('light')
      document.body.style.background='white';
      showAlert("Dark mode has been Disabled","success")
    }

  }
  return (
    <>
        <Navbar title ="TextUtiles" mode={mode} toggleMode={toggleMode} />

        <Alert alert ={alert}/>

    <Main>
     <Routes>
      <Route exact path ="/about" element={<About/>}/>
      <Route exact path="/" element={<TextForm heading ="Enter the text to analyse below" mode={mode}/>}/>

     </Routes>
    </Main>
   


    
    
    </>

  );
}

export default App;
