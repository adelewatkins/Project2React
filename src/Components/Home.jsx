function Home() {
  return( 
  <h1>Home</h1>,


 

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn2-property.estateapps.co.uk/files/property/107/image/431842/431842_1321305_IMAGES_MAIN_4318421.jpg" className="d-block w-100" alt="house 1"/>
    </div>
    <div className="carousel-item">
      <img src="https://media.rightmove.co.uk/dir/crop/10:9-16:9/77k/76202/141245057/76202_32684122_IMG_00_0000_max_476x317.jpeg" className="d-block w-100" alt="house 2"/>
    </div>
    <div className="carousel-item">
      <img src="https://mr2.homeflow-assets.co.uk/files/photo/image/29582/3641/650x_/RRB200053_17.jpg" width={600} className="d-block w-100" alt="house 3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  

  )
}


export default Home;
