import React from 'react';

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
    }
  ];

  const styles = {
    body: {
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: '#1f1f2e',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '20px',
    },
    heading: {
      textAlign: 'center',
      color: '#ffcc00',
      marginBottom: '40px'
    },
    jobBoard: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    },
    jobCard: {
      backgroundColor: '#2c2c3a',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      padding: '20px',
      transition: 'transform 0.3s ease',
    },
    jobTitle: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      color: '#ffd700',
      marginBottom: '10px'
    },
    jobDetail: {
      fontSize: '0.95em',
      margin: '6px 0',
      color: '#d0d0d0'
    },
    jobDetailBold: {
      color: '#ffffff',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>Job Board</h1>
      <div style={styles.jobBoard}>
        {jobs.map((job, index) => (
          <div key={index} style={styles.jobCard}>
            <div style={styles.jobTitle}>{job.role}</div>
            <div style={styles.jobDetail}><span style={styles.jobDetailBold}>Company:</span> {job.company}</div>
            <div style={styles.jobDetail}><span style={styles.jobDetailBold}>Salary:</span> {job.salary}</div>
            <div style={styles.jobDetail}><span style={styles.jobDetailBold}>Location:</span> {job.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
