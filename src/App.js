import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
  };

  formSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmit} />
        <ToastContainer />
        <ImageGallery imageName={this.state.imageName} onImageClick={this.toggleModal} />
        {showModal && <Modal onClose={this.toggleModal} />}
        <Button />
      </div>
    );
  }
}

export default App;
