import { useState, useEffect } from "react";
import axios from "axios";
import GetSellers from "./GetSellers";

function Sellers() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [Postcode, setPostcode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3000/Sellers", {
              FirstName,
              LastName,
              Address,
              Postcode,
              PhoneNumber,
            })
            .then((response) => {
              setFirstName("");
              setLastName("");
              setAddress("");
              setPostcode("");
              setPhoneNumber("");
            })
            .catch((err) => console.error(err));
        }}
      >
        {" "}
        <h1>Sellers &nbsp;</h1>
        <label htmlFor="fn">First Name &nbsp;</label>
        <input
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="fn"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="ln">Last Name &nbsp;</label>
        <input
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          id="ln"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="ad">Address &nbsp; &nbsp; &nbsp;</label>
        <input
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          id="ad"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="pc">Postcode &nbsp;&nbsp;&nbsp;</label>
        <input
          value={Postcode}
          onChange={(e) => setPostcode(e.target.value)}
          id="pc"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="pn">Phone Number</label>
        <input
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="pn"
          type="tel"
          className="form-control"
        ></input>
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Submit
        </button>
        <br />
      </form>
      <br />
      <br />
      <div>
        <GetSellers />
      </div>
    </div>
  );
}

export default Sellers;
