import PropTypes from "prop-types";
import PropertiesForSale from './PropertiesForSale';
import Card from "react-bootstrap/Card";


function PropertiesForSalePT(props) {
    return (
        <Card className="col-3 m-4">
        <div className="flex">
        <div className="card-body card-text">
        <h4 className="card-title"></h4>
        {" "}
                    <img src="https://cdn2-property.estateapps.co.uk/files/property/107/image/437868/437868_1347858_IMAGES_MAIN_4378681.jpg" width="330" alt="house stock" />
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
                    </Card>
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


