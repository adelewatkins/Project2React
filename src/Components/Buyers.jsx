import { useState, useEffect } from "react";
import axios from "axios";

function Buyers() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [Postcode, setPostcode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  return (
    <div>

      <h1>Buyers</h1>
      <form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:3000/Buyers",
          { FirstName, LastName, Address, Postcode, PhoneNumber, })
          .then(response => {
            setFirstName("");
            setLastName("");
            setAddress("");
            setPostcode("");
            setPhoneNumber("");
          })
          .catch(err => console.error(err))
      }}>

        <label htmlFor="fn" >First Name</label>
        <input id="fn" type="text"></input>
        <label htmlFor="ln" >Last Name</label>
        <input id="ln" type="text"></input>
        <label htmlFor="ad" >Address</label>
        <input id="ad" type="text"></input>
        <label htmlFor="pc">Postcode</label>
        <input id="pc" type="text"></input>
        <label htmlFor="pn" >Phone Number</label>
        <input id="pn" type="tel"></input>
        <br />
        <button type="submit">Submit</button>

      </form>
      <br />

    </div >


  )
}

export default Buyers;
