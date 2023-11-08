import features1 from "../../image/features-01.jpg";
import features2 from "../../image/features-02.jpg";
import features3 from "../../image/features-03.jpg";
import "./features.css";

const Features = () => {
  return (
    <div>
      <div className="features" id="features">
        <h2 className="main-title">Features</h2>
        <div className="container">
          <div className="box quality">
            <div className="img-holder"><img src={features1} alt="" /></div>
            <h2>Quality</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <a href="#">More</a>
          </div>
          <div className="box time">
            <div className="img-holder"><img src={features2} alt="" /></div>
            <h2>Time</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <a href="#">More</a>
          </div>
          <div className="box passion">
            <div className="img-holder"><img src={features3} alt="" /></div>
            <h2>Passion</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <a href="#">More</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Features;