import React from "react";
import Header from "../components/Headers/Header";
import "./Contact.css"


const Contact = () => {
  return (
    <div className="Contact-div">
      <Header />
      <div className="Contact-container">
        <h1 id="main">Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have questions about
          admissions, programs, or campus life, our team is here to help.
        </p>

        <h3>General Enquiries</h3>
        <p>
          <strong>Vivekanand College Main Campus</strong>
          <br />
          [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur,
          Mumbai, Maharashtra 400071]
          <br />
          India
          <br />
          <strong>Phone:</strong> +91 12345 67890
          <br />
          <strong>Email:</strong> info@vivekanandcollege.edu
          <br />
          <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM IST
        </p>

        <h3>Admissions Office</h3>
        <p>
          For all admission-related queries regarding undergraduate or
          postgraduate programs:
          <br />
          <strong>Phone:</strong> +91 98765 43210
          <br />
          <strong>Email:</strong> admissions@vivekanandcollege.edu
        </p>

        <h3>Student Support Services</h3>
        <p>
          For current student support, academic advising, or general assistance:
          <br />
          <strong>Phone:</strong> +91 87654 32109
          <br />
          <strong>Email:</strong> studentsupport@vivekanandcollege.edu
        </p>

        <h3>Find Us on the Map</h3>
        <p>
          [You can embed a Google Map here later using an iframe or a React map
          library.]
        </p>
        <p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </p>

        <h3>Send Us a Message</h3>
        <p>
          [A contact form with fields for Name, Email, Subject, Message can be
          added here.]
        </p>
      </div>
      
    </div>
  );
};

export default Contact;
