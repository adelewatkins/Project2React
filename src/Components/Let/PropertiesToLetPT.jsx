import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import RS4 from "./RS4.png";
import confetti from "canvas-confetti";

//this is the render of the card for the properties 

function PropertiesToLetPT(props) {
  const navigate = useNavigate();
  const handleConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 320,
    });

    // above is the function that run confetti
  };
  return (
    <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
      <div className="flex">
        <div className="card-body card-text">
          <h4 className="card-title"></h4>
          <label htmlFor="pr">
            <h5>Premium Listing &nbsp;</h5>
          </label>
          <input id="pl" type="checkbox"></input>
          <br></br>
          <br></br>
          <img
            src={RS4}
            alt="RS"
            width="100%"
            height="15%"
            className="d-inline-block align-text-middle"
          />
          <br />
          <br />
          <p>{"Rent: £" + props.Rent} </p>
          <p> {"Type: " + props.Type}</p>
          <p> {"Bedrooms: " + props.Bedrooms}</p>
          <p> {"Bathrooms: " + props.Bathrooms}</p>
          <p> {"Garden: " + props.Garden}</p>
          <p> {"Address: " + props.Address}</p>
          <p> {"Postcode: " + props.Postcode}</p>
          <select>
            <option>For Let</option>
            <option>Already Let</option>
            <option>Withdrawn</option>
          </select>
          &nbsp;
          <button
          // this button below handles the booking system
            onClick={() => navigate("/PropertiesToLet/BookingLet/" + props.id)}
            type="submit"
            className="btn btn-success btn-md"
          >
            {" "}
            Book a viewing{" "}
          </button>
        </div>
      </div>
      <button className="btn btn-danger btn-md" onClick={handleConfetti}>
        LET
      </button>
    </Card>
  );
}
PropertiesToLetPT.propTypes = {
  Type: PropTypes.string.isRequired,
  Rent: PropTypes.number.isRequired,
  Bedrooms: PropTypes.number.isRequired,
  Bathrooms: PropTypes.number.isRequired,
  Garden: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  Postcode: PropTypes.string.isRequired,
};
export default PropertiesToLetPT;
