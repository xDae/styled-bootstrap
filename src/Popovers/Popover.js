import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import StyledPopover from './StyledPopover';
import themeProp from '../utils/src/theme';
import { fontSizeSm } from '../utils/default-theme';

const Popover = ({placement, title, arrowOffset, ...props}) => (
  <StyledPopover placement={placement} arrowOffset={arrowOffset}>
    <div />
    <h3>{title}</h3>
    <div>
      {props.children}
    </div>
  </StyledPopover>
)

export default Popover;
