import React from 'react';
import '../styles/dashBoard.css';


const Dashboard = () => (
  <div className="center-content">
    <div className="dashboard-container">
      <div className="dashboard-header">Welcome to Your Dashboard</div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="dashboard-card-title">Resume Review</div>
          <div className="dashboard-card-desc">Get instant feedback on your resume.</div>
          <a href="/resume-review" className="dashboard-card-action">Review Now</a>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-title">AI Mock Interview</div>
          <div className="dashboard-card-desc">Practice and get AI-powered interview analysis.</div>
          <a href="/ai-mock-interview" className="dashboard-card-action">Start Interview</a>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-title">Job Board</div>
          <div className="dashboard-card-desc">Find and apply for jobs.</div>
          <a href="/job-board" className="dashboard-card-action">View Jobs</a>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-title">Company Questions</div>
          <div className="dashboard-card-desc">Practice company-wise interview questions.</div>
          <a href="/company-wise-questions" className="dashboard-card-action">Practice Now</a>
        </div>
      </div>
    </div>
  </div>
);


export default Dashboard;