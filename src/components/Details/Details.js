import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Details.css'

const Details = () => {
     const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ripon434/json/main/fakedb.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    },[])
    return (
        <div>
         
            <div className="course-container">
          

            <div className="row">
                  {
                    details.map(detail => <div className="col-md-4">
                        <div className="card">
                            <img className="w-50" src={detail.img} alt="" />
                          
                            <h5>Course : {detail.name}</h5>
                            <button className="btn btn-success">Details</button>

                    </div>
                </div>)
            }
          </div>
        </div>
        </div>
    );
};

export default Details;