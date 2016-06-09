import React, { Component, PropTypes } from 'react';

// Heading component
export default class Heading extends Component {
  constructor(props, context) {
      super(props, context);
    };

  render() {
    return (
      <header className="heading">
        <div className="pokal">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27"><title>  Pokal</title><desc>  Created with Sketch.</desc><g fill="none"><g fill="#FFF"><path d="M19 23.6L10.2 23.6C9.7 23.6 9.3 23.2 9.3 22.7 9.3 19.9 11.7 17.6 14.6 17.6 17.5 17.6 20 19.9 20 22.7 20 23.1 19.5 23.6 19 23.6L19 23.6ZM11.3 21.8L18 21.8C17.5 20.3 16.2 19.3 14.6 19.3 13 19.3 11.7 20.3 11.3 21.8L11.3 21.8Z"/><path d="M14.6 19C9.3 19 5 14.8 5 9.7L5 1.6C5 1.2 5.4 0.8 5.9 0.8L23.4 0.8C23.9 0.8 24.3 1.2 24.3 1.6L24.3 9.7C24.3 14.8 20 19 14.6 19L14.6 19ZM6.9 2.5L6.9 9.7C6.9 13.8 10.3 17.1 14.6 17.1 18.9 17.1 22.4 13.8 22.4 9.7L22.4 2.5 6.9 2.5Z"/><path d="M5.6 12.5C2.8 12.5 0.5 10.3 0.5 7.6 0.5 4.9 2.8 2.7 5.6 2.7 6 2.7 6.5 3.1 6.5 3.6 6.5 4.1 6 4.5 5.6 4.5 3.7 4.5 2.3 5.9 2.3 7.6 2.3 9.3 3.8 10.7 5.6 10.7 6 10.7 6.5 11.1 6.5 11.6 6.5 12.1 6.1 12.5 5.6 12.5L5.6 12.5Z"/><path d="M23.7 12.5C23.2 12.5 22.8 12.1 22.8 11.6 22.8 11.1 23.2 10.7 23.7 10.7 25.5 10.7 26.9 9.3 26.9 7.6 26.9 5.9 25.4 4.6 23.7 4.6 23.2 4.6 22.8 4.2 22.8 3.7 22.8 3.2 23.2 2.8 23.7 2.8 26.5 2.8 28.8 5 28.8 7.7 28.8 10.3 26.5 12.5 23.7 12.5L23.7 12.5Z"/><path d="M20.9 26.3L8.3 26.3C7.8 26.3 7.4 25.9 7.4 25.4 7.4 24.9 7.8 24.5 8.3 24.5L20.9 24.5C21.4 24.5 21.8 24.9 21.8 25.4 21.8 25.9 21.5 26.3 20.9 26.3L20.9 26.3Z"/></g></g></svg>
        </div>
        <h1 className="title">Wer besiegt Paul?</h1>
        <h2 className="subtitle">Livespiel</h2>
      </header>
    );
  }
}

Heading.propTypes = {
};
