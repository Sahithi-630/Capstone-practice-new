import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
        <button style={buttonStyle} onClick={() => navigate('/ai-mock-interview')}>AI Mock Interview</button>
        <button style={buttonStyle} onClick={() => navigate('/job-board')}>Job Board</button>
        <button style={buttonStyle} onClick={() => navigate('/company-wise-questions')}>Company Wise Questions</button>
        <button style={buttonStyle} onClick={() => navigate('/resume-review')}>Resume Review</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "1rem",
  fontSize: "1.1rem",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background 0.3s",
};

export default DashBoard;