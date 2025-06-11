import React from "react";
import Header from "../components/Headers/Header";
import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="Courses-div">
      <Header />
      <div className="Courses-container">
        <h1 id="main">Our Academic Programs</h1>
        <p>
          <strong>Vivekanand College</strong> offers a comprehensive range of
          undergraduate and postgraduate programs designed to equip students
          with the knowledge and skills demanded by today's dynamic global
          landscape. Our curriculum is regularly updated to reflect industry
          trends and academic advancements.
        </p>

        <h2>Discover Campus Life</h2>
        <video
          controls loops
          width="100%"
          height="auto"
          class="course-video"
          src="/Videos/video.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>

        <h2>Undergraduate Programs (UG)</h2>
        <ul>
          <li>
            <strong>Bachelor of Science (B.Sc.)</strong>
            <ul>
              <li>Computer Science (3 years)</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li>
            </ul>
          </li>
          <li>
            <strong>Bachelor of Commerce (B.Com)</strong>
            <ul>
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li>
            </ul>
          </li>
          <li>
            <strong>Bachelor of Arts (B.A.)</strong>
            <ul>
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </ul>
          </li>
        </ul>
        <h2>Program Details & Fee Structure (Annual)</h2>
        <table class="admissions-table course-details-table">
          <thead>
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com. Accounting &amp; Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
            </tr>
          </tbody>
        </table>
        <h2>Postgraduate Programs (PG)</h2>
        <ul>
          <li>
            <strong>Master of Science (M.Sc.)</strong>
            <ul>
              <li>Computer Science (2 years)</li>
              <li>Information Technology (2 years)</li>
            </ul>
          </li>
          <li>
            <strong>Master of Commerce (M.Com)</strong> (2 years)
          </li>
          <li>
            <strong>Master of Arts (M.A.)</strong> (2 years)
          </li>
        </ul>

        <h2>Specialized & Vocational Courses</h2>
        <p>
          In addition to traditional degree programs, we offer various
          certificate and diploma courses in areas like Digital Marketing, Web
          Development, Data Analytics, and Soft Skills Development, providing
          specialized training for career enhancement.
        </p>

        <p>
          Explore detailed syllabi and admission criteria on our Admissions
          page.
        </p>

        <div className="btn-div">
           <Link to="/Contact"><button className="apply-btn">Inquire About Courses</button></Link>
        </div>
      </div>
  
    </div>
  );
};

export default Courses;
