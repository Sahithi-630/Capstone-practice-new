import React, { useState } from 'react';

const ResumeReview = () => {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFeedback('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setFeedback('Please upload a resume file.');
      return;
    }
    setLoading(true);
    // Simulate analysis delay
    setTimeout(() => {
      setLoading(false);
      setFeedback(
        'Resume Review: Your resume is well-structured. Consider adding more details to your work experience and highlighting your technical skills.'
      );
    }, 2000);
  };

  return (
    <div className="container">
      <h2>Resume Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Resume (PDF/DOCX):</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </form>
      {feedback && <div style={{ marginTop: '20px' }}><strong>{feedback}</strong></div>}
    </div>
  );
};

export default ResumeReview;