import { useEffect, useState } from "react";
import axios from "axios";
import PropertiesForSalePT from "./PropertiesForSalePT"

function GetSale() {
  const [sale, setSale] = useState([]);
//   const [filter, setFilter] = useState("");

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
    // if(filter.length === 0 || )
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
      <h2> A list of properties for sale </h2>
      {saleArray}
    </div>
  );
}

export default GetSale;
