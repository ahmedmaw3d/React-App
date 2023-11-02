import team1 from "../image/team-01.jpg";
import team2 from "../image/team-02.jpg";
import team3 from "../image/team-03.jpg";
import team4 from "../image/team-04.jpg";
import team5 from "../image/team-05.png";
import team6 from "../image/team-06.png";
import team7 from "../image/team-07.jpg";
import team8 from "../image/team-08.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";

function Team(){
    return(
<div>
<div className="team" id="team">
        <h2 className="main-title">Team Members</h2>
        <div className="container">
          <div className="box">
            <div className="data">
              <img src={team1} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team2} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team3} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team4} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team5} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team6} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team7} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team8} alt="" />
              <div className="social">
                <a href="#">
                  <i ><BiLogoFacebook /></i>
                </a>
                <a href="#">
                  <i><AiOutlineTwitter /></i>
                </a>
                <a href="#">
                  <i ><BiLogoLinkedin /></i>
                </a>
                <a href="#">
                  <i><BiLogoYoutube /></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
        </div>
        <div className="spikes"></div>
      </div>
</div>
    )
}
export default Team;