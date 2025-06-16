import React, { useRef, useState } from 'react';
import '../styles/AiInterview.css';

const questions = [
  "Tell us about yourself.",
  "Why do you want this job?",
  "Describe a challenge you overcame."
];

const feedbackSamples = [
  "Great confidence and clear communication. Try to add more examples.",
  "Good structure, but work on your body language.",
  "Nice answer! Try to be more concise and focused.",
  "You answered well, but try to maintain eye contact.",
  "Good effort! Speak a bit slower for clarity."
];

const AiInterview = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoURL, setVideoURL] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);

  const videoRef = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    setFeedback('');
    setScore(null);
    setVideoURL('');
    setVideoFile(null);
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);
    chunks.current = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.current.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
      setVideoFile(blob);
      stream.getTracks().forEach(track => track.stop());
      setRecording(false);
    };
    recorder.start();
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  const handleFileChange = (e) => {
    setFeedback('');
    setScore(null);
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file));
    }
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!videoFile) {
      setFeedback('Please record or upload a video first.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const randomFeedback = feedbackSamples[Math.floor(Math.random() * feedbackSamples.length)];
      const randomScore = Math.floor(Math.random() * 41) + 60;
      setScore(randomScore);
      setFeedback(randomFeedback);
    }, 1500);
  };

  const handleNext = () => {
    setFeedback('');
    setScore(null);
    setVideoURL('');
    setVideoFile(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleFinish = () => {
    setFinished(true);
  };

  if (finished) {
    return (
      <div className="aii-container">
        <h2>AI Interview Practice</h2>
        <p className="aii-complete">🎉 Congratulations! You have completed the Interview.</p>
      </div>
    );
  }

  if (currentQuestion >= questions.length) {
    return (
      <div className="aii-container">
        <h2>AI Interview Practice</h2>
        <p className="aii-complete">🎉 You've completed all questions!</p>
        <button className="aii-analyze-btn" onClick={handleFinish}>Finish</button>
      </div>
    );
  }

  return (
    <div className="aii-container">
      <h2>AI Interview Practice</h2>

      <div className="aii-question-box">
        <span className="question-number" style={{ fontWeight: 'bold', marginRight: 6 }}>
          Question {currentQuestion + 1}:
        </span>
        <span className="question-text">{questions[currentQuestion] || "Question not found!"}</span>
      </div>

      <div className="aii-btn-row">
        <button className="aii-btn" onClick={startRecording} disabled={recording}>
          Record Video
        </button>
        <button className="aii-btn" onClick={stopRecording} disabled={!recording}>
          Stop Recording
        </button>
      </div>

      <div className="aii-upload-row">
        <input type="file" accept="video/*" onChange={handleFileChange} />
      </div>

      {videoURL && (
        <video src={videoURL} controls width="400" className="aii-video" />
      )}

      <form onSubmit={handleAnalyze}>
        <button className="aii-analyze-btn" type="submit" disabled={loading || !videoFile}>
          {loading ? 'Analyzing...' : 'Analyze Video'}
        </button>
      </form>

      {score !== null && (
        <div className="aii-score">
          <strong>Score: {score}/100</strong>
        </div>
      )}

      {feedback && (
        <div className="aii-feedback">
          <strong>{feedback}</strong>
          {currentQuestion < questions.length - 1 && (
            <div>
              <button className="aii-next-btn" onClick={handleNext}>
                Next Question
              </button>
            </div>
          )}
          {currentQuestion === questions.length - 1 && (
            <div>
              <button className="aii-next-btn" onClick={handleFinish}>
                Finish
              </button>
            </div>
          )}
        </div>
      )}

      <video ref={videoRef} style={{ display: 'none' }} />
    </div>
  );
};

export default AiInterview;