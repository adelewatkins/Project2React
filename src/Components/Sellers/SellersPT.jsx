import PropTypes from 'prop-types'
import Sellers from './Sellers';

function SellersPT(props) {
        return (
            <div Card style={{ width: '18rem' }}>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                  <h4 className="card-title"> {props.FirstName} {props.LastName}</h4>
                <p>{props.Address}</p>
                <p>{props.Postcode}</p>
                <p>{props.PhoneNumber}</p>
                </div>
                  </div>
                </div>
              </div>
            </div>
        );
       
}
SellersPT.propTypes = {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    Postcode: PropTypes.string.isRequired,
    PhoneNumber: PropTypes.number.isRequired,

}


export default SellersPT;