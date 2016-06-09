import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from './user/Heading';
import MainView from './user/MainView';

// App component
class App extends Component {
  constructor(props, context) {
      super(props, context);
      this.state = { // For debugging
        appstate: 'login',
      };
    };

  render() {
    return (
      <div className="container">
        <Heading />
        <MainView appstate={ this.state.appstate } />
        <footer>© 2016 Wer besiegt Paul?</footer>
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => ({}), App);
