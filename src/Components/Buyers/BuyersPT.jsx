import PropTypes from 'prop-types'

function BuyersPT(props) {
    return (
        <div>
            <h4>{props.FirstName} {props.LastName}</h4>
            <p>{props.Address}</p>
            <p>{props.Postcode}</p>
            <p>{props.PhoneNumber}</p>

        </div>
    );
}
BuyersPT.propTypes = {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    Postcode: PropTypes.string.isRequired,
    PhoneNumber: PropTypes.number.isRequired

}


export default BuyersPT;