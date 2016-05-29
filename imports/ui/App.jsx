import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import LoginForm from './user/LoginForm.jsx';

// App component
class App extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <div className="container">
        <nav>
          <h1>WBP Live</h1>
        </nav>
        <main>
          <LoginForm />
          <div className="more-information">
            <h3>Marc Nitzsche</h3>
            <h3>1001. Platz</h3>
            </div>
        </main>
        <footer>
          <p>Copyright 2016 Wer besiegt Paul?</p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => ({}), App);
