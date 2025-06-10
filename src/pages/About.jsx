import React from "react";
import Header from "../components/Headers/Header";
import "./About.css"


const About = () => {
  return (
    <div className="About-div">
      <Header />
      <div className="About-container">
        <h1 id="main">About Vivekanand College</h1>
        <p>
          <strong>Vivekanand College</strong> stands as a beacon of knowledge
          and integrity, committed to delivering transformative education since
          its inception in 1980. Located in the bustling heart of Chembur,
          Mumbai, our college has consistently strived to uphold the highest
          standards of academic rigor and ethical values.
        </p>
        <p>
          Our vision is to empower students with critical thinking skills, a
          global perspective, and a strong sense of social responsibility. We
          aim to nurture individuals who are not only successful in their
          careers but also contributing members of society.
        </p>

        <h2>Our Mission</h2>
        <ul>
          <li>
            To provide high-quality, accessible education across various
            disciplines.
          </li>
          <li>
            To foster research, innovation, and creativity among students and
            faculty.
          </li>
          <li>To cultivate a diverse and inclusive learning environment.</li>
          <li>To instill strong ethical values and leadership qualities.</li>
        </ul>

        <h2>Our Values</h2>
        <p>
          <strong>
            Integrity, Excellence, Innovation, Community, and Respect
          </strong>{" "}
          are the pillars upon which Vivekanand College is built. We encourage
          open dialogue, intellectual curiosity, and a relentless pursuit of
          knowledge.
        </p>

        <h2>Our History</h2>
        <p>
          Our journey began with a vision to make quality education available to
          all. Over the years, we have achieved key milestones in academic
          performance, infrastructural development, and alumni success. Many of
          our alumni have gone on to make significant contributions in diverse
          fields, both nationally and internationally.
        </p>
      </div>
      
    </div>
  );
};

export default About;
