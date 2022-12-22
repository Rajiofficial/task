import React from "react";
import { useState } from "react";
// import Home from "./Home";
import axios from "axios";
const Add = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState();
  const [address, setAddress] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(`name:${name}
           "age":${gender}
           "email":${email}
           "dob": ${dob}
           "address": ${address}`);
    // const values = {
    //   name:name,
    //   gender:gender,
    //   email:email,
    //   dob:dob,
    //   address:address,
    // };
    axios
      .post("https://6258573d0c918296a495a609.mockapi.io/datas", {name,gender,email,dob,address})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <br />
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>gender</label>
        <br />
        <input
          placeholder="gender"
          type="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />

        <label>email</label>
        <br />
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>DOB</label>
        <br />
        <input
          placeholder="dob"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />

        <label>address</label>
        <br />
        <input
          placeholder="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />

        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default Add;
