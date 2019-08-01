import React from 'react';

import myLogo from '../../assets/images/react-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
       <img src={myLogo} alt="MyLogo"/>
    </div>
);

export default logo;