import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting, techStack} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="about-me-section" id="about-me">
        <div className="about-me-container">
          {/* About Me Section */}
          <div className="about-me-content">
            <h1 className="green-heading">About Me</h1>
            <p className={isDark ? "bio-text dark-mode-text" : "bio-text"}>
              {greeting.subTitle}
            </p>
            <div className="social-media-container">
              <SocialMedia />
            </div>
          </div>

          {/* Core Expertise Section */}
          {techStack.viewSkillBars && (
            <div className="expertise-content">
              <h1 className="green-heading">Core Expertise</h1>
              <div className="skills-badge-container">
                {techStack.experience.map((exp, i) => {
                  return (
                    <span key={i} className={`skill-badge color-${i % 4}`}>
                      {exp.Stack}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
