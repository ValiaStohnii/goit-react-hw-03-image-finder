import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    selectIMG: '',
  };

  formSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = (url, alt) => {
    this.setState(state => ({
      showModal: !state.showModal,
      selectIMG: { url, alt },
    }));
  };

  render() {
    const { showModal, imageName, selectIMG } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmit} />
        <ToastContainer />
        <ImageGallery imageName={imageName} onImageClick={this.toggleModal} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img srs={selectIMG.url} alt={selectIMG.alt} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
