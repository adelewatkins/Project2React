import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PropertiesToLetPT(props) {
    return (
        <div Card style={{ width: '10%' }}>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="card-text"></div>
                        <div className="card-title"></div> 
                        <p>{"Rent: £" +props.Rent} </p>
                        <p> {"Type:" +props.Type}</p>
                        <p> {"Bedrooms: "+props.Bedrooms}</p>
                        <p> {"Bathrooms:" +props.Bathrooms}</p>
                        <p> {"Garden:" +props.Garden}</p>
                        <p> {"Address:" +props.Address}</p>
                        <p> {"Postcode:" +props.Postcode}</p>
                    </div>
                    </div>
                    </div>
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
