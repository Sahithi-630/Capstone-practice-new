import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/DashBoard';
import Companywisequestions from "./components/CompanyWiseQuestions";
import JobBoard from './components/JobBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company-wise-questions" element={<Companywisequestions />} />
        <Route path='/job-board' element={<JobBoard />} />
      </Routes>
    </Router>
  );
}

export default App;