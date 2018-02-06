import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';

import { injectGlobal } from 'styled-components';

import {
  Transition,
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

import { DismissableAlert } from '../index';

injectGlobal`
  .react-transition-exit {
    opacity: 1;
    height: 50px;
    overflow: hidden;
  }

  .react-transition-exit.react-transition-exit-active {
    height: 0;
    opacity: 0;
    transition: all .15s linear;
  }
`;

const transitionProps = {
  classNames: 'react-transition',
  timeout: { enter: 500, exit: 300 }
};

class DismissableAlertWrapper extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      primary: true,
      secondary: true,
      success: true,
      danger: true,
      warning: true,
      info: true,
      light: true,
      dark: true
    };
  }

  closeAlert = type => {
    this.setState({ [type]: !this.state[type] });
  };

  render() {
    return (
      <TransitionGroup>
        {this.state.primary && (
          <CSSTransition key={1} {...transitionProps}>
            <DismissableAlert
              type="primary"
              onClose={() => this.closeAlert('primary')}
            >
              This is a primary alert with <a href="#">an example link</a>. Give
              it a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}

        {this.state.secondary && (
          <CSSTransition key={2} {...transitionProps}>
            <DismissableAlert
              type="secondary"
              onClose={() => this.closeAlert('secondary')}
            >
              This is a secondary alert with <a href="#">an example link</a>.
              Give it a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}

        {this.state.success && (
          <CSSTransition key={3} {...transitionProps}>
            <DismissableAlert
              type="success"
              onClose={() => this.closeAlert('success')}
            >
              This is a success alert with <a href="#">an example link</a>. Give
              it a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}

        {this.state.danger && (
          <CSSTransition key={4} {...transitionProps}>
            <DismissableAlert
              type="danger"
              onClose={() => this.closeAlert('danger')}
            >
              This is a danger alert with <a href="#">an example link</a>. Give
              it a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}

        {this.state.warning && (
          <CSSTransition key={5} {...transitionProps}>
            <DismissableAlert
              type="warning"
              onClose={() => this.closeAlert('warning')}
            >
              This is a warning alert with <a href="#">an example link</a>. Give
              it a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}

        {this.state.info && (
          <CSSTransition key={6} {...transitionProps}>
            <DismissableAlert
              type="info"
              onClose={() => this.closeAlert('info')}
            >
              This is a info alert with <a href="#">an example link</a>. Give it
              a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}

        {this.state.light && (
          <CSSTransition key={7} {...transitionProps}>
            <DismissableAlert
              type="light"
              onClose={() => this.closeAlert('light')}
            >
              This is a light alert with <a href="#">an example link</a>. Give
              it a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}

        {this.state.dark && (
          <CSSTransition key={8} {...transitionProps}>
            <DismissableAlert
              type="dark"
              onClose={() => this.closeAlert('dark')}
            >
              This is a dark alert with <a href="#">an example link</a>. Give it
              a click if you like.
            </DismissableAlert>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default storiesOf('Alert', module)
  .addDecorator(
    host({
      title: 'A host container for components under test.',
      align: 'center',
      width: 700
    })
  )
  .add('Dismissable Alert', () => <DismissableAlertWrapper />);
