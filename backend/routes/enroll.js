import express from "express";
import Enrollment from "../models/enrollment.js"; 
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/:courseId", auth, async (req, res) => {
  try {
    const existing = await Enrollment.findOne({ user: req.user.id, course: req.params.courseId });
    if (existing) return res.json(existing);

    const enroll = new Enrollment({ user: req.user.id, course: req.params.courseId });
    await enroll.save();
    res.json(enroll);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
