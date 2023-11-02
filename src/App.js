import theImage from './image/megamenu.png';
import Landing from "./image/landing-image.png";

import './app.css';

import { RiArrowDownDoubleFill } from "react-icons/ri";
import { BiChat } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { MdPlayCircleFilled } from "react-icons/md";
import { TbPercentage } from "react-icons/tb";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import Articles from './Section/Articles';
import Gallery from './Section/Gallery';
import Features from './Section/Features';
import Testimonials from './Section/Testimonials';
import Team from './Section/Team';
import Services from './Section/Services';
import Skills from "./Section/Skills";
import WorkSteps from"./Section/WorkSteps";
import Events from './Section/Events';
import Pricing from './Section/Pricing';
import Videos from "./Section/Videos"
import Stats from './Section/Stats';
import Discount from './Section/Discount';
import Footer from './Section/Footer';
function App() {
  return (
    <div>
      <div className="header" id="header">
        <div className="container">
          <a href="#" className="logo">Elzero</a>
          <ul className="main-nav">
            <li><a href="#articles">Articles</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#features">Features</a></li>
            <li>
              <a href="#">Other Links</a>
              <div className="mega-menu">
                <div className="image">
                  <img src={theImage} alt="" />
                </div>
                <ul className="links">
                  <li>
                    <a href="#testimonials"><i><BiChat /></i> Testimonials</a>
                  </li>
                  <li>
                    <a href="#team"><i><BiSolidUser /></i>Team Members</a>
                  </li>
                  <li>
                    <a href="#services"><i ><FaRegBuilding /></i> Services</a>
                  </li>
                  <li>
                    <a href="#our-skills"><i><AiOutlineCheckCircle /></i> Our Skills</a>
                  </li>
                  <li>
                    <a href="#work-steps"><i><FaRegClipboard /></i> How It Works</a>
                  </li>
                </ul>
                <ul class="links">
                  <li>
                    <a href="#events"><i ><FaRegCalendarDays /></i> Events</a>
                  </li>
                  <li>
                    <a href="#pricing"><i ><AiFillDatabase /></i> Pricing Plans</a>
                  </li>
                  <li>
                    <a href="#video"><i ><MdPlayCircleFilled /></i> Top Videos</a>
                  </li>
                  <li>
                    <a href="#stats"><i><AiOutlineAlignLeft /></i> Stats</a>
                  </li>
                  <li>
                    <a href="#discount"><i ><TbPercentage size={20} /></i> Request A Discount</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Elzero World</h1>
            <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
          </div>
          <div className="image">
            <img src={Landing} alt="" />
          </div>
        </div>
        <a href="#articles" className="go-down">
          <i ><RiArrowDownDoubleFill size={50} /></i>
        </a>
      </div>
      <div className="spikes"></div>
      <Articles />
      <Gallery/>
      <Features/>
      <Testimonials/>
      <Team/>
      <Services/>
      <Skills/>
      <WorkSteps/>
      <Events/>
      <Pricing/>
      <Videos/>
      <Stats/>
      <Discount/>
      <Footer/>



      

      
      
      
      
      
      
      
      
    </div>
  );
}
export default App;
