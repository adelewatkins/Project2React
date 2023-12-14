import { useState, useEffect } from "react";
import axios from "axios";
import GetBuyers from "./GetBuyers";

function Buyers() {
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
            .post("http://localhost:3000/Buyers", {
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
          >{" "}
          <h1>Buyers &nbsp;</h1>  
        <label htmlFor="fn">First Name &nbsp;</label>
        <input
          value={FirstName} br
          onChange={(e) => setFirstName(e.target.value)}
          id="fn"
          type="text"
          class="form-control"
        ></input>
        <br />
        <label htmlFor="ln">Last Name &nbsp;</label>
        <input
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          id="ln"
          type="text"
          class="form-control"
        ></input>
        <br />
        <label htmlFor="ad">Address &nbsp; &nbsp; &nbsp;</label>
        <input
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          id="ad"
          type="text"
          class="form-control"
        ></input>
        <br />
        <label htmlFor="pc">Postcode &nbsp;&nbsp;&nbsp;</label>
        <input
          value={Postcode}
          onChange={(e) => setPostcode(e.target.value)}
          id="pc"
          type="text"
          class="form-control"
        ></input>
        <br />
        <label htmlFor="pn">PhoneNum</label>
        <input
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="pn"
          type="tel"
          class="form-control"
        ></input>
        <br />
        <button type="submit" className="btn btn-success btn-sm">Submit</button>
      </form>
      <br />
      <br />
      <GetBuyers />
    </div>
  );
}

export default Buyers;