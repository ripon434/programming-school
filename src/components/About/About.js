import React, { useEffect, useState } from 'react';


const About = () => {
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
                           
                            <h5>Course : {course.title}</h5>
                            <p>gender:{course.gender}</p>
                            <p>course_fee:{ course.course_fee}</p>
                            <button className="btn btn-success">Details</button>

                    </div>
                </div>)
            }
          </div>
        </div>
    );
};

export default About;