import PropTypes from "prop-types";
import PropertiesForSale from './PropertiesForSale';

function PropertiesForSalePT(props) {
    return (

        <div Card style={{ width: '10%' }}>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="card-text"></div>
                        <div className="card-title"></div> 
                        <p>{"Price: £" +props.Price} </p>
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


