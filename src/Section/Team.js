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

function Team() {


  let TeamDate = [
    {
      image: team1,
      name: "Name",
      text: "Simple Short Description"
    },
    {
      image: team2,
      name: "Name",
      text: "Simple Short Description"
    },
    {
      image: team3,
      name: "Name",
      text: "Simple Short Description"
    },
    {
      image: team4,
      name: "Name",
      text: "Simple Short Description"
    },
    {
      image: team5,
      name: "Name",
      text: "Simple Short Description"
    },
    {
      image: team6,
      name: "Name",
      text: "Simple Short Description"
    },
    {
      image: team7,
      name: "Name",
      text: "Simple Short Description"
    },
    {
      image: team8,
      name: "Name",
      text: "Simple Short Description"
    }
  ]

  return (
    <div>
      <div className="team" id="team">
        <h2 className="main-title">Team Members</h2>
        <div className="container">
          {TeamDate.map(item => {
            return (
              <div className="box">
                <div className="data">
                  <img src={item.image} alt="" />
                  <div className="social">
                    <a href="#">
                      <i><BiLogoFacebook /></i>
                    </a>
                    <a href="#">
                      <i><AiOutlineTwitter /></i>
                    </a>
                    <a href="#">
                      <i><BiLogoLinkedin /></i>
                    </a>
                    <a href="#">
                      <i><BiLogoYoutube /></i>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })}

        </div>
        <div className="spikes"></div>
      </div>
    </div>
  )
}
export default Team;