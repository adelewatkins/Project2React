import { useState, useEffect } from "react";
import axios from "axios";


function Sellers() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [Postcode, setPostcode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  return(

    <div>
    <h1>Sellers</h1>
      <form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:3000/Sellers",
          { FirstName, LastName, Address, Postcode, PhoneNumber })
          .then(response => {
            setFirstName("");
            setLastName("");
            setAddress("");
            setPostcode("");
            setPhoneNumber("");
          })
          .catch(err => console.error(err))
      }}>

        <label htmlFor="fne" >First Name</label>
        <input id="fne" type="text"></input>
        <label htmlFor="lne" >Last Name</label>
        <input id="lne" type="text"></input>
        <label htmlFor="add" >Address</label>
        <input id="add" type="text"></input>
        <label htmlFor="pce">Postcode</label>
        <input id="pce" type="text"></input>
        <label htmlFor="pnr" >Phone Number</label>
        <input id="pnr" type="tel"></input>
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>
    
 )
}

export default Sellers;
