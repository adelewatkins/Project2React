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
    <div className="row">
      <div className="col">

      

      <form
      
        className="drop-menu"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3000/PropertiesToLet", {
              Type,
              Rent: parseInt(Rent),
              Bedrooms: parseInt(Bedrooms),
              Bathrooms: parseInt(Bathrooms),
              Garden: parseInt(Garden),
              Address,
              Postcode,
            })

            .then((response) => {
              setType("");
              setRent("");
              setBedrooms("");
              setBathrooms("");
              setGarden("");
              setAddress("");
              setPostcode("");
            })
            .catch((err) => console.error(err));
        }}
      >
        <h1>Properties To Let </h1>
        <label htmlFor="ty">Type</label>
        <select
          value={Type}
          onChange={(e) => setType(e.target.value)}
          id="ty"
          type="text"
          className="form-control"
        >
          <option value="Select Type" selectDefault>
            Select Type
          </option>
          <option value="Semi-Detached">Semi-Detached</option>
          <option value="Detached">Detached</option>
          <option value="Terrace">Terrace</option>
          <option value="Flat">Flat</option>
        </select>

        <label htmlFor="pr">Rent £</label>
        <input
          value={Rent}
          onChange={(e) => setRent(e.target.value)}
          id="pr"
          type="£"
          className="form-control"
        ></input>
        <label htmlFor="bd">Bedroom</label>
        <input
          value={Bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          id="bd"
          type="number"
          min={0}
          className="form-control"
        ></input>
        <label htmlFor="bt">Bathroom</label>
        <input
          value={Bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          id="bt"
          type="number"
          min={0}
          className="form-control"
        ></input>

        <label htmlFor="gn">Garden</label>
        <select
          value={Garden}
          onChange={(e) => setGarden(e.target.value)}
          id="gn"
          type="text"
          className="form-control"
        >
          <option value="Select">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label htmlFor="ad">Address</label>
        <input
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          id="ad"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="pc">Postcode</label>
        <input
          value={Postcode}
          onChange={(e) => setPostcode(e.target.value)}
          id="pc"
          type="text"
          className="form-control"
        ></input>
        <br />
        <div>
          <button type="submit" className="btn btn-success btn-md">
            {" "}
            Add Property{" "}
          </button>
        </div>
      </form>
      </div>
      
      
        <GetLet />
      

      <br />
      
    </div>
  );
}

export default PropertiesToLet;
