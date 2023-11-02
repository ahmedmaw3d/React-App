import gallery1 from "../image/gallery-01.png";
import gallery2 from "../image/gallery-02.png";
import gallery3 from "../image/gallery-03.png";
import gallery4 from "../image/gallery-04.png";
import gallery5 from "../image/gallery-05.jpg";
import gallery6 from "../image/gallery-06.png";


function Gallery() {
    return (
        <div>
            <div className="gallery" id="gallery">
                <h2 className="main-title">Gallery</h2>
                <div className="container">
                    <div className="box">
                        <div className="image">
                            <img src={gallery1} alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={gallery2} alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={gallery3} alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={gallery4} alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={gallery5} alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={gallery6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery;