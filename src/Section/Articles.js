import cat from "../image/cat-01.jpg";
import cat1 from "../image/cat-02.jpg";
import cat2 from "../image/cat-03.jpg";
import cat3 from "../image/cat-04.jpg";
import cat4 from "../image/cat-05.jpg";
import cat5 from "../image/cat-06.jpg";
import cat6 from "../image/cat-07.jpg";
import cat7 from "../image/cat-08.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

function Articles() {
    return (
        <div>
            <div className="articles" id="articles">
                <h2 className="main-title">Articles</h2>
                <div className="container">
                    <div className="box">
                        <img src={cat} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat1} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat2} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat3} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat4} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat5} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat6} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat7} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="">Read More</a>
                            <i ><FaLongArrowAltRight /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Articles;