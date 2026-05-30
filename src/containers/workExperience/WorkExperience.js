import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <div className="experience-section" id="experience">
      <Fade bottom duration={1000} distance="40px">
        <div className="experience-container">
          <h1 className="green-heading">Experience</h1>
          {workExperiences.subtitle && (
            <p className={isDark ? "section-subtitle dark-mode-text" : "section-subtitle"}>
              {workExperiences.subtitle}
            </p>
          )}
          
          <div className="timeline">
            {workExperiences.experience.map((exp, i) => {
              return (
                <div key={i} className="timeline-item">
                  {/* Timeline node/logo */}
                  <div className="timeline-logo-container">
                    <div className="timeline-logo-circle">
                      {exp.companylogo ? (
                        <img
                          src={exp.companylogo}
                          className="timeline-company-logo"
                          alt={exp.company}
                        />
                      ) : (
                        <div className="timeline-company-placeholder">
                          {exp.company.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline content card */}
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="role-and-company">
                        <h3 className={isDark ? "role-title dark-mode-text" : "role-title"}>
                          {exp.role}
                        </h3>
                        <span className="company-name">{exp.company}</span>
                        {exp.skills && exp.skills.length > 0 && (
                          <div className="experience-skills-container">
                            {exp.skills.map((skill, idx) => (
                              <span key={idx} className={`experience-skill-badge color-${idx % 4}`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="role-dates">{exp.date}</span>
                    </div>

                    <p className={isDark ? "role-summary dark-mode-text" : "role-summary"}>
                      {exp.desc}
                    </p>

                    {exp.descBullets && exp.descBullets.length > 0 && (
                      <ul className="impact-bullets">
                        {exp.descBullets.map((bullet, idx) => (
                          <li key={idx} className={isDark ? "dark-mode-text" : ""}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}
