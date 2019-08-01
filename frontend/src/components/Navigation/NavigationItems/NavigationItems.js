import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Button from '../../UI/Button/Button';

const navigationItems = (props) => (

  <div className="NavigaitionItems">
  <br></br>
      <Button clicked={props.postBtnClicked}>Post A Job</Button>

      <ul className="List">
          <NavigationItem link="/">My Jobs</NavigationItem>
          <NavigationItem link="/">My Candidates</NavigationItem>
          <NavigationItem link="/">Chat</NavigationItem>
          <NavigationItem link="/">Search</NavigationItem>
          <NavigationItem link="/">My Profile</NavigationItem>
      </ul>
  </div>
);

export default navigationItems;
