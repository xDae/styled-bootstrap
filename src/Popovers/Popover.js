import React from 'react';
import PropTypes from 'prop-types';

import StyledPopover from './StyledPopover';
import Heading from '../Heading';

const Popover = ({ title, children, ...props }) => (
  <StyledPopover {...props}>
    {title && <Heading as="h3">{title}</Heading>}
    <div>{children}</div>
  </StyledPopover>
);

Popover.defaultProps = {
  title: ''
};

Popover.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Popover;
