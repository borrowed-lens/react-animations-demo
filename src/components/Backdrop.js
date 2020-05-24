import React from 'react';
import './Backdrop.css';


const backdrop = (props) => {
    let classes = ['Backdrop', props.showModal ? 'openBackdrop' : '']
    return <div className={classes.join(' ')} onClick={props.closeModal}></div>;
}
export default backdrop;
