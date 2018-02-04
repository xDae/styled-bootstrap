// @flow

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

import { borderRadius } from '../utils/src/border-radius';
import { badgeVariant } from './utils/badge-variant';

import defaultTheme from './default-theme';

// badgeFontSize: '75%',
// badgeFontWeight: 700,
// badgePaddingY: '.25em',
// badgePaddingX: '.4em',
// badgeBorderRadius: '.25rem',
// badgePillPaddingX: '.6em',
// badgePillBorderRadius: '10rem'

// "primary": "#007bff",
// "secondary": "#6c757d",
// "success": "#28a745",
// "info": "#17a2b8",
// "warning": "#ffc107",
// "danger": "#dc3545",
// "light": "#f8f9fa",
// "dark": "#343a40",

const Badge = styled.span`
  display: inline-block;
  padding: ${prop('theme.badgePaddingY', defaultTheme.badgePaddingY)} ${prop('theme.badgePaddingX', defaultTheme.badgePaddingX)};
  font-size: ${prop('theme.badgeFontSize', defaultTheme.badgeFontSize)};
  font-weight: ${prop('theme.badgeFontWeight', defaultTheme.badgeFontWeight)};
  line-height: 1;
  color: ${prop('theme.badgeColor', defaultTheme.badgeColor)};
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  ${borderRadius(
    prop('theme.badgeBorderRadius', defaultTheme.badgeBorderRadius)
  )};

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }

  ${({ theme, color }) => badgeVariant(theme[color] || defaultTheme[color])};

  ${({ theme, pill }) =>
    pill &&
    css`
      padding-right: ${theme.badgePillPaddingX ||
        defaultTheme.badgePillPaddingX};
      padding-left: ${theme.badgePillPaddingX ||
        defaultTheme.badgePillPaddingX};
      ${borderRadius(
        theme.badgePillBorderRadius || defaultTheme.badgePillBorderRadius
      )};
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
  color: 'primary',
  pill: false
};

export default Badge;
