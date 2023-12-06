import PropTypes from 'prop-types'
import Sellers from './Sellers';

function SellersPT(props) {
    return (
        <div>
            <h4>{props.FirstName}</h4>
            <h4>{props.LastName}</h4>
            <p>{props.Address}</p>
            <p>{props.Postcode}</p>
            <p>{props.PhoneNumber}</p>

        </div>
    );
}
SellersPT.propTypes = {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    Postcode: PropTypes.string.isRequired,
    PhoneNumber: PropTypes.number.isRequired

}


export default SellersPT;