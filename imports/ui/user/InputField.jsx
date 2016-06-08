import React, { Component, PropTypes } from 'react';

// InputField component
export default class InputField extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <div className="input-field">
        <input id={ this.props.name } type={ this.props.type } placeholder={ this.props.placeholder }/>
      </div>
    );
  }
}

InputField.propTypes = {
};
