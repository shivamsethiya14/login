import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
 const navigate=useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
       if(Cookies.get("token") != null){
        const response = await axios.get('http://localhost:8000/api/users/');
        // console.log(response.data.alluser);
        setUsers(response.data.alluser);
       }else{
        navigate("/sigin")
       }
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <table border="2">
        <thead>
          <tr>
          <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td><img style={{width:"50px"}} src={`http://localhost:8000/${user.
proflieImageUrl}`}  alt="" /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
