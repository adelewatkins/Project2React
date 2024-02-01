import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";


function BookingLet() {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [letBooking, setLetBookings] = useState([]);
  const [letProperty, setLetProperty] = useState();

  // set the property and retrieve the property by ID from the PTL page
  useEffect(function () {
    axios
      .get("http://localhost:8082/PLet/get/" + params.id)
      .then((response) => {
        console.log("Response:", response);
        setLetProperty(response.data);
        // console.log("sale:", sale);
      })
      .catch((err) => console.error(err));

  }, []);
  console.log(letProperty)


  return (
    <div>
      <h1>Bookings to Let</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            // posting the updated booikng info
            .post("http://localhost:8082/BLet/create", {
              name,
              email,
              phoneNumber,
              date,
              timeSlot,
              propertiesToLet: { id: params.id }

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
        {/* this is the booking imput form to submit a booking  */}

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

                {/* this Calls a defined callback function on each element of an array, 
                  and returns an array that contains the results.  */}

                {letProperty?.bookingForLets.map(book => (<tr key={book.id}>
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
export default BookingLet;