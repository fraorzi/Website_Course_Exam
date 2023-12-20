import React from 'react';
import { useParams } from 'react-router-dom';

const courseDetails = {
  1: { title: "Web Development", details: "Extended details about Web Development." },
  2: { title: "Data Science", details: "Extended details about Data Science." },
  3: { title: "Digital Marketing", details: "Extended details about Digital Marketing." }
};

function CourseDetails() {
  const { id } = useParams();
  const course = courseDetails[id];

  return (
      <div>
        {course ? (
            <div>
              <h2>{course.title}</h2>
              <p>{course.details}</p>
            </div>
        ) : (
            <p>Course not found.</p>
        )}
      </div>
  );
}

export default CourseDetails;
