import React from 'react';
import CourseDescription, {sampleCourses} from '../../components/CourseDescription/CourseDescription';

function Home() {
    const courseIds = Object.keys(sampleCourses).map(Number);

    return (
        <div id="coursesSection">
            <h1>Featured Courses</h1>
            {courseIds.map(courseId => (
                <CourseDescription key={courseId} courseId={courseId} />
            ))}
        </div>
    );
}

export default Home;
