
import userinfoAtom from '../recoil/userinfoAtom';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import './Logined.css';



const LoginCard=()=> {

const [userinfo,setUserinfo] = useRecoilState(userinfoAtom);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  

  //const [userinfo,setUserinfo]=useRecoilState(userinfoAtom);
  const onSubmit = (e) => {
    e.preventDefault();
   
    const usercerdentials = {
      username: usernameRef?.current?.value,
      password: passwordRef?.current?.value,
    };
    fetch('http://127.0.0.1:8000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usercerdentials)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if ( data?.message === 'successful') {
           alert('Logined successful!');
          localStorage.setItem('userStatus', true);        
          setUserinfo(true);
        }
        else if (data?.message === "User doesn't exist!") {
            alert('User doesnot exist!!');
            localStorage.setItem('userStatus',false);
            setUserinfo(false);
        }
        else if (data?.message === "wrong credentials") {
          alert('you have entered wrong password!');
          localStorage.setItem('userStatus',false);
          setUserinfo(false);
        }
        else {
          localStorage.setItem('userStatus',true);
        }
        }

      )

      .catch((error) => {
        console.log('Error', error);
      });
    }
  return (
    <> 
      <div className='Head'> Job Search Area </div>
     
      <div className="login-wrapper">
        <div className="login-card-container">
          <h1 className="login-heading"> JobPortal </h1>
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <label className='username' >Username</label>
              <input
                className="login-inputs"
               
                type="text"
                placeholder="Enter your username"
                ref={usernameRef}
                
                
              />
            </div>
            <div className="input-group">
              <label className='password' >Password</label>
              <input
                className="login-inputs"
                
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
                
              />
            </div>
            <button 
     className="login-button" 
    type="submit"
    onSubmit={onSubmit} 
>
    Login
</button>
          </form>
          <p className="login-footer">Don't have an account? <a href="/SignInForm">Sign Up</a></p>
        </div>
      </div>
     
    </>
  );
}

export default LoginCard; 

