// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
// import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';

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
    }
    else{
      setMode('dark');
      setTextMode('Disable');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
    }
  }

  
  return (
    <>
        <Navbar mainText="My App" homeText="Home" aboutText="About us" mode={mode} modeText={textMode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}/>
        <div className="container">
          <TextBox showAlert={showAlert} heading="Enter the text to analyze" mode={mode}></TextBox>
          {/* <About></About> */}
        </div>
    </>
  );
}

export default App;
