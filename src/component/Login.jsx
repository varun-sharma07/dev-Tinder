import React, { useState } from 'react'
import axios from 'axios'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Base_URL } from '../utils/constants';


const Login = () => {
  const [email, setEmailID] = useState("kittu@gmail.com");
  const [password, setPassword] = useState("Kittu@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(Base_URL+ "/login", {
        email,
        password
      }, { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="card card-dash bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">Login</h2>

        <fieldset className="fieldset" >
          <legend className="fieldset-legend">Username</legend>
          <input type="text" value={email} className="input" placeholder="Type here" onChange={(e) => setEmailID(e.target.value)} />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type="text" value={password} className="input" placeholder="Type here" onChange={(e) => setPassword(e.target.value)} />
        </fieldset>

        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login