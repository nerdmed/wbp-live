import React, { Component, PropTypes } from 'react';
import InputField from './InputField';

// LoginForm component
export default class LoginForm extends Component {
  constructor(props, context) {
      super(props, context);
    };

  handleSubmit(event) {
    event.preventDefault();
    alert(event.target.firstname.value + ' && ' + event.target.lastname.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className="input-form">
          <InputField type="text" name="firstname" placeholder="Vorname" />
          <InputField type="text" name="lastname" placeholder="Nachname" />
          <input type="submit" name="submit-name" value="Anmelden" />
      </form>
    );
  }
}

LoginForm.propTypes = {
};
