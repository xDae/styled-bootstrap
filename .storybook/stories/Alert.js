import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { injectGlobal } from 'styled-components';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Alert from '../../src/components/Alert/Alert';
import CloseIcon from '../../src/components/CloseIcon/CloseIcon';

injectGlobal`
  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity .15s linear;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity .15s linear;
  }
`;

class DismissableAlert extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      success: false,
      info: false,
      warning: false,
      danger: false
    }
  }

  closeAlert = type => {
    this.setState({ [type]: !this.state[type] } );
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={500}
      >
        {!this.state.success && <Alert type="success" >
          <CloseIcon onClick={() => this.closeAlert('success')} />
          <strong>Well done!</strong> You successfully read <a href="#">this important alert message</a>.
        </Alert>}

        {!this.state.info && <Alert type="info">
          <CloseIcon onClick={() => this.closeAlert('info')} />
          <strong>Heads up!</strong> This <a href="#">alert needs your attention</a>, but it's not super important.
        </Alert>}

        {!this.state.warning && <Alert type="warning">
          <CloseIcon onClick={() => this.closeAlert('warning')} />
          <strong>Warning!</strong> Better check yourself, you're <a href="#">not looking too good</a>.
        </Alert>}

        {!this.state.danger && <Alert type="danger">
          <CloseIcon onClick={() => this.closeAlert('danger')} />
          <strong>Oh snap!</strong> <a href="#">Change a few things up</a> and try submitting again.
        </Alert>}
      </CSSTransitionGroup>
    );
  }
}

export default storiesOf('Alert', module)
  .add('Alert', () => (
    <div>
      <Alert type="success">
        <strong>Well done!</strong> You successfully read <a href="#">this important alert message</a>.
      </Alert>
      <Alert type="info">
        <strong>Heads up!</strong> This <a href="#">alert needs your attention</a>, but it's not super important.
      </Alert>
      <Alert type="warning">
        <strong>Warning!</strong> Better check yourself, you're <a href="#">not looking too good</a>.
      </Alert>
      <Alert type="danger">
        <strong>Oh snap!</strong> <a href="#">Change a few things up</a> and try submitting again.
      </Alert>
    </div>
  ))
  .add('Alert with close Icon', () => (
    <DismissableAlert />
  ));
