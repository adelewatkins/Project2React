import PropTypes from "prop-types";
import PropertiesForSale from './PropertiesForSale';

function PropertiesForSalePT(props) {
    return (

        <div className="row-gap-1 ">
         <div Card style={{ width: '50%' }}>
            {/* <div className="col"> */}
                <div className="card">
                    <div className="card-body">
                        <div className="card-text"></div>
                        <div className="card-title"></div> 
                        <img src="https://cdn2-property.estateapps.co.uk/files/property/107/image/437868/437868_1347858_IMAGES_MAIN_4378681.jpg" width={400} alt="house stock" />
                        <p>{"Price: £" +props.Price} </p>
                        <p> {"Type:" +props.Type}</p>
                        <p> {"Bedrooms: "+props.Bedrooms}</p>
                        <p> {"Bathrooms:" +props.Bathrooms}</p>
                        <p> {"Garden:" +props.Garden}</p>
                        <p> {"Address:" +props.Address}</p>
                        <p> {"Postcode:" +props.Postcode}</p>

                        <select>
                            <option>For Sale</option>
                            <option>Under Offer</option>
                            <option>Withdrawn</option>
                        </select>&nbsp;
                        <button type="submit" className="btn btn-success btn-sm"> Submit </button>

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


