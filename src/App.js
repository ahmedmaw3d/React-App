import theImage from './megamenu.png';
import Landing from "./landing-image.png";
import cat from"./cat-01.jpg";
import cat1 from"./cat-02.jpg";
import cat2 from"./cat-03.jpg";
import cat3 from"./cat-04.jpg";
import cat4 from"./cat-05.jpg";
import cat5 from"./cat-06.jpg";
import cat6 from"./cat-07.jpg";
import cat7 from"./cat-08.jpg";
import './app.css';

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
                    <a href="#testimonials"><i className="far fa-comments fa-fw"></i> Testimonials</a>
                  </li>
                  <li>
                    <a href="#team"><i className="far fa-user fa-fw"></i> Team Members</a>
                  </li>
                  <li>
                    <a href="#services"><i className="far fa-building fa-fw"></i> Services</a>
                  </li>
                  <li>
                    <a href="#our-skills"><i className="far fa-check-circle fa-fw"></i> Our Skills</a>
                  </li>
                  <li>
                    <a href="#work-steps"><i className="far fa-clipboard fa-fw"></i> How It Works</a>
                  </li>
                </ul>
                <ul class="links">
                  <li>
                    <a href="#events"><i className="far fa-calendar-alt fa-fw"></i> Events</a>
                  </li>
                  <li>
                    <a href="#pricing"><i className="fas fa-server fa-fw"></i> Pricing Plans</a>
                  </li>
                  <li>
                    <a href="#video"><i className="far fa-play-circle fa-fw"></i> Top Videos</a>
                  </li>
                  <li>
                    <a href="#stats"><i className="far fa-chart-bar fa-fw"></i> Stats</a>
                  </li>
                  <li>
                    <a href="#discount"><i className="fas fa-percent fa-fw"></i> Request A Discount</a>
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
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>
      <div className="articles" id="articles">
    <h2 className="main-title">Articles</h2>
    <div className="container">
      <div className="box">
        <img src={cat} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
      <img src={cat1} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
      <img src={cat2} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
      <img src={cat3} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
      <img src={cat4} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
      <img src={cat5} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
      <img src={cat6} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
      <img src={cat7} alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="spikes"></div>
    </div>
  );
}
export default App;
