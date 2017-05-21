import React, { Component } from 'react';

class Wrapper extends Component {
  render() {
    return (
      this.props.children
    );
  }
}

export default Wrapper;
