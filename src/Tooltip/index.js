import React from 'react';

import StyledTooltip from './StyledTooltip';

const Tooltip = ({ children, ...props }) => (
  <StyledTooltip {...props}>
    <div />
    <div>{children}</div>
  </StyledTooltip>
);

export default Tooltip;
