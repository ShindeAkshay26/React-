
import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', this.state);

  };

  render() {
    return (
    
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
