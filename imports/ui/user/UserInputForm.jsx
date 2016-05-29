import React, { Component, PropTypes } from 'react';

// UserInputForm component
export default class UserInputForm extends Component {
  constructor(props, context) {
      super(props, context);
    };

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.guess.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
          <input type="number" name="guess" placeholder="Geben Sie Ihren Tipp ein" />
          <input type="submit" name="submit-guess" />
      </form>
    );
  }
}

UserInputForm.propTypes = {
};
