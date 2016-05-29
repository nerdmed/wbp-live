import React, { Component, PropTypes } from 'react';

// WaitMessage component
export default class WaitMessage extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <div className="container">
        <h2>Bitte haben Sie einen Moment Geduld.</h2>
      </div>
    );
  }
}

WaitMessage.propTypes = {
};
