// CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Course Details</h2>
            <p>Course ID: {id}</p>
            {/* Dodaj inne elementy związane z opisem kursu */}
        </div>
    );
};

export default CourseDetails;
