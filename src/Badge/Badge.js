// @flow

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import themeProp from '../utils/src/theme';

import { borderRadius } from '../utils/src/border-radius';
import { badgeVariant } from './utils/badge-variant';

import {
  badgeFontSize,
  badgeFontWeight,
  badgePaddingY,
  badgePaddingX,
  badgeBorderRadius,
  badgePillPaddingX,
  badgePillBorderRadius
} from './default-theme';

const Badge = styled.span`
  display: inline-block;
  padding: ${themeProp('badgePaddingY', badgePaddingY)}
    ${themeProp('badgePaddingX', badgePaddingX)};
  font-size: ${themeProp('badgeFontSize', badgeFontSize)};
  font-weight: ${themeProp('badgeFontWeight', badgeFontWeight)};
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  ${borderRadius(themeProp('badgeBorderRadius', badgeBorderRadius))};

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }

  ${({ theme, color }) => badgeVariant(theme[color])};

  ${({ pill }) =>
    pill &&
    css`
      padding-right: ${themeProp('badgePillPaddingX', badgePillPaddingX)};
      padding-left: ${themeProp('badgePillPaddingX', badgePillPaddingX)};
      ${borderRadius(
        themeProp('badgePillBorderRadius', badgePillBorderRadius)
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
