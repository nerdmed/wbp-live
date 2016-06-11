import React, { Component, PropTypes } from 'react';

import LoginForm from './LoginForm';
import DisplayUserInformation from './DisplayUserInformation';
import WaitingMessage from './WaitingMessage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// MainView component
export default class MainView extends Component {
  constructor(props, context) {
      super(props, context);
  };

  displayMain() {
    switch (this.props.appstate) {
      case 'login':
        return (
          <ReactCSSTransitionGroup
          transitionName="main-view"
          component="main"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
            <LoginForm key={ '' + Math.random() }/>
          </ReactCSSTransitionGroup>
        );
      break;
      case 'waiting':
        return (
          <ReactCSSTransitionGroup
          transitionName="main-view"
          component="main"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
            <div className="waiting" key={ '' + Math.random() }>
              <WaitingMessage />
              <DisplayUserInformation name="Marc Nitzsche" rank={ 12 } from={ 100 } />
            </div>
          </ReactCSSTransitionGroup>
        );
      break;
      case 'active':
        return (<div key={ '' + Math.random() }>Active</div>);
      break;
      case 'ending':
        return (<div key={ '' + Math.random() }>Ending</div>);
      break;
    }
  };

  render() {
    return this.displayMain();
  }
}

MainView.propTypes = {
  appstate: React.PropTypes.string.isRequired,
};
