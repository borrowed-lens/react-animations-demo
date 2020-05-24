import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

class App extends Component {
    state = {
        modalShow: false,
    };
    toggleModal = () => {
        console.log(
            'App -> toggleModal -> this.state.modalShow',
            this.state.modalShow
        );
        this.setState((prevState) => {
            return {
                modalShow: !prevState.modalShow,
            };
        });
    };
    render() {
        let timeout = {
            enter: 500,
            exit: 1000,
        };
        return (
            <div className='App'>
                <button className='Modal-click' onClick={this.toggleModal}>
                    click me!
                </button>
                <CSSTransition
                    in={this.state.modalShow}
                    timeout={timeout}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enterActive: 'openModal',
                        exitActive: 'closedModal',
                    }}>
                    <Modal closeModal={this.toggleModal} />
                </CSSTransition>
                {
                    //without custom classnames
                }
                {/* <CSSTransition
                    in={this.state.modalShow}
                    timeout={timeout}
                    mountOnEnter
                    unmountOnExit
                    classNames='slide-appear'>
                        <Modal
                            closeModal={this.toggleModal}
                        />
                </CSSTransition> */}
                {
                    // for different timeout for enter and exit
                }
                {/* <Transition
                    in={this.state.modalShow}
                    timeout={timeout}
                    mountOnEnter
                    unmountOnExit>
                    {(state) => (
                        <Modal
                            showModal={state}
                            closeModal={this.toggleModal}
                        />
                    )}
                </Transition> */}
                {
                    // for same timeout for enter and exit
                }
                {/* <Transition
                    in={this.state.modalShow}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit>
                    {(state) => (
                        <Modal
                            showModal={state}
                            closeModal={this.toggleModal}
                        />
                    )}
                </Transition> */}
                <Backdrop
                    showModal={this.state.modalShow}
                    closeModal={this.toggleModal}
                />
            </div>
        );
    }
}

export default App;
