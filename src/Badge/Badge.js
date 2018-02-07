// @flow

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

import { borderRadius } from '../utils/src/border-radius';
import { badgeVariant } from './utils/badge-variant';

import defaultTheme from './default-theme';

const Badge = styled.span`
  display: inline-block;
  padding: ${prop('theme.badgePaddingY')} ${prop('theme.badgePaddingX')};
  font-size: ${prop('theme.badgeFontSize')};
  font-weight: ${prop('theme.badgeFontWeight')};
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  ${borderRadius(prop('theme.badgeBorderRadius'))};

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }

  ${({ theme, color }) => badgeVariant(theme[color])};

  ${({ theme, pill }) =>
    pill &&
    css`
      padding-right: ${theme.badgePillPaddingX};
      padding-left: ${theme.badgePillPaddingX};
      ${borderRadius(theme.badgePillBorderRadius)};
    `};
`;

Badge.Link = Badge.withComponent('a');

Badge.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]),
  pill: PropTypes.bool
};

Badge.defaultProps = {
  theme: defaultTheme,
  color: 'primary',
  pill: false
};

export default Badge;
