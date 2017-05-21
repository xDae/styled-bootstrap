import React, { Component } from 'react';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="caca">
        {this.props.children}
      </div>
    );
  }
}
