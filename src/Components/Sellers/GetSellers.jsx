import { useEffect, useState } from "react";
import SellersPT from "./SellersPT";
import axios from "axios";

function GetSellers() {
  const [sellers, setSellers] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:8082/sellers/get")
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
        key={seller.firstName + " " + seller.postcode}
        FirstName={seller.firstName}
        LastName={seller.lastName}
        Address={seller.address}
        Postcode={seller.postcode}
        PhoneNumber={seller.phoneNumber}
      />
    );
  }

  return (
    <div>
      <h2> A list of sellers </h2>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">{sellerArray}</div>
    </div>
    </div>
  );
}

export default GetSellers;
