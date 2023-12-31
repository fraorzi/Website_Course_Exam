import React from 'react';
import { Link } from 'react-router-dom';

export const sampleCourses = {
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
        imageUrl: "/images/kurs-matura-fizyka-logo.png"
    },
    3: {
        id: 3,
        title: "Programowanie w Pythonie",
        description: "Poznaj podstawy programowania z Pythonem.",
        imageUrl: "/images/kurs-python-logo.png"
    },
    4: {
        id: 4,
        title: "Historia sztuki",
        description: "Odkryj piękno i historię sztuki światowej.",
        imageUrl: "/images/kurs-historia-sztuki-logo.png"
    },
    // ... więcej hardkodowanych kursów ...
};

function CourseDescription({ courseId }) {
    const course = sampleCourses[courseId];

    if (!course) return <div>Course not found</div>;

    return (
        <div className="courseDescription">
            <img src={course.imageUrl} alt={course.title} className="course-image"/>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`}>View Details</Link>
        </div>
    );
}

export default CourseDescription;
