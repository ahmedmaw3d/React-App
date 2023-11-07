import { CiUser } from "react-icons/ci";
import { HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

function Stats() {
    return (
        <div>
            <div className="stats" id="stats">
                <h2>Our Awesome Stats</h2>
                <div className="container">
                    <div className="box">
                        <i><CiUser size={30} /></i>
                        <span className="number" data-goal="150">0</span>
                        <span className="text">Clients</span>
                    </div>
                    <div className="box">
                        <i><BiCodeAlt size={30} /></i>
                        <span className="number" data-goal="135">0</span>
                        <span className="text">Projects</span>
                    </div>
                    <div className="box">
                        <i><HiMiniGlobeAsiaAustralia size={30} /></i>
                        <span className="number" data-goal="50">0</span>
                        <span className="text">Countries</span>
                    </div>
                    <div className="box">
                        <i><FaMoneyBillAlt size={30} /></i>
                        <span className="number" data-goal="500">0</span>
                        <span className="text">Money</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Stats