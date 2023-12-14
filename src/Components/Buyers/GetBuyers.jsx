import { useEffect, useState } from "react";
import axios from "axios";
import BuyersPT from "./BuyersPT";

function GetBuyers() {
  const [buyers, setBuyers] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3000/Buyers")
      .then((response) => {
        console.log("Response:", response);
        setBuyers(response.data);
        console.log("Buyers:", buyers);
      })
      .catch((err) => console.error(err));
  }, []);

  const buyerArray = [];
  for (const buyer of buyers) {
    buyerArray.push(
      <BuyersPT
        key={buyer.FirstName + " " + buyer.Postcode}
        FirstName={buyer.FirstName}
        LastName={buyer.LastName}
        Address={buyer.Address}
        Postcode={buyer.Postcode}
        PhoneNumber={buyer.PhoneNumber}
      />
    );
  }

  return (
    <div>
      <h2> A list of buyers </h2>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">{buyerArray}</div>
      </div>
    </div>
  );
}

export default GetBuyers;
