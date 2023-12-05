import { useState, useEffect } from "react";
import axios from "axios";

function PropertiesToLet() {
  const [Type, setType] = useState("");
  const [Rent, setRent] = useState("");
  const [Bedrooms, setBedrooms] = useState("");
  const [Bathrooms, setBathrooms] = useState("");
  const [Garden, setGarden] = useState("");
  const [Address, setAddress] = useState("");
  const [Postcode, setPostcode] = useState("");


  return (
    <div>

    <h1>Properties To Let </h1>

    <form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:3000/PropertiesToLet",
          { Type, Rent, Bedrooms, Bathrooms, Garden, Address, Postcode })
          .then(response => {
            setType("");
            setRent("");
            setBedrooms("");
            setBathrooms("");
            setGarden("");
            setAddress("");
            setPostcode("");
            
          })
          .catch(err => console.error(err))
      }}>


      <label htmlFor="typ" >Type</label>
      <input id="typ" type="text"></input>
      <label htmlFor="re" >Rent</label>
      <input id="re" type="£"></input>
      <label htmlFor="bdr" >Bedrooms</label>
      <input id="bdr" type="number" min={0}></input>
      <label htmlFor="btr">Bathrooms</label>
      <input id="btr" type="number" min={0}></input>
      <label htmlFor="gar" >Garden</label>
      <input id="gar" type="text"></input>
      <label htmlFor="add" >Address</label>
      <input id="add" type="text"></input>
      <label htmlFor="pcd" >Postcode</label>
      <input id="pcd" type="text"></input>
      <br />
      <button type="submit">Submit</button>

    </form>

    <br />

  </div>
  )
}

export default PropertiesToLet;
