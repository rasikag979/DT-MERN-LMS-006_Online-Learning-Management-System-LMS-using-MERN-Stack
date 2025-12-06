import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  title: String,
  questions: [
    {
      question: String,
      options: [String],
      correctIndex: Number
    }
  ]
});

export default mongoose.model("Quiz", QuizSchema);

