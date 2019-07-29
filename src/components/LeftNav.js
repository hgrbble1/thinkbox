import React from 'react';
import './LeftNav.css';
import OutlineEmail from '../SVG/outlineEmail.js';
import OutlineHome from '../SVG/outlineHome.js';
import OutlinePermIdentity from '../SVG/outlinePermIdentity.js';
import OutlineSettings from '../SVG/outlineSettings.js';

function LeftNav() {
  return (
    <React.Fragment>
      <div className="LeftNavContainer">
        <div className="navItem">
          <OutlineEmail />
        </div>
        <div className="navItem">
          <OutlineHome />
        </div>
        <div className="navItem">
          <OutlinePermIdentity />
        </div>
        <div className="navItem">
          <OutlineSettings />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LeftNav;
