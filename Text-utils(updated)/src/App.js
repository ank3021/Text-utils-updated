//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
 function App(){
  return (
    <>
   <Navbar title = "TEXTUTILS" about = "About us"/>
   <div className="container">
    <Textbox heading = "Enter your text here -" button1 = "Convert to UpperCase" button2 = "Convert to LowerCase" button3 = "Clear"
    button4 = "Trim" button5 = "Subscript" button6 = "Superscript"/>
   </div>
    </>
  ) 
 }
export default App;
