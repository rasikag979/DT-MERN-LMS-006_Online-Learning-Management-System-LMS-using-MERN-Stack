import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "c:/Users/Rasika/Desktop/OLMS-mern/frontend/src/api/axios";

export default function CoursePlayer() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    API.get(`/courses/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, [id]);

  if (!course) return <h2>Loading course...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>Lessons</h3>
      {course.modules?.length === 0 && <p>No lessons uploaded yet.</p>}

      {course.modules?.map((lesson) => (
        <div key={lesson._id} style={{ marginBottom: "20px" }}>
          <h4>{lesson.title}</h4>

          {lesson.contentType === "video" && (
            <video
              src={`http://localhost:5000${lesson.contentUrl}`}
              controls
              width="600"
            />
          )}

          {lesson.contentType === "pdf" && (
            <a
              href={`http://localhost:5000${lesson.contentUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              View PDF
            </a>
          )}

          {lesson.contentType === "text" && (
            <p>{lesson.contentUrl}</p>
          )}
        </div>
      ))}
    </div>
  );
}
