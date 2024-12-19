import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/ladingPage/landingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import StoriesPage from "./components/Stories/stories";


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stories" element={<StoriesPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
