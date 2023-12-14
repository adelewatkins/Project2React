import RS from "./Pictures/RS.png"
import RS2 from "./Pictures/RS2.png"
import RS3 from "./Pictures/RS3.png"
import RS4 from "./Pictures/RS4.png"

function Home() {
  return (
    <h1>Home</h1>,
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={RS}
              alt="RS"
              width="100%"
              height="15%"
              className="d-inline-block align-text-middle"/>
          </div>
        <div className="carousel-item">
            <img
              src={RS2}
              alt="RS2"
              width="100%"
              height="15%"
              className="d-inline-block align-text-middle"/>
        </div>
        <div className="carousel-item">
            <img
              src={RS3}
              alt="RS3"
              width="100%"
              height="15%"
              className="d-inline-block align-text-middle"/>
        </div>
        <div className="carousel-item">
            <img
              src={RS4}
              alt="RS4"
              width="100%"
              height="15%"
              className="d-inline-block align-text-middle"/>
          </div>
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="false"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}
export default Home;
