import React, { Component, PropTypes } from 'react';

// DisplayUserInformation component
export default class DisplayUserInformation extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <div className="more-information">
        <h2 className="full-name">{ this.props.name }</h2>

        <div className="horizontal-line" />

        <h2 className="rank">{ this.props.rank } / { this.props.from }</h2>
        <h3 className="rank-text">Platz</h3>

        <div className="horizontal-line" />
      </div>
    );
  }
}

DisplayUserInformation.propTypes = {
  name: React.PropTypes.string.isRequired,
  rank: React.PropTypes.number.isRequired,
  from: React.PropTypes.number.isRequired,
};
