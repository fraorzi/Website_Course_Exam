import React from 'react';
import CourseDescription from '../../components/CourseDescription/CourseDescription';

function Home() {
    const courseIds = [1, 2, 3];

    return (
        <div>
            <h1>Featured Courses</h1>
            {courseIds.map(courseId => (
                <CourseDescription key={courseId} courseId={courseId} />
            ))}
        </div>
    );
}

export default Home;
