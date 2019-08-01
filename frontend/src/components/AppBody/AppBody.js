import React from 'react';

import './AppBody.css';
import Button from '../UI/Button/Button';

const appBody = (props) => (

    <div className="AppBody">
        <p>You haven’t posted any offer yet</p>
        <Button clicked={props.postBtnClicked}>Post A Job</Button>
    </div>
);

export default appBody;