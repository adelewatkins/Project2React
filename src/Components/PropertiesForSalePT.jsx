import PropTypes from "prop-types";

function PropertiesForSalePT(props) {
    return (
        <div>
            <p> {props.Type}</p>
            <p>{props.Price}</p>
            <p> {props.Bedrooms}</p>
            <p> {props.Bathrooms}</p>
            <p> {props.Garden}</p>
            <p> {props.Address}</p>
            <p> {props.Postcode}</p>

        </div>
    );
}
PropertiesForSalePT.propTypes = {
    Type: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Bedrooms: PropTypes.number.isRequired,
    Bathrooms: PropTypes.number.isRequired,
    Garden: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    Postcode: PropTypes.string.isRequired,
}
export default PropertiesForSalePT;