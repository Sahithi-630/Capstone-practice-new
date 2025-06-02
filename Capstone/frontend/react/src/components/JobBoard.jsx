import React from 'react';
import '../styles/JobBoard.css';

const JobBoard = () => {
  const jobs = [
    {
      role: "UI/UX Designer",
      company: "DXC",
      salary: "5 Lakhs",
      location: "Chennai"
    },
    {
      role: "Software Engineer",
      company: "Apple",
      salary: "$130,000 - $170,000",
      location: "Cupertino, CA"
    },
    {
      role: "Frontend Developer",
      company: "Google",
      salary: "$120,000 - $150,000",
      location: "Mountain View, CA"
    },
    {
      role: "Cloud Architect",
      company: "Amazon",
      salary: "$150,000",
      location: "Redmond, WA"
    },
    {
      role: "Data Scientist",
      company: "Microsoft",
      salary: "$140,000",
      location: "Seattle, WA"
    },
    {
      role: "DevOps Engineer",
      company: "IBM",
      salary: "$130,000",
      location: "Austin, TX"
    },
    {
      role: "Full Stack Developer",
      company: "Facebook",
      salary: "$150,000 - $180,000",
      location: "Menlo Park, CA"
    }
  ];

  return (
    <div className="jobboard-container">
      <h1 className="jobboard-title">Job Board</h1>
      <div className="jobboard-cards-wrapper">
        {jobs.map((job, index) => (
          <div key={index} className="jobboard-card">
            <div className="jobboard-card-title">{job.role}</div>
            <div className="jobboard-card-desc"><b>Company:</b> {job.company}</div>
            <div className="jobboard-card-desc"><b>Salary:</b> {job.salary}</div>
            <div className="jobboard-card-desc"><b>Location:</b> {job.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;