// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
    <>
        <Navbar mainText="My App" homeText="Home" aboutText="About us"></Navbar>
        
        <div className="container">
          <TextBox></TextBox>
        </div>
    </>
  );
}

export default App;
