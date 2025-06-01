// Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="fullscreen">
      <div className="home-container">
        <header className="home-header">
          <div className="logo">NextHire</div>
          <div className="nav-buttons">
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="signup-btn" onClick={() => navigate("/signup")}>
              Signup
            </button>
          </div>
        </header>

        <section className="hero-section">
          <h2>Intervuze</h2>
          <p>Your dream job starts here - Prepare, practice, succeed!</p>
          
          {/* ✅ Updated button to redirect to dashboard */}
          <button className="get-started-btn" onClick={() => navigate("/dashboard")}>
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;
