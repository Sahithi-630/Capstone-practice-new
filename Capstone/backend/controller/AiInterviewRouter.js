const express = require('express');
const multer = require('multer');
const router = express.Router();

const questionsByRole = {
  "software-engineer": [
    "Explain OOP concepts.",
    "What is a REST API?",
    "Describe a challenging bug you fixed.",
    // ...add more...
  ],
  "data-scientist": [
    "What is overfitting?",
    "Explain supervised vs unsupervised learning.",
    "How do you handle missing data?",
    // ...add more...
  ],
  // Add more roles and questions
};

function getRandomQuestions(arr, n = 3) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(n, arr.length));
}

// Get random questions for a role
router.get('/interview-questions/:role', (req, res) => {
  const role = req.params.role;
  const questions = questionsByRole[role];
  if (questions) {
    res.json({ questions: getRandomQuestions(questions, 3) });
  } else {
    res.status(404).json({ questions: [] });
  }
});

// Video analysis endpoint (demo)
const upload = multer({ dest: 'uploads/' });

router.post('/interview-analyze', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ feedback: 'No video uploaded.', score: null });
  }
  // Demo feedback and score
  res.json({
    feedback: 'Your answer was clear and confident. Good job!',
    score: Math.floor(Math.random() * 41) + 60 // random score between 60-100
  });
});

module.exports = router;