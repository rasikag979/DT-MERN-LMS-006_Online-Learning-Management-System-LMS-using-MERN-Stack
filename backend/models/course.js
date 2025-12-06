import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: Number,
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Course", CourseSchema);
