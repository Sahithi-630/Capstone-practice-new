import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/DashBoard';
import Companywisequestions from "./components/CompanyWiseQuestions";
import JobBoard from './components/JobBoard';
import ResumeReview from './components/ResumeReview';
import AiInterview from './components/AiInterview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company-wise-questions" element={<Companywisequestions />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/resume-review" element={<ResumeReview />} />
        <Route path="/ai-mock-interview" element={<AiInterview />} />
      </Routes>
    </Router>
  );
}

export default App;