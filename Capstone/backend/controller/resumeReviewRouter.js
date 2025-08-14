const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/x-pdf'
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'));
    }
  }
});

router.get('/test', (req, res) => {
  res.json({ ok: true });
});

router.post('/resume-review', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ feedback: "No file uploaded." });
  }
  // Demo feedback
  const feedbacks = [
    "Great formatting! Add more quantifiable achievements.",
    "Consider expanding your technical skills section.",
    "Your resume is well-structured. Try to shorten your summary.",
    "Highlight your leadership experience more.",
    "Add more details to your work experience."
  ];
  const feedback = feedbacks[Math.floor(Math.random() * feedbacks.length)];
  res.json({ feedback });
});

module.exports = router;