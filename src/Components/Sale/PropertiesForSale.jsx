import { useState, useEffect } from "react";
import axios from "axios";
import GetSale from "./GetSale";

function PropertiesForSale() {
  const [Type, setType] = useState("");
  const [Price, setPrice] = useState("");
  const [Bedrooms, setBedrooms] = useState("");
  const [Bathrooms, setBathrooms] = useState("");
  const [Garden, setGarden] = useState("");
  const [Address, setAddress] = useState("");
  const [Postcode, setPostcode] = useState("");


  return (
    <div>

      <h1>Properties For Sale</h1>

      <form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:3000/PropertiesForSale",
          { Type, Price:parseInt (Price), Bedrooms:parseInt (Bedrooms), Bathrooms:parseInt(Bathrooms), Garden:(Garden=="Yes"), Address, Postcode })
          .then(response => {
            setType("");
            setPrice("");
            setBedrooms("");
            setBathrooms("");
            setGarden("");
            setAddress("");
            setPostcode("");
            
          })
          .catch(err => console.error(err))
      }}>

{/* <select value={Type} onChange={(e) => setType(e.target.value)} id="ty" type="text"><option value="semi">Semi</option><option value="semi">detached</option><option value="semi">terrace</option></select> */}

        <label htmlFor="ty" >Type</label>
        <select value={Type}onChange={(e)=>setType(e.target.value)} id="ty" type="text"><option value="Select Type">Select Type</option><option value="Semi-Detached">Semi-Detached</option><option value="Detached">Detached</option><option value="Terrace">Terrace</option><option value="Flat">Flat</option></select>
        <label htmlFor="pr" >Price £</label>
        <input value={Price}onChange={(e)=>setPrice(e.target.value)} id="pr" type="£"></input>
        <label htmlFor="bd" >Bedrooms</label>
        <input value={Bedrooms}onChange={(e)=>setBedrooms(e.target.value)} id="bd" type="number" min={0}></input>
        <label htmlFor="bt">Bathrooms</label>
        <input value={Bathrooms}onChange={(e)=>setBathrooms(e.target.value)} id="bt" type="number" min={0}></input>
        <label htmlFor="gn" >Garden</label>
        <select value={Garden} onChange={(e) => setGarden(e.target.value)} id="gn" type="text"><option value="Select">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>
        <label htmlFor="ad" >Address</label>
        <input value={Address}onChange={(e)=>setAddress(e.target.value)}id="ad" type="text"></input>
        <label htmlFor="pc" >Postcode</label>
        <input value={Postcode}onChange={(e)=>setPostcode(e.target.value)} id="pc" type="text"></input>
        <br />
        <div >
        <button type="submit" className="btn btn-success btn-sm"> Add Property </button>
        </div>

      </form>
      <div>
        <GetSale />
      </div>

      <br />

    </div>

  )

}

export default PropertiesForSale;
