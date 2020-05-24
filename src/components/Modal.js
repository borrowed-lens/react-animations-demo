import React from 'react';

import './Modal.css';

const modal = (props) => {
    // using Transition
    // let classes = ['Modal', props.showModal === 'entering' ? 'openModal' : props.showModal === 'exiting' ? 'closedModal' : null]
    // using CSSTransition no additional classes required

    return (
        <div className='Modal'>
            <p>hi, this is the modal!</p>
            <button className='Dismiss-button' onClick={props.closeModal}>dismiss modal</button>
        </div>
    );
};
export default modal;
