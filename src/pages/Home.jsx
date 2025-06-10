import React from "react";
import Header from "../components/Headers/Header";
import "./Home.css";
import banner from "../assets/college-banner.png";
import image1 from "../assets/students-studying.jpeg";
import image2 from "../assets/campus-life.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-div">
      <Header />
      <div className="Home-Container">
        <img
          className="hero-banner-image"
          src={banner}
          alt="Vivekanand College Campus"
        />
        {/* <div className="hero-section">
          <div className="hero-overlay-text">
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <a className="btn hero-btn" href="/admissions" data-discover="true">
              Apply Now!
            </a>
          </div>
        </div> */}
        <h1 id="main">Welcome to Vivekanand College!</h1>
        <p>
          <strong>Vivekanand College</strong> is a premier educational
          institution dedicated to fostering academic excellence, innovation,
          and holistic development. Established in 1980, we have proudly served
          generations of students, empowering them to achieve their full
          potential.
        </p>
        <p>
          At Vivekanand College, we believe in a vibrant learning environment
          that extends beyond textbooks. Our state-of-the-art facilities,
          experienced faculty, and diverse student community create a unique
          ecosystem where curiosity thrives and future leaders are shaped.
        </p>
        <h2>Why Choose Vivekanand College?</h2>
        <ul>
          <li>
            <strong>Legacy of Excellence:</strong> Decades of commitment to
            quality education.
          </li>
          <li>
            <strong>Experienced Faculty:</strong> Learn from renowned experts
            and passionate educators.
          </li>
          <li>
            <strong>Modern Facilities:</strong> Well-equipped labs, expansive
            library, and comfortable campus.
          </li>
          <li>
            <strong>Holistic Development:</strong> Focus on co-curricular
            activities, sports, and community service.
          </li>
          <li>
            <strong>Strong Placements:</strong> Excellent career opportunities
            with leading companies.
          </li>
        </ul>
        <h2>Campus Life & Facilities</h2>
        <div className="img-div">
          <img src="/Images/campus-life.jpg"/>
          <img src="/Images/students-studying.jpeg"/>
        </div>
        <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        <p className="btm-p">Ready to explore our courses?</p>
        <div class="btn-div">
          <Link to="/Admissions"><button>Explore Courses</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
