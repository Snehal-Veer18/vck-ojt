import React from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import './App.css'
import Admission from "./pages/Admission";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

const App = () => {
  return(
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/admissions" element={<Admission/>}></Route>
      </Routes>
      <div>
        <ChatbotComponent/>
      </div>
    </Router>
    </div>
  )
}
export default App