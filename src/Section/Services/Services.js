import { FaUserShield } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidPalette } from "react-icons/bi";
import { FaBullhorn } from "react-icons/fa6";
import "./services.css";

const Services = () => {

    const services = [
        {
            image: <FaUserShield size={75} />,
            name: "Security",
            text: "Details"
        },
        {
            image: <FaTools size={75} />,
            name: "Fixing Issues",
            text: "Details"
        },
        {
            image: <FaMapMarkedAlt size={75} />,
            name: "Location",
            text: "Details"
        },
        {
            image: <FaLaptopCode size={75} />,
            name: "Coding",
            text: "Details"
        },
        {
            image: <BiSolidPalette size={75} />,
            name: "Security",
            text: "Details"
        },
        {
            image: <FaBullhorn size={75} />,
            name: "Marketing",
            text: "Details"
        }
    ];
    return (
        <div>
            <div className="services" id="services">
                <h2 className="main-title">Services</h2>
                <div className="container">
                    {services.map(item => {
                        return (
                            <div className="box" key={item.name}>
                                <i>{item.image}</i>
                                <h3>{item.name}</h3>
                                <div className="info">
                                    <a href="#">{item.text}</a>
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
export default Services