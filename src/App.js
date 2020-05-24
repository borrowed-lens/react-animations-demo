import React, { Component } from 'react';
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
        return (
            <div className='App'>
                <button className='Modal-click' onClick={this.toggleModal}>
                    click me!
                </button>
                <Modal
                    showModal={this.state.modalShow}
                    closeModal={this.toggleModal}
                />
                <Backdrop
                    showModal={this.state.modalShow}
                    closeModal={this.toggleModal}
                />
            </div>
        );
    }
}

export default App;
