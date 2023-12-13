import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";


function BookingSale() {
  const navigate = useNavigate();
  const params = useParams();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Date, setDate] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");
  const [booking, setBookings] = useState([]);
  const [property, setProperty] = useState();


  useEffect(function () {
    axios
      .get("http://localhost:3000/PropertiesForSale/" + params.id)
      .then((response) => {
        console.log("Response:", response);
        setProperty(response.data);
        // console.log("sale:", sale);
      })
      .catch((err) => console.error(err));
      axios
      .get("http://localhost:3000/bookingForSale")
      .then((response)=>{
        console.log("Response:", response);
        setBookings(response.data);
        console.log("booking:", booking)
      })
  }, []);
  console.log(property)
  // const saleArray = [];

  // const bookingArray = [];
  // for (const book of booking) {
  //   bookingArray.push(
  //       key={book.id},
  //       Name={book.Name}
  //       LastName={seller.LastName}
  //       Address={seller.Address}
  //       Postcode={seller.Postcode}
  //       PhoneNumber={seller.PhoneNumber}


  return (
    <div>
      <h1>Bookings</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submission successful")
          axios
            .post("http://localhost:3000/bookingForSale", {
              Name,
              Email,
              PhoneNumber,
              Date,
              TimeSlot,
              property: params.id
            })

            .then((response) => {
              setName("");
              setEmail("");
              setPhoneNumber("");
              setDate("");
              setTimeSlot("");


            })
            .catch((err) => console.error(err));
        }}
      >
        <label htmlFor="fn">Name &nbsp;</label>
        <input
          value={Name}
          br
          onChange={(e) => setName(e.target.value)}
          id="fn"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="ln">Email &nbsp;</label>
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          id="ln"
          type="email"
          className="form-control"
        ></input>
        <label htmlFor="ad">Phone Number &nbsp; &nbsp; &nbsp;</label>
        <input
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="ad"
          type="tel"
          className="form-control"
        ></input>
        <label htmlFor="pc">Date &nbsp;&nbsp;&nbsp;</label>
        <input
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          id="pc"
          type="date"
          className="form-control"
        ></input>
        <label htmlFor="pn">Time Slot</label>
        <input
          value={TimeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          id="pn"
          type="time"
          className="form-control"
        ></input>
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Submit
        </button>
        
      </form>
      <div>
  <h3>Current Bookings</h3>
  {booking.length > 0 && booking[0].property === params.id ? (
    <Card>
      <p>
        <strong>Name:</strong> {booking[0].Name}, &nbsp;
        <strong>Email:</strong> {booking[0].Email}, &nbsp;
        <strong>Phone Number:</strong> {booking[0].PhoneNumber}, &nbsp;
        <strong>Date:</strong> {booking[0].Date}, &nbsp;
        <strong>Time Slot:</strong> {booking[0].TimeSlot}
      </p>
    </Card>
  ) : (
    <p>No bookings available for this property.</p>
  )}
</div>
</div>

);
}
export default BookingSale;
