import React from 'react';
import { useParams } from 'react-router-dom';
import {useCart} from "../../components/CartContext/CartContext";

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
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        // Sprawdź, czy kurs ma wszystkie niezbędne informacje (id, title, price)
        if (!course.id || !course.title || (course.price && course.price < 0)) {
            console.error("Kurs nie ma wszystkich niezbędnych informacji.");
            return;
        }
        // Dodaj kurs do koszyka
        addToCart(course);
    };

    if (!course) return <div>Course not found</div>;

    return (
        <div>
            <h1>{course.title}</h1>
            <img src={course.imageUrl} alt={course.title} className="detailed-course-image"/>
            <p>{course.detailedDescription}</p>
            {/* Dodaj więcej szczegółowych informacji o kursie tutaj */}
            <button onClick={handleAddToCart}>Dodaj do koszyka</button>
        </div>
    );
}

export default CourseDetails;
