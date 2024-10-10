import React from 'react'
import '../Pages/styles.css'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { Link } from 'react-router-dom';


const jobData = [
    {
        company: 'Tech Innovations Inc.',
        requirements: 'Bachelor\'s degree in Computer Science, 3+ years experience in software development.',
        location: 'San Francisco, CA',
    },
    {
        company: 'Green Energy Solutions',
        requirements: 'Experience in renewable energy systems, strong analytical skills.',
        location: 'Austin, TX',
    },
    {
        company: 'Creative Agency LLC',
        requirements: 'Proficiency in Adobe Creative Suite, 2+ years in digital marketing.',
        location: 'New York, NY',
    },
    {
        company: 'Health Plus',
        requirements: 'Nursing degree, excellent communication skills.',
        location: 'Chicago, IL',
    },
    {
        company: 'Finance Corp.',
        requirements: 'Bachelor’s in Finance or related field, analytical skills required.',
        location: 'Boston, MA',
    },
];
const explorejobs = () => {
    const handleApply = (company) => {
        // Handle the application logic here (e.g., redirect to application form)
       
    };
  return (
    <div>
      <div className='explore-head'>
        <h1>Explore Jobs <ScreenSearchDesktopIcon fontSize='larger' /> </h1>
        <a href='./Jobdata'>Back to Home</a>
      </div>

      <div>
      <div className="job-list">
            <h2>Job Openings</h2>
            {jobData.map((job, index) => (
                <div key={index} className="job-item">
                    <h3>{job.company}</h3>
                    <p><strong>Requirements:</strong> {job.requirements}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <button onClick={() => handleApply(job.company)} className="btn"><Link to='/Adduser'>Apply </Link></button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default explorejobs