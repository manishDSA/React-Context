import React, { useContext, useState } from 'react';
import UserContext from '../context/UseContext';

const Login = () => {
    const[userName,setuserName] = useState('')
    const[userPassword,setuserPassword] = useState('')
    //here we send the value in the store 
    const {setUser} =useContext(UserContext)

    const handleClick = (e)=>{
    e.preventDefault();
    setUser({userName,userPassword})
    }
    return (
    <div>
      <h1>Login Card</h1>
      <input
      type='text'
      value={userName}
      onChange={(e)=>setuserName(e.target.value)}
      placeholder='username '
    
      />
      {" "}
       <input
      type='password'
      value={userPassword}
      onChange={(e)=>setuserPassword(e.target.value)}
      placeholder='Enter Password '
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Login;
