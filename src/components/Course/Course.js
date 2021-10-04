import React, { useEffect, useState } from 'react';
import './Course.css'

const Course = (props) => {

 
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ripon434/json/main/fakedb.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    },[])
    return (
        <div className="course-container">
           

            <div className="row">
                  {
                    courses.map(course => <div className="col-md-4">
                        <div className="card">
                            <img className="w-50" src={course.img} alt="" />
                            
                            <h5>Course : {course.name}</h5>
                            <p>Course fee:{course.course_fee}</p>
                            <p>description:{ course.description}</p>
                            <button className="btn btn-success">Details</button>

                    </div>
                </div>)
            }
          </div>
        </div>
    );
};

export default Course;