function PropertiesToLet() {
  return (
    <div>

    <h1>Properties To Let </h1>

    <form>
      <label htmlFor="typ" >Type</label>
      <input id="typ" type="text"></input>
      <label htmlFor="re" >Rent</label>
      <input id="re" type="£"></input>
      <label htmlFor="bdr" >Bedrooms</label>
      <input id="bdr" type="number" min={0}></input>
      <label htmlFor="btr">Bathrooms</label>
      <input id="btr" type="number" min={0}></input>
      <label htmlFor="gar" >Garden</label>
      <input id="gar" type="text"></input>
      <label htmlFor="add" >Address</label>
      <input id="add" type="text"></input>
      <label htmlFor="pcd" >Postcode</label>
      <input id="pcd" type="text"></input>
      <br />
      <button type="submit">Submit</button>

    </form>

    <br />

  </div>
  )
}

export default PropertiesToLet;
