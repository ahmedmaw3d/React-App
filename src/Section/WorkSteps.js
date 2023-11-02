import work from "../image/work-steps.png";
import work1 from "../image/work-steps-1.png";
import work2 from "../image/work-steps-2.png";
import work3 from "../image/work-steps-3.png";
function WorkSteps() {
    return (
        <div>
            <div className="work-steps" id="work-steps">
                <h2 className="main-title">How It Works ?</h2>
                <div className="container">
                    <img src={work} alt="" class="image" />
                    <div className="info">
                        <div className="box">
                            <img src={work1} alt="" />
                            <div className="text">
                                <h3>Business Analysis</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                    recusandae debitis vel
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={work2} alt="" />
                            <div className="text">
                                <h3>Architecture</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                    recusandae debitis vel
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={work3} alt="" />
                            <div className="text">
                                <h3>Developement</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                    recusandae debitis vel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkSteps
