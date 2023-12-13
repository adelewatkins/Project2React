import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


function BookingSale(props) {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Date, setDate] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");
  const [sale, setBookingSale] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3000/PropertiesForSale/BookingSale/:id")
      .then((response) => {
        console.log("Response:", response);
        setBookingSale(response.data);
        // console.log("sale:", sale);
      })
      .catch((err) => console.error(err));
  }, []);
  
  const saleArray = [];
  for (const bsale of sale)
  saleArray.push(
    <BookingSale
      key={bsale.id}
      Name={bsale.Name}
      Email={bsale.Email}
      PhoneNumber={bsale.PhoneNumber}
      Date={bsale.Date}
      TimeSlot={bsale.TimeSlot}
    
      id={bsale.id}
    />
  );



  return (
    <div>
      <h1>Bookings</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3000/PropertiesForSale/BookingSale/:id" , {
              Name,
              Email,
              PhoneNumber,
              Date,
              TimeSlot,
              
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
      {/* <BookingLet /> */}

      <Card className="col-sm-6 col-md-4 col-lg-3 m-auto">
        <div className="flex">
        <div className="card-body card-text">
        <h4 className="card-title"></h4>
        {" "}
                    <img src="https://cdn2-property.estateapps.co.uk/files/property/107/image/437868/437868_1347858_IMAGES_MAIN_4378681.jpg" className="card-image" alt="house stock" />
                        <p>{"Name: " +props.Name} </p>
                        <p> {"Email:" +props.Email}</p>
                        <p> {"Phone Number: "+props.PhoneNumber}</p>
                        <p> {"Date:" +props.Date}</p>
                        <p> {"Time Slot:" +props.TimeSlot}</p>
                    
                  </div>
                    </div>
                    </Card>


    </div>
  );
}

BookingSale.propTypes = {
  Name: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  PhoneNumber: PropTypes.number.isRequired,
  Date: PropTypes.string.isRequired,
  TimeSlot: PropTypes.string.isRequired,
  }

export default BookingSale;
