import React from 'react';
import './Projects.css';
import ProjectsSVG from '../SVG/ProjectsSVG.js';
import NodeSentpic from '../Images/NodeSentpic.PNG';
import GaMatcher from '../Images/Ga-Matcher.PNG';

function Projects() {
  return (
    <React.Fragment>
      <div className="Container">
        <div className="ProjectsContainer">
          <div className="ProjectsSVG">
            <ProjectsSVG />
          </div>
          <div className="GalleryContainer">
          </div>
        </div>
        <div className="ProjectGallery">
          <div className="HoverBox">
            <div className="Project1">
              {/*<img className="imgProject" src={NodeSentpic} alt="NodeSent" />*/}
            </div>
            <div className="ProjectLanguage">
              <div className="BoldText">NodeSent</div>
                <span>Express+HandleBars</span>
            </div>
            <div className="LearnMore">
              Learn More
            </div>
          </div>
          <div className="HoverBox">
            <div className="Project2">
              {/*<img className="imgProject" src={NodeSentpic} alt="NodeSent" />*/}
            </div>
            <div className="ProjectLanguage">
              <div className="BoldText">NodeSent</div>
                <span>Express+HandleBars</span>
            </div>
          </div>
          <div className="HoverBox">
            <div className="Project1">
              {/*<img className="imgProject" src={NodeSentpic} alt="NodeSent" />*/}
            </div>
            <div className="ProjectLanguage">
              <div className="BoldText">NodeSent</div>
                <span>Express+HandleBars</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
