import gallery1 from "../image/gallery-01.png";
import gallery2 from "../image/gallery-02.png";
import gallery3 from "../image/gallery-03.png";
import gallery4 from "../image/gallery-04.png";
import gallery5 from "../image/gallery-05.jpg";
import gallery6 from "../image/gallery-06.png";


function Gallery() {


    let Gallery = [
        {
            image: gallery1
        },
        {
            image: gallery2
        },
        {
            image: gallery3
        },
        {
            image: gallery4
        },
        {
            image: gallery5
        },
        {
            image: gallery6
        }
    ];
    return (
        <div>
            <div className="gallery" id="gallery">
                <h2 className="main-title">Gallery</h2>
                <div className="container">
                    {Gallery.map(item => {
                        return (
                            <div className="box">
                                <div className="image">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default Gallery;