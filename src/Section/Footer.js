import gallery1 from "../image/gallery-01.png";
import gallery2 from "../image/gallery-02.png";
import gallery3 from "../image/gallery-03.png";
import gallery4 from "../image/gallery-04.png";
import gallery5 from "../image/gallery-05.jpg";
import gallery6 from "../image/gallery-06.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { PiPhoneCallThin } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="box">
                        <h3>Elzero</h3>
                        <ul className="social">
                            <li>
                                <a href="#" className="facebook">
                                    <i><BiLogoFacebook /></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <i><AiOutlineTwitter /></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="youtube">
                                    <i><BiLogoYoutube /></i>
                                </a>
                            </li>
                        </ul>
                        <p className="text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
                        </p>
                    </div>
                    <div className="box">
                        <ul className="links">
                            <li><a href="#">Important Link 1</a></li>
                            <li><a href="#">Important Link 2</a></li>
                            <li><a href="#">Important Link 3</a></li>
                            <li><a href="#">Important Link 4</a></li>
                            <li><a href="#">Important Link 5</a></li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="line">
                            <i><FaMapMarkerAlt /></i>
                            <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
                        </div>
                        <div className="line">
                            <i><FaRegClock /></i>
                            <div className="info">Business Hours: From 10:00 To 18:00</div>
                        </div>
                        <div className="line">
                            <i><PiPhoneCallThin /></i>
                            <div className="info">
                                <span>+20123456789</span>
                                <span>+20198765432</span>
                            </div>
                        </div>
                    </div>
                    <div className="box footer-gallery">
                        <img src={gallery1} alt="" />
                        <img src={gallery2} alt="" />
                        <img src={gallery3} alt="" />
                        <img src={gallery4} alt="" />
                        <img src={gallery5} alt="" />
                        <img src={gallery6} alt="" />
                    </div>
                </div>
                <p className="copyright">Made With &lt;3 By Elzero</p>
            </div>
            <script src="js/main.js"></script>

        </div>
    )
}
export default Footer;
