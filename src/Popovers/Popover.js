import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import StyledPopover from './StyledPopover';
import themeProp from '../utils/src/theme';
import { fontSizeSm } from '../utils/default-theme';

const Popover = ({placement, title, arrowOffsetLeft, ...props}) => (
  <StyledPopover placement={placement} arrowOffsetLeft={arrowOffsetLeft}>
    <div />
    <h3>{title}</h3>
    <div>
      {props.children}
    </div>
  </StyledPopover>
)

Popover.defaultProps = {
  arrowOffsetLeft: '50%'
}

export default Popover;
