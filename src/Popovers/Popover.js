import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import StyledPopover from './StyledPopover';
import themeProp from '../utils/src/theme';
import { fontSizeSm } from '../utils/default-theme';
import Heading from '../Heading'

const Popover = ({placement, title, arrowOffset, children, ...props}) => (
  <StyledPopover placement={placement} arrowOffset={arrowOffset}>
    <div />
    {title && <Heading as="h3">{title}</Heading>}
    <div>{children}</div>
  </StyledPopover>
);

export default Popover;
