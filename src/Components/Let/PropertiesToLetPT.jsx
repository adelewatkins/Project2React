import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function PropertiesToLetPT(props) {
    return (
        
        <div Card style={{ width: '40%' }}>

       
            <div className="row-gap-1 ">
                <div className="card">
                    <div className="card-body">
                        <div classname="card-text"></div>
                        {/* <div className="row-cols-6"></div> */}
                        <div className="card-title" d-d-inline-grid  ></div> 
                    <img src="https://cdn2-property.estateapps.co.uk/files/property/107/image/437868/437868_1347858_IMAGES_MAIN_4378681.jpg" width={400} alt="house stock" />
                        <p>{"Rent: £" +props.Rent} </p>
                        <p> {"Type:" +props.Type}</p>
                        <p> {"Bedrooms: "+props.Bedrooms}</p>
                        <p> {"Bathrooms:" +props.Bathrooms}</p>
                        <p> {"Garden:" +props.Garden}</p>
                        <p> {"Address:" +props.Address}</p>
                        <p> {"Postcode:" +props.Postcode}</p>
                        <select>
                            <option>For Let</option>
                            <option>Already Let</option>
                            <option>Withdrawn</option>
                        </select>&nbsp;
                        <button type="submit" className="btn btn-success btn-sm"> Submit </button>
                   
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
