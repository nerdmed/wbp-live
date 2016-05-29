import React, { Component, PropTypes } from 'react';

// LoginForm component
export default class LoginForm extends Component {
  constructor(props, context) {
      super(props, context);
    };

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.firstname.value, event.target.lastname.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
          <input type="text" name="firstname" placeholder="Vorname" />
          <input type="text" name="lastname" placeholder="Nachname" />
          <input type="submit" name="submit-name" />
      </form>
    );
  }
}

LoginForm.propTypes = {
};
