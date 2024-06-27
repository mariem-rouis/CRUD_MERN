import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Allstud from './Components/Allstud';
import Addstud from "./Components/AddStud";
import Navbar from "./Components/Navbar";


function App() {
  return (


    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Allstud />} />
        <Route path="/about" element={<Addstud />} />
      </Routes>
    </Router>

  );
}

export default App;
