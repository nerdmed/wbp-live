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
          <LoginForm/>
        );
      break;
      case 'waiting':
        return (
          <div className="waiting">
            <WaitingMessage />
            <DisplayUserInformation name="Marc Nitzsche" rank={ 12 } from={ 100 } />
          </div>
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
    return (
        <ReactCSSTransitionGroup
        transitionName="main-view"
        component="main"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
          <div className='main-wrapper' key={ '' + Math.random() }>
            {this.displayMain()}
          </div>
      </ReactCSSTransitionGroup>
    )
  }
}

MainView.propTypes = {
  appstate: React.PropTypes.string.isRequired,
};
