
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import account from "../assets/account.png";

import axios from "axios";



const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const fetchData = await axios.post("http://localhost:8000/api/users/sigin/", {
        name,
        email,
        password,
        phone,
        address,
        dob,
        // role,
      });
      console.log(fetchData.data);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
   
    } catch (error) {
      console.error(error);
    }
    
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <form
        className="bg-slate-300 w-2/3 mx-auto mt-6 my-5 rounded-md md:w-1/4"
        onSubmit={handleSubmit}
      >
        <img className="m-auto pt-5" src={account} alt="Logo" />

        <div className="mx-auto flex flex-col">
        <label htmlFor="name" className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-">name</label>
          <input
            className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-">email</label>

          <input
            className="rounded-md mx-[10%] my-2 outline-none border border-gray-400"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         
          <label htmlFor="name" className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-">Password:</label>

            <input
             className="rounded-md mx-[10%] my-2 outline-none border border-gray-400"
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
     <label htmlFor="dob" className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-">Date of Birth:</label>
           <input
           className="rounded-md mx-[10%] my-2 outline-none border border-gray-400"
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
       
          {/* <input
            className="rounded-md mx-[10%] my-2 outline-none border border-gray-400 cursor-pointer-"
            type="text"
            placeholder="Role- Enter 1 for Admin/0 for user"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          /> */}

          <button className="bg-green-400 rounded-sm mx-[35%] mt-5 mb-3 text-sm md:text-lg">
            Submit
          </button>
          <p className="text-center mb-1">
            Already have an account?{" "}
            <button
              className="hover:text-blue-600 underline"
              onClick={handleClick}
            >
              Login
            </button>{" "}
          </p>
          {/* <p className="hover:text-blue-600 underline text-center text-sm mb-10">
            Sign in with Google
          </p> */}
        </div>
      </form>
    </>
  );
};

export default Signup;
