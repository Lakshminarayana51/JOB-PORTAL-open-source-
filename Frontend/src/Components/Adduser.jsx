import React from 'react'
import { useRef } from 'react';
import JobPortal from '../Pages/Jobdata';
import { Link } from 'react-router-dom';
import Jobdata from '../Pages/Jobdata'
import '../Pages/styles.css';
import ClearIcon from '@mui/icons-material/Clear';
const Adduser = () => {

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const locationref = useRef(null);
    const requirementsref = useRef(null);

    const addtaskhand = (e) => {
        e.preventDefault();
        const data = {
            title: titleRef?.current?.value,
            description: descriptionRef?.current?.value,
            location:locationref?.current?.value,
            requirements:requirementsref?.current?.value,
        }
        fetch('http://127.0.0.1:8000/job_data', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(`Network response was not ok: ${response.status} ${text}`);
                });
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // Assuming your response contains a success property
            if (data.success) {
                alert('Registration successful!');
            } else {
                alert('Registration failed: ' + data.message); // Or however your message is structured
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }        
  return (
    <div>
    
      <div   className='overlay'>
        <div className='add-task-container'><h1>Job Application <a href='/Jobdata' className='link'><ClearIcon fontSize='medium'/></a></h1>
          <form onSubmit={addtaskhand} className='add-task-form'>
            
              <input ref={titleRef} type='text' placeholder='Job Title' />
              <textarea ref={descriptionRef} cols='30' rows='10' placeholder='Job Description' />
              <input ref={requirementsref} type='text' placeholder='Requirements' />
              <input ref={locationref} type='text' placeholder='Location' />
              <button>Register</button>

            
          </form>
      </div></div>
    </div>
  )
}

export default Adduser;