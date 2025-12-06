import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  title: String,
  contentType: { type: String, enum: ["video", "pdf", "text"], default: "video" },
  contentUrl: String,
  duration: Number,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});

export default mongoose.model("Lesson", LessonSchema);
