import Login from "./Pages/Login";
import Jobdata from "./Pages/Jobdata";
import { Routes,Route, Navigate  }  from "react-router-dom";
import Home from './Pages/Home';
import { useRecoilState } from 'recoil';
import userinfoAtom from "./recoil/userinfoAtom";
import Adduser from "./Components/Adduser";
import Job_status from "./Components/Job_status";
import Explorejobs from "../src/Components/Explorejobs";
import SignInForm from "./Components/SignInForm";


 const App=()=>{
  const [userinfo,setUserinfo] = useRecoilState(userinfoAtom);
 
  return (
   
      <Routes>
       {/* <Route path="/" element={<Home/>} />*/}
      
       <Route path="/" element={<Home/>} />
       <Route path="/Login" element={userinfo === true ? <Navigate to="/Jobdata" /> : <Login />} />
       <Route path="/Jobdata" element={userinfo === false ? <Jobdata /> : <Navigate to="/Login" />} />
       <Route path="/Adduser" element={<Adduser/>} />
       <Route path="/Job_status" element={<Job_status/>} />
       <Route path="/SignInForm" element={<SignInForm/>} />
       <Route path="/Explorejobs" element={<Explorejobs/>} />
       
       </Routes>
   
  );
}

export default App;

