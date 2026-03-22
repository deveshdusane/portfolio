import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:deveshdusane201@gmail.com" data-cursor="disable">
                deveshdusane201@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91-8308288161</p>
            <h4>Location</h4>
            <p>Ahmedabad, Gujarat</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/deveshdusane"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/devesh-dusane-bb4531249/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://deveshdusane.itch.io"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Itch.io <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>MCA — North Maharashtra University (CGPA: 8.59)</p>
            <p>BCA — North Maharashtra University (CGPA: 9.01)</p>
            <h4>Certificates</h4>
            <p>Unity Certified Associate: Programmer (2026)</p>
            <p>Certified Java Fullstack Developer — QSpiders (2024)</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Devesh Dusane</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
