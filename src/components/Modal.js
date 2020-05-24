import React from 'react';

import './Modal.css';

const modal = (props) => {
    let classes = ['Modal', props.showModal? 'openModal' : 'closedModal']
    return (
        <div className={classes.join(' ')}>
            <p>hi, this is the modal!</p>
            <button className='Dismiss-button' onClick={props.closeModal}>dismiss modal</button>
        </div>
    );
};
export default modal;
