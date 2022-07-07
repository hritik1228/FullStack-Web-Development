// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Contact from './components/Contact';




function App() {
  const [mode,setMode]=useState('light');// wheteher dark mode is enabled or not
  const [textMode,setTextMode]=useState('Enable');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },3000);
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      setTextMode('Enable');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
    else{
      setMode('dark');
      setTextMode('Disable');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
    }
  }

  
  return (
    <>
        <Router>
        <Navbar mainText="My App" homeText="Home" aboutText="About us" contactText="Contact Us" mode={mode} modeText={textMode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}/>
          <div className="container">
              <Routes>
              <Route exact path="/"
                  element={<TextBox showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>

                <Route exact path="/about" element={<About/>}/>

                <Route exact path="/contact" element={<Contact/>}/>

                <Route exact path="*" element={<Error/>}/>
              </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
