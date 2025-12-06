import express from "express";
import Quiz from "../models/quiz.js"; 

const router = express.Router();

router.post("/:quizId/submit", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) return res.status(404).send("Quiz not found");

    const { answers } = req.body;
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (answers && answers[i] === q.correctIndex) score++;
    });
    const percentage = quiz.questions.length ? (score / quiz.questions.length)* 100 : 0;
    res.json({ score, percentage, pass: percentage >= 40 });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
