import React from 'react';
import { useParams } from 'react-router-dom';
import {useCart} from "../../components/CartContext/CartContext";
import './CourseDetails.scss';

const detailedCourses = {
    1: {
        id: 1,
        title: "Matematyka dla maturzystów",
        detailedDescription: "Szczegółowy opis kursu matematyki, omawiający analizę matematyczną, algebrę, geometrię...",
        imageUrl: "/images/kurs-matura-matematyka-logo.png",
        price: 200
        // ... inne szczegółowe informacje ...
    },
    2: {
        id: 2,
        title: "Fizyka od podstaw",
        detailedDescription: "Zrozum podstawowe prawa fizyki, naucz się myślenia naukowego i przygotuj się do egzaminów.",
        imageUrl: "/images/kurs-matura-fizyka-logo.png",
        price: 180
        // ... inne szczegółowe informacje ...
    },
    3: {
        id: 3,
        title: "Programowanie w Python",
        detailedDescription: "Naucz się Python.",
        imageUrl: "/images/kurs-python-logo.png",
        price: 250
        // ... inne szczegółowe informacje ...
    },
    4: {
        id: 4,
        title: "Historia",
        detailedDescription: "Historia bla bla bla",
        imageUrl: "/images/kurs-historia-logo.png",
        price: 350
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
        <div className="course-details">
            <h1>{course.title}</h1>
            <img src={course.imageUrl} alt={course.title} className="detailed-course-image"/>
            <p>{course.detailedDescription}</p>
            {/* Dodaj więcej szczegółowych informacji o kursie tutaj */}
            <button onClick={handleAddToCart}>Dodaj do koszyka</button>
        </div>
    );
}

export default CourseDetails;
