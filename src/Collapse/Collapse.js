import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import omit from 'lodash.omit';
import styled, { css } from 'styled-components';

import themeProp from '../utils/theme';
import transitionCollapse from './default-theme';

const Wrapper = styled.div`
  ${({ status }) => status === 'exited' && 'display: none;'};
  ${({ status }) => status === 'entered' && 'display: block;'};

  ${({ status }) =>
    (status === 'exiting' || status === 'entering') &&
    css`
      height: 0;
      overflow: hidden;
      transition: ${themeProp('transitionCollapse', transitionCollapse)};
    `};
`;

const TransitionTimeouts = {
  Fade: 150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal: 300, // $modal-transition
  Carousel: 600 // $carousel-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
const TransitionPropTypeKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited'
];

function getHeight(node) {
  return node.scrollHeight;
}

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null
    };
  }

  onEntering = node => {
    this.setState({ height: getHeight(node) });
    this.props.onEntering();
  };

  onEntered = () => {
    this.setState({ height: null });
    this.props.onEntered();
  };

  onExit = node => {
    this.setState({ height: getHeight(node) });
    this.props.onExit();
  };

  onExiting = node => {
    const unused = node.offsetHeight; // eslint-disable-line no-unused-vars
    this.setState({ height: 0 });
    this.props.onExiting();
  };

  onExited = () => {
    this.setState({ height: null });
    this.props.onExited();
  };

  render() {
    const { isOpen, children, ...otherProps } = this.props;
    const { height } = this.state;

    const childProps = omit(otherProps, TransitionPropTypeKeys);

    return (
      <Transition
        {...this.props}
        in={isOpen}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {status => {
          const style = height === null ? null : { height };
          return (
            <Wrapper status={status} style={{ ...style }} {...childProps}>
              {children}
            </Wrapper>
          );
        }}
      </Transition>
    );
  }
}

Collapse.defaultProps = {
  ...Transition.defaultProps,
  isOpen: false,
  timeout: TransitionTimeouts.Collapse
};

Collapse.propTypes = {
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Collapse;
