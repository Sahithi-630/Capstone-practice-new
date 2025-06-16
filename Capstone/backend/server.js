const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

dotenv.config();

app.use(express.json());
app.use(cors());

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const interviewQuestionsRouter = require("./controller/interviewQuestionsRouter");
const jobBoardRouter = require("./controller/jobBoardRouter");
const companyWiseQuestionRouter = require("./controller/companyWiseQuestionsRouter");

// Resume Review Endpoint
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/x-pdf' // Sometimes needed for PDFs
    ];
    console.log('File mimetype:', file.mimetype); // Debug log
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed!'));
    }
  }
});

app.post('/api/resume-review', upload.single('resume'), (req, res) => {
  console.log('Received file:', req.file); // Debug log

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

// Error handler for Multer and other errors
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ feedback: "File upload error: " + err.message });
  } else if (err) {
    return res.status(400).json({ feedback: err.message });
  }
  next();
});

app.use("/api", interviewQuestionsRouter);
app.use("/jobBoard", jobBoardRouter);
app.use("/companyWiseQuestion", companyWiseQuestionRouter);

const PORT = 5000;

console.log("Mongo URI:", process.env.MONGO);

mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });