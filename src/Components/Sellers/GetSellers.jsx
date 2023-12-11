import { useEffect, useState } from "react";
import SellersPT from "./SellersPT";
import axios from "axios";

function GetSellers() {
  const [sellers, setSellers] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3000/sellers")
      .then((response) => {
        console.log("Response:", response);
        setSellers(response.data);
        console.log("Sellers:", sellers);
      })
      .catch((err) => console.error(err));
  }, []);

  const sellerArray = [];
  for (const seller of sellers) {
    sellerArray.push(
      <SellersPT
        key={seller.FirstName + " " + seller.Postcode}
        FirstName={seller.FirstName}
        LastName={seller.LastName}
        Address={seller.Address}
        Postcode={seller.Postcode}
        PhoneNumber={seller.PhoneNumber}
      />
    );
  }

  return (
    <div>
      <h2> A list of sellers </h2>
      <div className="container-fluid">
        <div className="row">{sellerArray}</div>
    </div>
    </div>
  );
}

export default GetSellers;
