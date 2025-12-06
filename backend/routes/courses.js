import express from "express";
import multer from "multer";
import Course from "../models/course.js";    
import auth from "../middleware/auth.js";     

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, "./uploads"),
  filename: (_, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Create course (instructor)
router.post("/", auth, upload.single("thumbnail"), async (req, res) => {
  try {
    if (req.user.role !== "instructor") return res.status(403).json({ msg: "Not allowed" });
    const { title, description, price } = req.body;
    const thumbnail = req.file ? "/uploads/" + req.file.filename : "";
    const course = new Course({ title, description, price, thumbnail, instructor: req.user.id });
    await course.save();
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/", async (_, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("modules");
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
