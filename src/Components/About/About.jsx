import React, { useState } from "react";
import "./About.css";
import profile_img from "../../assets/about_profile.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a full stack developer with a hands-on approach to building
              efficient, user-centered web applications. Starting with a
              background in mechanical engineering, I found my passion in tech
              and have since gained a range of skills in front-end and back-end
              development. I’ve worked on projects like an online appointment
              booking platform and a food delivery app, where I focused on
              creating smooth user experiences and solid functionality.</p> <p>I thrive
              on problem-solving and enjoy both the technical and creative sides
              of development. My strengths lie in understanding how users
              interact with products and making improvements that enhance
              usability. I’m always eager to learn new tools and technologies,
              staying current with the latest in development practices.</p><p> Whether
              collaborating with teams or taking on projects independently, I’m
              motivated to keep refining my skills and contribute to impactful
              projects that make a difference.
            </p>
          </div>
          <div>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => openTab("education")}
              >
                Education
              </p>
            </div>

            {/* Skills Tab */}
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <div className="skills-section">
                <div className="skills-column">
                  <h3>Core Skills</h3>
                  <ul>
                    <li>
                      <FaHtml5 className="tech-icon" /> <span>HTML</span>

                    </li>
                    <li>
                      <FaCss3Alt className="tech-icon" /> <span>CSS</span>
                    </li>
                    <li>
                      <FaJsSquare className="tech-icon" />{" "}
                      <span>JavaScript</span>
                    </li>
                    <li>
                      <FaReact className="tech-icon" /> <span>ReactJS</span>
                    </li>
                    <li>
                      <FaNodeJs className="tech-icon" /> <span>Node.js</span>
                    </li>
                    <li>
                      <SiExpress className="tech-icon" />{" "}
                      <span>Express.js</span>
                    </li>
                    <li>
                      <SiMongodb className="tech-icon" /> <span>MongoDB</span>
                    </li>
                    <li>
                      <SiMysql className="tech-icon" /> <span>MySQL</span>
                    </li>
                    <li>
                      <FaAws className="tech-icon" /> <span>AWS</span>
                    </li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>Additional Skills</h3>
                  <ul>
                    <li>
                      <SiTailwindcss className="tech-icon" />{" "}
                      <span>Tailwind CSS</span>
                    </li>
                    <li>
                      <FaBootstrap className="tech-icon" />{" "}
                      <span>Bootstrap</span>
                    </li>
                    <li>
                      <SiRedux className="tech-icon" /> <span>Redux</span>
                    </li>
                    <li>
                      <SiNextdotjs className="tech-icon" /> <span>Next.js</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Tab */}
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <div className="education-section">
                <div className="education-column">
                  <ul>
                    <li className="education-item">
                      <div className="education-item-year">2013</div>
                      <div className="education-item-content">
                        <div className="education-item-title">
                          12th Grade - Computer Science & Mathematics
                        </div>
                        <div className="education-item-description">
                          Built a foundation in logical thinking and analytical
                          skills.
                        </div>
                      </div>
                    </li>
                    <li className="education-item">
                      <div className="education-item-year">2017</div>
                      <div className="education-item-content">
                        <div className="education-item-title">
                          B.E. in Mechanical Engineering
                        </div>
                        <div className="education-item-description">
                          Developed strong problem-solving skills and technical
                          expertise.
                        </div>
                      </div>
                    </li>
                    <li className="education-item">
                      <div className="education-item-year">2023</div>
                      <div className="education-item-content">
                        <div className="education-item-title">
                          Full Stack Development - GUVI, IITM Research Park
                        </div>
                        <div className="education-item-description">
                          Completed a rigorous program, mastering front-end and
                          back-end technologies.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
