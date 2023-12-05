function Sellers() {
  return(

    <div>
    <h1>Sellers</h1>
      <form>
        <label htmlFor="fne" >First Name</label>
        <input id="fne" type="text"></input>
        <label htmlFor="lne" >Last Name</label>
        <input id="lne" type="text"></input>
        <label htmlFor="add" >Address</label>
        <input id="add" type="text"></input>
        <label htmlFor="pce">Postcode</label>
        <input id="pce" type="text"></input>
        <label htmlFor="pnr" >Phone Number</label>
        <input id="pnr" type="text"></input>
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>
    
 )
}

export default Sellers;
