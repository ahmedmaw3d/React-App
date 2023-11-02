import preview from "../image/video-preview.jpg";
import { FaRandom } from "react-icons/fa";

function Videos() {
    return (
        <div>
            <div className="videos" id="videos">
                <h2 className="main-title">Top Videos</h2>
                <div className="container">
                    <div className="holder">
                        <div className="list">
                            <div className="name">
                                Top Videos
                                <i ><FaRandom /></i>
                            </div>
                            <ul>
                                <li>How To Create Sub Domain<span>05:18</span></li>
                                <li>Playing With The DNS <span>03:18</span></li>
                                <li>Everything About The Virtual Hosts <span>05:25</span></li>
                                <li>How To Monitor Your Website <span>04:16</span></li>
                                <li>Uncharted Beating The Last Boss <span>07:48</span></li>
                                <li>Ys Oath In Felghana Overview <span>03:12</span></li>
                                <li>Ys Series All Games Ending <span>08:10</span></li>
                            </ul>
                        </div>
                        <div className="preview">
                            <img src={preview} alt="" />
                            <div className="info">Everything About The Virtual Hosts</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Videos;