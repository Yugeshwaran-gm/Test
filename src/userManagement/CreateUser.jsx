import { useState } from "react"
import React  from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreateUser = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const nav = useNavigate();
  const submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/user/create",{
      name,
      age,
      email
    }).then(result=>{
      console.log(result.data);
      nav('/createUser');
    })
    .catch(err=>{
      console.log(err);
  })
}
  return (
    <><div>createUser</div>
    <h1>Create a new User</h1>
    <div>
      <form onSubmit={submit}>
        <label>Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Age</label>
        <input type="number" onChange={(e)=>setAge(e.target.value)}/><br/>
        <label>Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
          <button type="submit" >Create User</button>
      </form>
    </div>
      </>
  )
}

export default CreateUser