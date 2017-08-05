// @flow

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { borderRadius } from '../../utils/border-radius';
import { badgeVariant } from '../../utils/badges';

import {
  badgeDefaultBg,
  badgePrimaryBg,
  badgeSuccessBg,
  badgeInfoBg,
  badgeWarningBg,
  badgeDangerBg,
  badgeColor,
  badgeLinkHoverColor,
  badgeFontSize,
  badgeFontWeight,
  badgePaddingY,
  badgePaddingX,
  badgePillPaddingX,
  badgePillBorderRadius,
  themeColors
} from '../../defaultTheme';

const Badge = styled.span`
  display: inline-block;
  ${props =>
    `padding: ${props.theme.badgePaddingY} ${props.theme.badgePaddingX};`};
  font-size: ${props => props.theme.badgeFontSize};
  font-weight: ${props => props.theme.badgeFontWeight};
  line-height: 1;
  color: ${props => props.theme.badgeColor};
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  ${borderRadius()};

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }

  ${({ color }) => badgeVariant(themeColors[color])};

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
  color: 'primary',
  pill: false,
  theme: {
    badgeDefaultBg,
    badgePrimaryBg,
    badgeSuccessBg,
    badgeInfoBg,
    badgeWarningBg,
    badgeDangerBg,

    badgeColor,
    badgeLinkHoverColor,
    badgeFontSize,
    badgeFontWeight,
    badgePaddingY,
    badgePaddingX,

    badgePillPaddingX,
    badgePillBorderRadius
  }
};

export default Badge;
