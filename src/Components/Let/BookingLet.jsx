import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";


function BookingLet() {
  const navigate = useNavigate();
  const params = useParams();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Date, setDate] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");
  const [letBooking, setLetBookings] = useState([]);
  const [letProperty, setLetProperty] = useState();

  
  useEffect(function () {
    axios
      .get("http://localhost:3000/PropertiesToLet/" + params.id)
      .then((response) => {
        console.log("Response:", response);
        setLetProperty(response.data);
        // console.log("sale:", sale);
      })
      .catch((err) => console.error(err));
      axios
      .get("http://localhost:3000/bookingForLet")
      .then((response)=>{
        console.log("Response:", response);
        setLetBookings(response.data);
        console.log("booking:", letBooking)
      })
  }, []);
  console.log(letProperty)


  return (
    <div>
      <h1>Bookings</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3000/bookingForLet", {
              Name,
              Email,
              PhoneNumber,
              Date,
              TimeSlot,
              letProperty: params.id
              
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
          onChange={(e) =>  setEmail(e.target.value)}
          id="ln"
          type="email"
          className="form-control"
        ></input>
        <label htmlFor="ad">Phone Number &nbsp; &nbsp; &nbsp;</label>
        <input
          value={PhoneNumber}
          onChange={(e) =>  setPhoneNumber(e.target.value)}
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
  {(() => {
    if (letBooking.length > 0  ) {
     
      return (
        <Card>
          <ul>
            {letBooking.map((book) => (
              <li >
                <strong>Name:</strong> {book.Name}, &nbsp;
                <strong>Email:</strong> {book.Email}, &nbsp;
                <strong>Phone Number:</strong> {book.PhoneNumber}, &nbsp;
                <strong>Date:</strong> {book.Date}, &nbsp;
                <strong>Time Slot:</strong> {book.TimeSlot}&nbsp;
                <strong>Property:</strong> {book.letProperty}
              </li>
            ))}
          </ul>
        </Card>
      );
    } else {
      return <p>No bookings available.</p>;
    }
  })()}
</div>
    </div>
  );
}

export default BookingLet;
