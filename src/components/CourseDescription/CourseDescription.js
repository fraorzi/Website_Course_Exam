// CourseDescription.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDescription = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Course Description</h2>
            <p>Course ID: {id}</p>
            {/* Dodaj opis kursu */}
        </div>
    );
};

export default CourseDescription;
