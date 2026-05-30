import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import {socialMediaLinks} from "../../portfolio";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <div className="footer-left">
          <p className="footer-text">Copyright &copy; 2026 Rahul Khandelwal</p>
        </div>
        <div className="footer-right">
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {socialMediaLinks.youtube && (
            <a
              href={socialMediaLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
}
