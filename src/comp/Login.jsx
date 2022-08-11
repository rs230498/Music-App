import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useLocation, useNavigate } from 'react-router-dom';
import { login } from '../redux/auth/action';
import { USER_LOGIN_SUCCESS } from '../redux/auth/actiontype';

const Login = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const comingfrom = location.state?.from?.pathname || "/"
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email && password )
    {
      dispatch(login({email,password}))
      .then((r)=>{
        if(r.type === USER_LOGIN_SUCCESS)
        {
          navigate(comingfrom,{replace:true})
        }
      })
    }
   };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
)};

export default Login