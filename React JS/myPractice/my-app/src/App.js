// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';

function App() {
  return (
    <>
        <Navbar mainText="My App" homeText="Home" aboutText="About us"></Navbar>
        
        <div className="container">
          {/* <TextBox heading="Enter the text to analyze"></TextBox> */}
          <About></About>
        </div>
    </>
  );
}

export default App;
