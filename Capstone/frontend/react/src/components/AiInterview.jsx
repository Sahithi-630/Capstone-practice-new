import React, { useRef, useState } from 'react';

const AiInterview = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoURL, setVideoURL] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const chunks = useRef([]);

  // Start recording from webcam
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

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  // Handle video file upload
  const handleFileChange = (e) => {
    setFeedback('');
    setScore(null);
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file));
    }
  };

  // Simulate analysis
  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!videoFile) {
      setFeedback('Please record or upload a video first.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScore(Math.floor(Math.random() * 41) + 60); // Random score between 60-100
      setFeedback('Feedback: Good eye contact and clear answers. Try to reduce filler words and improve your confidence.');
    }, 2000);
  };

  return (
    <div className="container">
      <h2>AI Interview Practice</h2>
      <div>
        <button onClick={startRecording} disabled={recording}>Record Video</button>
        <button onClick={stopRecording} disabled={!recording}>Stop Recording</button>
      </div>
      <div style={{ margin: '10px 0' }}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
      </div>
      {videoURL && (
        <video src={videoURL} controls width="400" style={{ display: 'block', marginBottom: '10px' }} />
      )}
      <form onSubmit={handleAnalyze}>
        <button type="submit" disabled={loading || !videoFile}>
          {loading ? 'Analyzing...' : 'Analyze Video'}
        </button>
      </form>
      {score !== null && <div style={{ marginTop: '20px' }}><strong>Score: {score}/100</strong></div>}
      {feedback && <div style={{ marginTop: '10px' }}><strong>{feedback}</strong></div>}
      <video ref={videoRef} style={{ display: 'none' }} />
    </div>
  );
};

export default AiInterview;