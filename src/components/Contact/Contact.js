import React, { useEffect, useState } from 'react';

const Contact = () => {

     const [details, setDetails] = useState([]);
        useEffect(() => {
            fetch('https://raw.githubusercontent.com/ripon434/json/main/fakedb.json')
                .then(res => res.json())
                .then(data => setDetails(data));
        }, []);
    return (
        
             
            <div className="course-container">
          

            <div className="row">
                  {
                    details.map(detail => <div className="col-md-4">
                        <div className="card">
                            <img className="w-50" src={detail.img} alt="" />
                          
                            <h5>Course : {detail.title}</h5>
                            <p>Email:{ detail.contact_email}</p>
                            <p>Phone:{ detail.contact_number}</p>
                            <p>website:{ detail.website}</p>
                            <button className="btn btn-success">Details</button>

                    </div>
                </div>)
            }
          </div>
        </div>
        
    );
};

export default Contact;