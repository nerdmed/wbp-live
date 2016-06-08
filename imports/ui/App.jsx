import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import LoginForm from './user/LoginForm';
import Navigation from './user/Navigation';
import DisplayUserInformation from './user/DisplayUserInformation';

// App component
class App extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <div className="container">
        <Navigation />
        <main>
          <LoginForm />
          <DisplayUserInformation name="Marc Nitzsche" rank="211" from="315" />
        </main>
        <footer>
          © 2016 Wer besiegt Paul?
        </footer>
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => ({}), App);
