import React from 'react';
//import logo from './logo.svg';
import './Skills.css';
import SkillsSvg from '../SVG/SkillsSvg';
import TechLineSVG from '../SVG/TechLineSVG';

function Skills() {
  return (
    <React.Fragment>

      <div className="SkillsContainer">
        <div className="SkillsSvg">
          <SkillsSvg />
        </div>
        <div className="AnotherContainer">
          <div className="TextContainer">
            <h1>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</h1>
            <p className="SkillsParagraph">Vivamus placerat fermentum sagittis. Mauris tortor nisl, laoreet a mi quis, tincidunt blandit risus. Nulla pellentesque neque euismod risus semper dignissim. Pellentesque ut elementum lectus. Nullam at tincidunt lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse quis odio feugiat magna congue ultrices. Nulla in turpis eu erat tristique ultrices in nec lacus. Suspendisse potenti. Praesent consectetur vitae nunc at finibus. Integer fringilla vulputate tristique.</p>
          </div>
          <div className="Skills2">
            <div className="container">

              <div className="TechContainer">
                {/*<h1 className="TechIcon">
                </h1>*/}
                <h1 className="LangHeader">
                  Technology.
                </h1>
                {/*<TechLineSVG />*/}

                <ul className="TechList">
                  <li className="LangItems">Linux Bash Shell</li>
                  <li className="LangItems">OAS2.0 | OpenID</li>
                  <li className="LangItems">Splunk</li>
                  <li className="LangItems">Git</li>
                </ul>
              </div>

              <div className="FrameContainer">
                {/*<h1 className="FrameIcon">
                </h1>*/}
                <h1 className="FrameHeader">
                  FrameWorks.
                </h1>
                <ul className="LangList">
                  <li className="LangItems">Electron.js</li>
                  <li className="LangItems">React.js</li>
                  <li className="LangItems">Express</li>
                </ul>
              </div>

              <div className="LangContainer">
                {/*<h1 className="FrameIcon">
                </h1>*/}
                <h1 className="LangHeader">
                  Languages.
                </h1>
                <ul className="LangList">
                  <li className="LangItems">HTML/CSS</li>
                  <li className="LangItems">JavaScript</li>
                  <li className="LangItems">Python</li>
                  <li className="LangItems">Java</li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </React.Fragment>

  );
}

export default Skills;
