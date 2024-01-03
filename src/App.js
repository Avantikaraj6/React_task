import Header from './Components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './Components/Body';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
     <Header />
     <Body />
     <Footer />
    </div>
   
  );
}

export default App;
