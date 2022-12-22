import React from 'react'
import  axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';
const Home=()=>{
  const[users,setUsers]=useState([])
  const got=async()=>{
    await axios.get("https://6258573d0c918296a495a609.mockapi.io/datas").then((response)=>{
      console.log(response?.data)
      setUsers(response?.data)
    })
  

 
  }
  useEffect(()=>{
    got()
  
  },[])
 
return(
<>
<div className='btn'>
  <Link to ="add"> <button type="button" class="btn btn-danger">add</button></Link>
 
  </div>
<div className='container'>
 

 <div className='wrapper'>
    <table class="table">
  <thead>
 
    <tr>
    {/* <th scope="col">#</th> */}
      <th scope="col">First</th>
      <th scope="col">gender</th>
      <th scope="col">mail</th>
      <th scope="col">dob</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
  {users.length && users.map((d,i)=>{
 return(<tr key={i}>
<td >{d.name}</td>
<td>{d.gender}</td>
<td>{d.email}</td>
<td>{d.dob}</td>
<td>{d.address}</td>
</tr>
 )
  })
}
  </tbody>
</table>
    </div>
</div>


</>
  )
}
export default Home;