import { useEffect, useState } from "react";
import axios from "axios";
import PropertiesToLetPT from "./PropertiesToLetPT"

function GetLet() {
  const [letting, setLet] = useState([]);
//   const [filter, setFilter] = useState("");

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
    // if(filter.length === 0 || )
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
    );
  }

  return (
    <div>
      <h2> A list of properties to let </h2>
      {letArray}
    </div>
  );
}

export default GetLet;
