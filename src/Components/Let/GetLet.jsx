import { useEffect, useState } from "react";
import axios from "axios";
import PropertiesToLetPT from "./PropertiesToLetPT"

function GetLet() {
  const [letting, setLet] = useState([]);
  const [filtertyp, setFiltertyp] = useState("");
  const [filterrt, setFilterrt] = useState("");
  const [filterbds, setFilterbds] = useState("");
  const [filterbts, setFilterbts] = useState("");
  const [filtergds, setFiltergds] = useState("");
  const [filterads, setFilterads] = useState("");
  const [filterpcd, setFilterpcd] = useState("");

  useEffect(function () {
    axios
      .get("http://localhost:3000/PropertiesToLet")
      .then((response) => {
        console.log("Response:", response);
        setLet(response.data);
        console.log("let:", letting);
      })
      .catch((err) => console.error(err));
  }, []);

  const letArray = [];
  for (const plet of letting) {
    if (filtertyp && plet.Type !== filtertyp) continue;
    if (filterrt && plet.Rent > parseInt(filterrt)) continue;
    if (filterbds && plet.Bedrooms < parseInt(filterbds)) continue;
    if (filterbts && plet.Bathrooms < parseInt(filterbts)) continue;
    if (filtergds && plet.Garden !== filtergds) continue;
    if (filterads && plet.Address === filterads) continue;
    if (filterpcd && plet.Postcode === filterpcd) continue;

    letArray.push(
      <PropertiesToLetPT
        key={plet.Type + " " + plet.Rent}
        Type={plet.Type}
        Rent={plet.Rent}
        Bedrooms={plet.Bedrooms}
        Bathrooms={plet.Bathrooms}
        Garden={plet.Garden}
        Address={plet.Address}
        Postcode={plet.Postcode}
        
      />
    )
  }

  return (
    <div>
      <h2> A list of properties to let </h2>
      {letArray}
      <form>

<label htmlFor="ty" >Type</label>
<input value={filtertyp}onChange={(event)=>setFiltertyp(event.target.value)} id="ty" type="text"></input>
<label htmlFor="rt" >Rent £</label>
<input value={filterrt} onChange={(event) => setFilterrt(event.target.value)} id="pr" type="£"></input>
<label htmlFor="bd" >Min Bedrooms</label>
<input value={filterbds} onChange={(event) => setFilterbds(event.target.value)} id="bd" type="number" min={0}></input>
<label htmlFor="bt">Bathrooms</label>
<input value={filterbts} onChange={(event) => setFilterbts(event.target.value)} id="bt" type="number" min={0}></input>
<label htmlFor="gn" >Garden</label>
<input value={filtergds} onChange={(event) => setFiltergds(event.target.value)} id="gn" type="text"></input>
<label htmlFor="ad" >Address</label>
<input value={filterads} onChange={(event) => setFilterads(event.target.value)} id="ad" type="text"></input>
<label htmlFor="pc" >Postcode</label>
<input value={filterpcd} onChange={(event) => setFilterpcd(event.target.value)} id="pc" type="text"></input>
<br />
<button type="search" className="btn btn-danger btn-sm"> Clear </button>
</form>
    </div>
  );
}

export default GetLet;
