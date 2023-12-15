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

  // set the property and retrieve the property by ID from the PTL page
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
      // get request from the server
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
      <h1>Bookings to Let</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
          // posting the updated booikng info
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
        {/* this is the booking imput form to submit a booking  */}

        <label htmlFor="fn">Full Name &nbsp;</label>
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
      <br />
      <br />

      
  <h3>Current Bookings</h3>
  {
    letBooking.length > 0 ?
     
     (
        <Card >
               <table>
                <thead>
                  <tr>
                    <th>
                      Full Name
                    </th>
                    <br />
                    <th>
                      Email
                    </th>
                    <br />
                    <th>
                      Phone Number
                    </th>
                    <br />
                    <th>
                      Date                
                      </th>
                      <br />
                    <th>
                      Time Slot
                    </th>
                    <br />
                    <th>
                      Property
                    </th>
                    <br />
                  </tr>
                </thead>
                <tbody className="table-group-divider">

                  {/* this Calls a defined callback function on each element of an array, 
                  and returns an array that contains the results.  */}

                  {letBooking.map(book => (<tr key={book.id}>
                    <td> {book.Name}</td>
                    <br />
                    <td> {book.Email}</td>
                    <br />
                    <td> {book.PhoneNumber}</td>
                    <br />
                    <td> {book.Date}</td>
                    <br />
                    <td> {book.TimeSlot}</td>
                    <br />
                    <td> {book.letProperty}</td>
                    <br />
                  </tr>
                  ))}
                </tbody>
              </table>
             </Card>
            )
         
            : <p>No bookings available.</p>
                  }  
        
      </div>

  );
}
export default BookingLet;