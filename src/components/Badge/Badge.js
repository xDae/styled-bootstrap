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
  badgePillBorderRadius
} from '../../defaultTheme';

const Badge = styled.span`
  display: inline-block;
  ${props =>
    `padding: ${props.theme.badgePaddingY} ${props.theme.badgePaddingX};`}
  font-size: ${props => props.theme.badgeFontSize};
  font-weight: ${props => props.badgeFontWeight};
  line-height: 1;
  color: ${props => props.theme.badgeColor};
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  -styled-mixin: ${borderRadius()};

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }

  ${({ theme, color }) => {
    switch (color) {
      case 'default':
        return badgeVariant(theme.badgeDefaultBg);
      case 'primary':
        return badgeVariant(theme.badgePrimaryBg);
      case 'success':
        return badgeVariant(theme.badgeSuccessBg);
      case 'info':
        return badgeVariant(theme.badgeInfoBg);
      case 'warning':
        return badgeVariant(theme.badgeWarningBg);
      case 'danger':
        return badgeVariant(theme.badgeDangerBg);
      default:
        return badgeVariant(theme.badgeDefaultBg);
    }
  }}

  ${({ theme, pill }) =>
    pill &&
    css`
    padding-right: ${theme.badgePillPaddingX};
    padding-left: ${theme.badgePillPaddingX};
    ${borderRadius(theme.badgePillBorderRadius)};
  `}
`;

Badge.propTypes = {
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger'
  ]),
  pill: PropTypes.bool
};

Badge.defaultProps = {
  color: 'default',
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
