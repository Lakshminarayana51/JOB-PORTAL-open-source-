import React, { useRef, useState } from 'react';
import './SignInForm.css';
import userinfoAtom from '../recoil/userinfoAtom';

const SignInForm = () => {
  const [usernameRef, setUsernameRef] = useRef('');
  const [passwordRef, setPasswordRef] = useRef('');
  const [userinfo, setUserinfo] = useRecoilState(userinfoAtom);
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Basic form validation (optional)
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/create_user', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Set error message from backend
      } else {
        const data = await response.json();
        if (data.message === 'User created') {
          alert('User created successfully!');
          localStorage.setItem('userStatus', true);
          setUserinfo(true);
          // Clear error message on success
          setErrorMessage(null);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred during sign-in. Please try again.'); // Generic error message for user
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <div className="error-message">{errorMessage}</div>}  {/* Display error message */}
        <div className="form-group">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            ref={usernameRef}
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
          />
        </div>
        <button type="submit" className="submit-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;