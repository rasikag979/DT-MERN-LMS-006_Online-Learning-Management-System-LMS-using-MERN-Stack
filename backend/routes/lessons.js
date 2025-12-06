import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js";        
import Lesson from "../models/lesson.js";        
import Course from "../models/course.js";       

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, "./uploads"),
  filename: (_, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/:courseId", auth, upload.single("file"), async (req, res) => {
  try {
    if (req.user.role !== "instructor") return res.status(403).json({ msg: "Not allowed" });
    const { title, contentType, duration } = req.body;
    const contentUrl = req.file ? "/uploads/" + req.file.filename : (req.body.contentUrl || "");
    const lesson = new Lesson({ title, contentType, duration, contentUrl, course: req.params.courseId });
    await lesson.save();
    await Course.findByIdAndUpdate(req.params.courseId, { $push: { modules: lesson._id } });
    res.json(lesson);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
