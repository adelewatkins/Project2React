function PropertiesForSale() {
  return (
    <div>

      <h1>Properties For Sale</h1>

      <form>
        <label htmlFor="ty" >Type</label>
        <input id="ty" type="text"></input>
        <label htmlFor="pr" >Price</label>
        <input id="pr" type="£"></input>
        <label htmlFor="bd" >Bedrooms</label>
        <input id="bd" type="number" min={0}></input>
        <label htmlFor="bt">Bathrooms</label>
        <input id="bt" type="number" min={0}></input>
        <label htmlFor="gn" >Garden</label>
        <input id="gn" type="text"></input>
        <label htmlFor="ad" >Address</label>
        <input id="ad" type="text"></input>
        <label htmlFor="pc" >Postcode</label>
        <input id="pc" type="text"></input>
        <br />
        <button type="submit">Submit</button>

      </form>

      <br />

    </div>

  )

}

export default PropertiesForSale;
