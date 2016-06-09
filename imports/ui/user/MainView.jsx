import React, { Component, PropTypes } from 'react';

import LoginForm from './LoginForm';
import DisplayUserInformation from './DisplayUserInformation';

// MainView component
export default class MainView extends Component {
  constructor(props, context) {
      super(props, context);
  };

  displayMain(appstate) {
    switch (appstate) {
      case 'login':
        return (<LoginForm />);
      break;
      case 'waiting':
        return (<div>Waiting</div>);
      break;
      case 'active':
        return (<div>Active</div>);
      break;
      case 'ending':
        return (<div>Ending</div>);
      break;
    }
  };

  render() {
    return (
      <main>
        { this.displayMain(this.props.appstate) }
      </main>
    );
  }
}

MainView.propTypes = {
  appstate: React.PropTypes.string.isRequired,
};
