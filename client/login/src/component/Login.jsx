
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import account from "../assets/account.png";

import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
 
  const navigate = useNavigate();


  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const fetchData = await axios.post("http://localhost:8000/api/users/login",{ email,password});
   
      setEmail("");
      setPassword("");
     
      localStorage.setItem('Token', fetchData?.data.token);
      // dispatch(login());
      navigate("/");
      console.log("Login successful");
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    navigate("/Sigin");
  };

  return (
    <>
      <form
      className="bg-slate-200 w-2/3 mx-auto mt-6 my-5 rounded-md md:w-1/4"
        onSubmit={handleSumbit}>
        
      
        <img className="m-auto pt-5" src={account} alt="Logo" />

        <div className="mx-auto flex flex-col">
        <label htmlFor="email" className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-">Email:</label>
          <input
            className="rounded-md mx-[10%] my-2 border-none outline-none"
            type="email" // Use type="email" for the email input
            placeholder=" Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <div className="mx-auto flex flex-col">
          <label htmlFor="password" className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-">Password:</label>
            <input
          className="rounded-md mx-[10%] my-2 border-none outline-none"
              type={ShowPassword ? "text" : "password"} // Fix the attribute name
              placeholder=" Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          
          </div>

          <button className="bg-green-400 rounded-sm mx-[35%] mt-5 mb-3 text-sm md:text-lg">
            Submit
          </button>
          <p className="text-center mb-1">
            New user?{" "}
            <button
              className="hover:text-blue-600 underline"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </p>
         
        </div>
        </form>
    </>
  );
};

export default Login;
