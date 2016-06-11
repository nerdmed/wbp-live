import React, { Component, PropTypes } from 'react';

// WaitingMessage component
export default class WaitingMessage extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <div className="waiting-message">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <h2 className="waiting-text">Bitte warten Sie auf die nächste Runde.</h2>
      </div>
    );
  }
}

WaitingMessage.propTypes = {
};
