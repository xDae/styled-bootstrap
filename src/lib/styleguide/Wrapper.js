import React, { Component } from 'react';

import {ThemeProvider } from 'styled-components';

// import { lumen } from '../../themes/lumen';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: {}
    }
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}

export default Wrapper;
