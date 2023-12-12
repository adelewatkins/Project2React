import { useEffect, useState } from "react";
import axios from "axios";
import PropertiesForSalePT from "./PropertiesForSalePT";
import { useNavigate } from "react-router-dom";

function GetSale() {
  const [sale, setSale] = useState([]);
  const [filterty, setFilterty] = useState("");
  const [filterpr, setFilterpr] = useState("");
  const [filterbd, setFilterbd] = useState("");
  const [filterbt, setFilterbt] = useState("");
  const [filtergd, setFiltergd] = useState("");
  const [filterad, setFilterad] = useState("");
  const [filterpc, setFilterpc] = useState("");
  // const navigate = useNavigate();

  useEffect(function () {
    axios
      .get("http://localhost:3000/PropertiesForSale")
      .then((response) => {
        console.log("Response:", response);
        setSale(response.data);
        console.log("sale:", sale);
      })
      .catch((err) => console.error(err));
  }, []);

  const saleArray = [];
  for (const psale of sale) {
    if (filterty && psale.Type !== filterty) continue;
    if (filterpr && psale.Price > parseInt(filterpr)) continue;
    if (filterbd && psale.Bedrooms < parseInt(filterbd)) continue;
    if (filterbt && psale.Bathrooms < parseInt(filterbt)) continue;
    if (filtergd && psale.Garden !== filtergd) continue;
    if (filterad && psale.Address === filterad) continue;
    if (filterpc && psale.Postcode === filterpc) continue;

    saleArray.push(
      <PropertiesForSalePT
        key={psale.Type + " " + psale.Price}
        Type={psale.Type}
        Price={psale.Price}
        Bedrooms={psale.Bedrooms}
        Bathrooms={psale.Bathrooms}
        Garden={psale.Garden}
        Address={psale.Address}
        Postcode={psale.Postcode}
      />
    );
  }

  return (
    <div>
      <br></br>

      <form className="drop-menu">
        <label htmlFor="ty">Type</label>
        <input
          value={filterty}
          onChange={(event) => setFilterty(event.target.value)}
          id="ty"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="pr">Price £</label>
        <input
          value={filterpr}
          onChange={(event) => setFilterpr(event.target.value)}
          id="pr"
          type="£"
          class="form-control"
        ></input>
        <label htmlFor="bd">Bedrooms</label>
        <input
          value={filterbd}
          onChange={(event) => setFilterbd(event.target.value)}
          id="bd"
          type="number"
          min={0}
          class="form-control"
        ></input>
        <label htmlFor="bt">Bathrooms</label>
        <input
          value={filterbt}
          onChange={(event) => setFilterbt(event.target.value)}
          id="bt"
          type="number"
          min={0}
          class="form-control"
        ></input>
        <label htmlFor="gn">Garden</label>
        <input
          value={filtergd}
          onChange={(event) => setFiltergd(event.target.value)}
          id="gn"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="ad">Address</label>
        <input
          value={filterad}
          onChange={(event) => setFilterad(event.target.value)}
          id="ad"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="pc">Postcode</label>
        <input
          value={filterpc}
          onChange={(event) => setFilterpc(event.target.value)}
          id="pc"
          type="text"
          class="form-control"
        ></input>
        <br />
        <button type="search" className="btn btn-danger btn-md">
          {" "}
          Clear{" "}
        </button>
      </form>
      <h2> Show Properties for Sale</h2>
      <div className="container-fluid">
        <div className="row">{saleArray}</div>
      </div>
    </div>
  );
}

export default GetSale;
