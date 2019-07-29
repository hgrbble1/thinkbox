import React from 'react';
//import logo from './logo.svg';
import './Grid.css';
import Skills from './Skills.js';
import Header from './Header.js';
import LeftNav from './LeftNav.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

function Grid() {
  return (
    <React.Fragment>
      <div className="App-Container">
        <div className="header">
          <Header />
        </div>

        <div className="leftNav">
          <LeftNav />
        </div>

        <div className="Hello">
          Hello
        </div>

        <div className="Skills">
          <Skills />
        </div>

        <div className="Projects">
          <Projects />
        </div>

        <div className="Contact">
          <Contact />
        </div>

        <div className="rightNav">
        </div>

        <div className="footer">
        </div>
      </div>
    </React.Fragment>
  );
}

export default Grid;
