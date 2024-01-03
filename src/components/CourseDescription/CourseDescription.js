import React from 'react';
import { Link } from 'react-router-dom';

const sampleCourses = {
    1: {
        id: 1,
        title: "Matematyka dla maturzystów",
        description: "Krótki opis kursu matematyki.",
        imageUrl: "/images/kurs-matura-matematyka-logo.png"
    },
    2: {
        id: 2,
        title: "Fizyka od podstaw",
        description: "Zrozum fizykę i przygotuj się do egzaminów.",
        imageUrl: "/images/kurs-matura-matematyka-logo.png"
    },
    // ... więcej hardkodowanych kursów ...
};

function CourseDescription({ courseId }) {
    const course = sampleCourses[courseId];

    if (!course) return <div>Course not found</div>;

    return (
        <div className="course">
            <img src={course.imageUrl} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`}>View Details</Link>
        </div>
    );
}

export default CourseDescription;
