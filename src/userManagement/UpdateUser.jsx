import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
const UpdateUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const nav = useNavigate();
  const Updateus =  (e) => {
    e.preventDefault(); 
    axios.put(`http://localhost:3000/api/user/update/${email}`,{
      name,
      age,
      email
    }).then(result=>{
      console.log(result.data);
      nav('/updateUser');
    })
    .catch(err=>{
      console.log(err);
  })
}
  //   try {
  //     const response = axios.put(`http://localhost:3000/update/${id}`, { name, age, email });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <>
    <div>update User</div>
    <p>Update the user details.</p>
    <form onSubmit={Updateus}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
      <label>Age:</label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /><br/>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <button >Update</button>
    </form>
    </>
  )
}

export default UpdateUser