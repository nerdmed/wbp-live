import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// App component
class App extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => ({}), App);
