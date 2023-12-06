import { useState, useEffect } from "react";
import axios from "axios";
import GetLet from "./GetLet";

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


        <label htmlFor="ty" >Type</label>
        <select value={Type} onChange={(e) => setType(e.target.value)} id="ty" type="text"><option value="Select Type">Select Type</option><option value="Semi-Detached">Semi-Detached</option><option value="Detached">Detached</option><option value="Terrace">Terrace</option><option value="Flat">Flat</option></select>
        <label htmlFor="pr" >Rent £</label>
        <input value={Rent} onChange={(e) => setRent(e.target.value)} id="pr" type="£"></input>
        <label htmlFor="bd" >Bedrooms</label>
        <input value={Bedrooms} onChange={(e) => setBedrooms(e.target.value)} id="bd" type="number" min={0}></input>
        <label htmlFor="bt">Bathrooms</label>
        <input value={Bathrooms} onChange={(e) => setBathrooms(e.target.value)} id="bt" type="number" min={0}></input>
        <label htmlFor="gn" >Garden</label>
        <input value={Garden} onChange={(e) => setGarden(e.target.value)} id="gn" type="checkbox"></input>
        <label htmlFor="ad" >Address</label>
        <input value={Address} onChange={(e) => setAddress(e.target.value)} id="ad" type="text"></input>
        <label htmlFor="pc" >Postcode</label>
        <input value={Postcode} onChange={(e) => setPostcode(e.target.value)} id="pc" type="text"></input>
        <br />
        <button type="submit">Submit</button>

      </form>
      <div>
        <GetLet />
      </div>

      <br />

    </div>
  )
}

export default PropertiesToLet;
