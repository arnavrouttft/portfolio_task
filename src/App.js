import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import cover from "./images/CoverPic.jpg";
import profile from "./images/dpProfile.png";
import cardimage from "./images/fadeImage.jpeg";
import kashmirimage from "./images/kashmir.jpeg";
import Icons from "./components/Icons";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="parent"> 
      <img src={cover} className="coverimage" alt="Cover Pic" />
      <img src={profile} className="profileimage" alt="profile pic" />
      </div>
      
      <div className="userInfo">
      <h2 className="userInfo1">Arnav Rout</h2>
      <h5 className="userInfo2">@arnavrout</h5>
      </div>

      <p className="para">My name is Arnav Rout, i am working as a software developer in TFT.</p>

      <div className="buttons">
        <a href="userFollowed" class="button1">Follow</a>
        <a href="profileShared" class="button1">Share Profile</a>
      </div>

      <Icons />

      <div className="banner">
        <img src={cardimage} alt="Card View Pic" />
        <h4 className="heading">Travel Advanture</h4>
        <h5 className="content">15</h5>
        <p className="p1">Cities</p>
        <h5 className="content1">2</h5>
        <p className="p2">Countries</p>
        <p className="p3">Travel can inspire you to pursue your passion.</p>
      </div>

      <div className="tour">
          Upcoming Tour Plan
      </div>
      <div className="boxAnimation">
        <img className="kashmir" src={kashmirimage} alt="Kashmir" />
        <p className="k">Kashmir</p>
      </div>

      

      <Footer />

    </div>
  );
}

export default App;
