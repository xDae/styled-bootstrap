// @flow

import React from 'react';

import StyledTooltip from './StyledTooltip';

type Props = {
  children: any,
  placement: string
};

const Tooltip = ({ children, ...props }: Props) => (
  <StyledTooltip {...props}>
    <div />
    <div>{children}</div>
  </StyledTooltip>
);

export default Tooltip;
