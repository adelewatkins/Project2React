import { useState, useEffect } from "react";
function Buyers() {
  const [FirstName, setFirstName] = useState("");
  const [lastName, LasttName] = useState("");
  const [Address, setAddress] = useState("");
  const [Postcode, setPostcode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  return (
    <div>

      <h1>Buyers</h1>
      <form>
        <label htmlFor="fn" >First Name</label>
        <input id="fn" type="text"></input>
        <label htmlFor="ln" >Last Name</label>
        <input id="ln" type="text"></input>
        <label htmlFor="ad" >Address</label>
        <input id="ad" type="text"></input>
        <label htmlFor="pc">Postcode</label>
        <input id="pc" type="text"></input>
        <label htmlFor="pn" >Phone Number</label>
        <input id="pn" type="text"></input>
        <br />
        <button type="submit">Submit</button>

      </form>
      <br />

    </div >


  )
}

export default Buyers;
