import { useEffect, useState } from "react"
import React  from 'react'
import axios from 'axios'

const User = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3000/api/user/fetch")
      .then(result=>{
        setUser(result.data.users)
    })
    }, [])
  return (
    <>
    <div>User</div>
    {/* <Link to="/createUser" className="nav-link">Create User</Link>
    <Route path="/createUser" element={<CreateUser />} /> */}
    <table border={2} style={{ margin: 20, padding: 2 }}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {user.map((user) => (
      <tr key={user.email}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
      </tr>
    ))}
    {/* <tr>
        <td></td> 
    </tr> */}
  </tbody>
</table>

    </>
  )
}

export default User