import PropTypes from "prop-types";

function PropertiesToLetPT(props) {
    return (
        <div>
            <p> {props.Type}</p>
            <p>{props.Rent}</p>
            <p> {props.Bedrooms}</p>
            <p> {props.Bathrooms}</p>
            <p> {props.Garden}</p>
            <p> {props.Address}</p>
            <p> {props.Postcode}</p>

        </div>
    );
}
PropertiesToLetPT.propTypes = {
    Type: PropTypes.string.isRequired,
    Rent: PropTypes.number.isRequired,
    Bedrooms: PropTypes.number.isRequired,
    Bathrooms: PropTypes.number.isRequired,
    Garden: PropTypes.bool.isRequired,
    Address: PropTypes.string.isRequired,
    Postcode: PropTypes.string.isRequired,
}
export default PropertiesToLetPT;