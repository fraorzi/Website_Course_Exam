import React from 'react';
import { useParams } from 'react-router-dom';

const detailedCourses = {
    1: {
        id: 1,
        title: "Matematyka dla maturzystów",
        detailedDescription: "Szczegółowy opis kursu matematyki...",
        imageUrl: "/images/kurs-matura-matematyka-logo.png",
        // ... inne szczegółowe informacje ...
    },
    2: {
        id: 2,
        title: "Fizyka od podstaw",
        detailedDescription: "Szczegółowy opis kursu fizyki...",
        imageUrl: "/images/kurs-matura-matematyka-logo.png",
        // ... inne szczegółowe informacje ...
    },
    // ... więcej hardkodowanych szczegółów kursów ...
};

function CourseDetails() {
    const { courseId } = useParams();
    const course = detailedCourses[courseId];

    if (!course) return <div>Course not found</div>;

    return (
        <div>
            <h1>{course.title}</h1>
            <img src={course.imageUrl} alt={course.title} />
            <p>{course.detailedDescription}</p>
            {/* Dodaj więcej szczegółowych informacji o kursie tutaj */}
        </div>
    );
}

export default CourseDetails;
