import work from "../image/work-steps.png";
import work1 from "../image/work-steps-1.png";
import work2 from "../image/work-steps-2.png";
import work3 from "../image/work-steps-3.png";
function WorkSteps() {

    let Works = [
        {
            image: work1,
            title: "Business Analysis",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel"
        },
        {
            image: work2,
            title: "Architecture",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel"
        },
        {
            image: work3,
            title: "Developement",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel"
        }
    ]

    return (
        <div>
            <div className="work-steps" id="work-steps">
                <h2 className="main-title">How It Works ?</h2>
                <div className="container">
                    <img src={work} alt="" className="image" />
                    <div className="info">
                        {Works.map(item => {
                            return (
                                <div className="box">
                                    <img src={item.image} alt="" />
                                    <div className="text">
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkSteps
