import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>MiniOrange Pvt Ltd, Pune</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Enhanced Jira Issue Exporter Plugin using Java and Atlassian SDK,
              improving data reporting speed by 30%. Debugged and optimized
              production code, identified root-cause issues and improved
              maintainability of modular systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Mechrocker Technology, Jalgaon</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and maintained web applications using Java, Spring Boot,
              Spring MVC, and Spring REST. Developed backend systems reinforcing
              object-oriented design and architecture fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master in Computer Application (MCA)</h4>
                <h5>North Maharashtra University — CGPA: 8.59</h5>
              </div>
              <h3>2022 – 2024</h3>
            </div>
            <p>
              Completed postgraduate studies in Computer Application at North
              Maharashtra University, Jalgaon, Maharashtra.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor in Computer Application (BCA)</h4>
                <h5>North Maharashtra University — CGPA: 9.01</h5>
              </div>
              <h3>2019 – 2022</h3>
            </div>
            <p>
              Completed undergraduate studies in Computer Application at North
              Maharashtra University, Jalgaon, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
