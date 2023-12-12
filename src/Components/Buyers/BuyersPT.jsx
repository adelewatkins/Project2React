import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function BuyersPT(props) {
  return (
    <Card className="col-sm-6 col-md-4 col-lg-3 m-auto">
      <div className="flex">
        <div className="card-body card-text">
          <h4 className="card-title">
            {" "}
            <img
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
              alt="avatar"
              className="card-image"
            />
            {props.FirstName} {props.LastName}
          </h4>
          <p>{props.Address}</p>
          <p>{props.Postcode}</p>
          <p>{props.PhoneNumber}</p>
        </div>
      </div>
    </Card>
  );
}
BuyersPT.propTypes = {
  FirstName: PropTypes.string.isRequired,
  LastName: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  Postcode: PropTypes.string.isRequired,
  PhoneNumber: PropTypes.number.isRequired,
};

export default BuyersPT;
