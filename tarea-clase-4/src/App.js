import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';


//Components
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import LoginSuccesful from "./components/LoginSuccessful";
import { useState } from 'react';


function App() {
  const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged")=== true)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogged? <LoginSuccesful /> : <Login/>} />
        <Route path="LoginForm" element={<LoginForm/>} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;
