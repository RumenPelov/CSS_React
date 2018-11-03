import React from 'react';
import {NavLink} from 'react-router-dom';

import JoinBtn from './JoinBtn';


export default class Example extends React.Component {


  render() {
    return (
      <div className="navbar" >
          <ul className="navbar__navigation">
            <li className="navbar__navigation-item">
              <NavLink className="navbar__navigation-link" to="/organizations/"><span>Organizations</span></NavLink>
            </li>
            <li className="navbar__navigation-item">
             <NavLink className="navbar__navigation-link" to="/influencers/"><span>Influencers</span></NavLink>
            </li>
            <li className="navbar__navigation-item">
             <NavLink className="navbar__navigation-link" to="/events/"><span>Events</span></NavLink>
            </li>
            <li className="navbar__navigation-item">
             <NavLink className="navbar__navigation-link" to="/goals/"><span>Goals</span></NavLink>
            </li>
          </ul>

          <div className="navbar__right-container">
            <div className="navbar__right-item" >
              <JoinBtn />
            </div>
            <div className="navbar__right-item" >
              <div className="navbar__circle"></div>
            </div>
          </div>  
    </div>
    
    );
  }
}

