const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const interviewQuestionsRouter = require("./controller/interviewQuestionsRouter");
const jobBoardRouter = require("./controller/jobBoardRouter");
const companyWiseQuestionRouter = require("./controller/companyWiseQuestionsRouter");

app.use("/api", interviewQuestionsRouter);
app.use("/jobBoard", jobBoardRouter);
app.use("/companyWiseQuestion", companyWiseQuestionRouter);

const PORT = 5000; // Or any port you prefer

// Debug: Print the MongoDB URI to verify it's loaded correctly
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