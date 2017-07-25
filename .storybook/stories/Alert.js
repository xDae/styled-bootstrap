import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { injectGlobal } from 'styled-components';

import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';

import Alert from '../../src/components/Alert';
import CloseIcon from '../../src/components/CloseIcon/CloseIcon';

injectGlobal`
  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity .15s linear;
  }

  .example-exit {
    opacity: 1;
  }

  .example-exit.example-exit-active {
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
    };
  }

  closeAlert = type => {
    this.setState({ [type]: !this.state[type] });
  };

  render() {
    return (
      <Transition>
        <TransitionGroup>
        {!this.state.success &&
          <CSSTransition
            key={1}
            classNames="example"
            timeout={{ enter: 500, exit: 300 }}
          >
            <Alert type="success">
              <CloseIcon onClick={() => this.closeAlert('success')} />
              <strong>Well done!</strong> You successfully read{' '}
              <a href="#">this important alert message</a>.
            </Alert>
          </CSSTransition>}

        {!this.state.info &&
          <CSSTransition
            key={2}
            classNames="example"
            timeout={{ enter: 500, exit: 300 }}
          >
            <Alert type="info">
              <CloseIcon onClick={() => this.closeAlert('info')} />
              <strong>Heads up!</strong> This{' '}
              <a href="#">alert needs your attention</a>, but it's not super
              important.
            </Alert>
          </CSSTransition>}

        {!this.state.warning &&
          <CSSTransition
            key={3}
            classNames="example"
            timeout={{ enter: 500, exit: 300 }}
          >
            <Alert type="warning">
              <CloseIcon onClick={() => this.closeAlert('warning')} />
              <strong>Warning!</strong> Better check yourself, you're{' '}
              <a href="#">not looking too good</a>.
            </Alert>
          </CSSTransition>}

        {!this.state.danger &&
          <CSSTransition
            key={4}
            classNames="example"
            timeout={{ enter: 500, exit: 300 }}
          >
            <Alert type="danger">
              <CloseIcon onClick={() => this.closeAlert('danger')} />
              <strong>Oh snap!</strong> <a href="#">Change a few things up</a> and
              try submitting again.
            </Alert>
          </CSSTransition>}

        </TransitionGroup>
      </Transition>
    );
  }
}

export default storiesOf('Alert', module)
  .add('Alert', () =>
    <div style={{ padding: '1.5rem' }}>
      <Alert type="success">
        <strong>Well done!</strong> You successfully read{' '}
        <a href="#">this important alert message</a>.
      </Alert>
      <Alert type="info">
        <strong>Heads up!</strong> This{' '}
        <a href="#">alert needs your attention</a>, but it's not super
        important.
      </Alert>
      <Alert type="warning">
        <strong>Warning!</strong> Better check yourself, you're{' '}
        <a href="#">not looking too good</a>.
      </Alert>
      <Alert type="danger">
        <strong>Oh snap!</strong> <a href="#">Change a few things up</a> and try
        submitting again.
      </Alert>
    </div>
  )
  .add('Alert with close Icon', () =>
    <div style={{ padding: '1.5rem' }}>
      <DismissableAlert />
    </div>
  );
