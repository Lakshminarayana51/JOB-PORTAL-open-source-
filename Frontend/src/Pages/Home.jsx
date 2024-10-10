import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Importing the CSS file

const Home = () => { 
  return (
   
    < div className="home-container" >
   
      <div className='head-container'><h1>Welcome to Job Portal</h1>
      <p>Your gateway to new opportunities!</p>
      <Link to="/Login" className="login-btn">Sign In</Link>
       </div></div>
  );
}

export default Home;
