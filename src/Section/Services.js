import {FaUserShield}from"react-icons/fa6";
import{FaTools}from "react-icons/fa";
import {FaMapMarkedAlt}from "react-icons/fa";
import{FaLaptopCode}from"react-icons/fa";
import{BiSolidPalette}from"react-icons/bi";
import {FaBullhorn}from "react-icons/fa6";
function Services() {
    return (
        <div>
            <div className="services" id="services">
                <h2 className="main-title">Services</h2>
                <div className="container">
                    <div className="box">
                        <i ><FaUserShield size={75}/></i>
                        <h3>Security</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i ><FaTools size={75}/></i>
                        <h3>Fixing Issues</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i ><FaMapMarkedAlt size={75}/></i>
                        <h3>Location</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i><FaLaptopCode size={75}/></i>
                        <h3>Coding</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <i><BiSolidPalette size={75}/></i>
                        <h3>Security</h3>
                        <div class="info">
                            <a href="#">Design</a>
                        </div>
                    </div>
                    <div className="box">
                        <i><FaBullhorn size={75}/></i>
                        <h3>Marketing</h3>
                        <div class="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services