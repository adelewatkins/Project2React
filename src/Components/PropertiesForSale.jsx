import { useState, useEffect } from "react";
import axios from "axios";

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
          { Type, Price, Bedrooms, Bathrooms, Garden, Address, Postcode })
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



        <label htmlFor="ty" >Type</label>
        <input id="ty" type="text"></input>
        <label htmlFor="pr" >Price</label>
        <input id="pr" type="£"></input>
        <label htmlFor="bd" >Bedrooms</label>
        <input id="bd" type="number" min={0}></input>
        <label htmlFor="bt">Bathrooms</label>
        <input id="bt" type="number" min={0}></input>
        <label htmlFor="gn" >Garden</label>
        <input id="gn" type="text"></input>
        <label htmlFor="ad" >Address</label>
        <input id="ad" type="text"></input>
        <label htmlFor="pc" >Postcode</label>
        <input id="pc" type="text"></input>
        <br />
        <button type="submit">Submit</button>

      </form>

      <br />

    </div>

  )

}

export default PropertiesForSale;
