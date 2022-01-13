import React, { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast('Введіть назву картинки');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  handleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleNameChange}
            value={this.state.imageName}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
