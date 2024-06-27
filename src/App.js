import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Allstud from './Components/Allstud';
import Addstud from "./Components/AddStud";
import Navbar from "./Components/Navbar";
import Editstud from "./Components/Editstud"
import Viewstud from './Components/Viewstud';
function App() {
  return (


    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Allstud />} />
        <Route path="/addstud" element={<Addstud />} />
        <Route path="/editstud/:id" element={<Editstud />} />
        <Route path="/viewstud" element={<Viewstud />} />

      </Routes>
    </Router>

  );
}

export default App;
