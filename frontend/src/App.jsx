import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/ladingPage/landingPage';
import StoriesPage from './components/Stories/stories'; 
import ProtectedRoute from './components/protectedRoutes/protectedRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/stories" /> : <LandingPage />} />

        <Route path="/stories"
          element={
            <ProtectedRoute>
              <StoriesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
