import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: "Web Development", price: "200", description: "Learn the basics of web development." },
  { id: 2, title: "Data Science", price: "250", description: "Dive into the world of data science." },
  { id: 3, title: "Digital Marketing", price: "150", description: "Master digital marketing strategies." }
];

function CourseDescription() {
  return (
      <div>
        {courses.map(course => (
            <div key={course.id}>
              <h2>{course.title}</h2>
              <p>Price: {course.price}</p>
              <p>{course.description}</p>
              <Link to={`/course/${course.id}`}>View Details</Link>
            </div>
        ))}
      </div>
  );
}

export default CourseDescription;
