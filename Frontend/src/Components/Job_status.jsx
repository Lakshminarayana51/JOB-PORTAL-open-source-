import React, { useEffect, useState } from 'react';
import '../Pages/styles.css';
import apidataAtom from '../recoil/apidataAtom';
import { useRecoilState } from 'recoil';
import tododata from '../recoil/tododata';
import DeleteIcon from '@mui/icons-material/Delete';
import Searchbar from '../Pages/Searchbar';

const Job_status = () => {
    const [apiData, setApiData] = useRecoilState(apidataAtom);
    const [todoapidata, setTodoapidata] = useRecoilState(tododata);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetching initial data (if necessary)
        fetch('http://127.0.0.1:8000/initial_call', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setApiData(data);
            setTodoapidata(data?.Job);
        })
        .catch((error) => {
            alert(error);
        });
    }, [setApiData, setTodoapidata]);

    // Handle delete functionality
    const handleDelete = (jobId) => {
        const bodyData = { id: jobId };

        fetch('http://127.0.0.1:8000/delete_application', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        })
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
            setTodoapidata(res?.Job);
        })
        .catch((error) => {
            console.log('Error', error);
        });
    };

    // Filtered job data based on search term
    const filteredJobs = todoapidata?.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className='check-status-head'>
                Checking Application Status  
                <p className='para'> 
                    <a href='/Jobdata'> Back to Home</a>  
                </p>
            </h1>
            <Searchbar setSearchTerm={setSearchTerm} />
            <div className='status-list'>
                {filteredJobs && filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div key={index} className='content'>
                            <div className='job-item'>
                                <div className='delete'>
                                    <DeleteIcon onClick={() => handleDelete(job.id)} />
                                    Click to Delete Icon if you want to delete Application
                                </div>
                                <h2 className="title">Title: {job.title}</h2>
                                <p>Job Description: {job.description}</p>
                                <p>Requirements: {job.requirements}</p>
                                <p>Location: {job.location}</p>
                                <h4>Status: In Progress</h4>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default Job_status;
