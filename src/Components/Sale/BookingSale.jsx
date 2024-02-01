import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";


function BookingSale() {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [booking, setBookings] = useState([]);
  const [property, setProperty] = useState();


  useEffect(function () {
    axios
      .get("http://localhost:8082/PSale/get/" + params.id)
      .then((response) => {
        console.log("Response:", response);
        setProperty(response.data);
        // console.log("sale:", sale);
      })
      .catch((err) => console.error(err));

  }, []);
  console.log(property)


  return (
    <div>
      <h1>Bookings for Sale</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submission successful")
          axios
            .post("http://localhost:8082/BSale/create", {
              name,
              email,
              phoneNumber,
              date,
              timeSlot,
              propertiesForSale: { id: params.id }
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
        <label htmlFor="fn">Full Name &nbsp;</label>
        <input
          value={name}
          br
          onChange={(e) => setName(e.target.value)}
          id="fn"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="ln">Email &nbsp;</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="ln"
          type="email"
          className="form-control"
        ></input>
        <label htmlFor="ad">Phone Number &nbsp; &nbsp; &nbsp;</label>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="ad"
          type="tel"
          className="form-control"
        ></input>
        <label htmlFor="pc">Date &nbsp;&nbsp;&nbsp;</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="pc"
          type="date"
          className="form-control"
        ></input>
        <label htmlFor="pn">Time Slot</label>
        <input
          value={timeSlot}
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
      <br />
      <br />

      <h3>Current Bookings</h3>
      {


        (
          <Card >
            <table>
              <thead>
                <tr>
                  <th>
                    Full Name
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Phone Number
                  </th>

                  <th>
                    Date
                  </th>

                  <th>
                    Time Slot
                  </th>

                </tr>
              </thead>
              <tbody className="table-group-divider">
                {property?.bookingForSales.map(book => (<tr key={book.id}>
                  <td> {book.name}</td>

                  <td> {book.email}</td>

                  <td> {book.phoneNumber}</td>

                  <td> {book.date}</td>

                  <td> {book.timeSlot}</td>

                </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )

      }

    </div>

  );
}
export default BookingSale;