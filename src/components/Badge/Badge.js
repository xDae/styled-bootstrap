import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { borderRadius } from '../../utils/border-radius';
import { badgeVariant } from '../../utils/badges';

import * as defaults from '../../defaultTheme';

export const badgeDefaultBg = defaults.grayLight;
export const badgePrimaryBg = defaults.brandPrimary;
export const badgeSuccessBg = defaults.brandSuccess;
export const badgeInfoBg = defaults.brandInfo;
export const badgeWarningBg = defaults.brandWarning;
export const badgeDangerBg =  defaults.brandDanger;

export const badgeColor = defaults.white;
export const badgeLinkHoverColor = defaults.white;
export const badgeFontSize = '75%';
export const badgeFontWeight = defaults.fontWeightBold;
export const badgePaddingY = '.25em';
export const badgePaddingX = '.4em';

export const badgePillPaddingX = '.6em';
export const badgePillBorderRadius = '10rem';

const Badge = styled.span`
  display: inline-block;
  padding: ${badgePaddingY} ${badgePaddingX};
  font-size: ${badgeFontSize};
  font-weight: ${badgeFontWeight};
  line-height: 1;
  color: ${badgeColor};
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;

  ${borderRadius()}

  // Empty badges collapse automatically
  &:empty {
    display: none;
  }

  ${props => {
    switch(props.type) {
      case 'default':
        return badgeVariant(badgeDefaultBg);
      case 'primary':
        return badgeVariant(badgePrimaryBg);
      case 'success':
        return badgeVariant(badgeSuccessBg);
      case 'info':
        return badgeVariant(badgeInfoBg);
      case 'warning':
        return badgeVariant(badgeWarningBg);
      case 'danger':
        return badgeVariant(badgeDangerBg);
      default:
        return badgeVariant(badgeDefaultBg);
    }
  }}

  ${props => {
    if (props.pill) {
      return css`
        padding-right: ${badgePillPaddingX};
        padding-left: ${badgePillPaddingX};

        ${borderRadius(badgePillBorderRadius)};
      `;
    }
  }}
`;

Badge.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  pill: PropTypes.bool
}

Badge.defaultProps = {
  type: 'default',
  pill: false
}

export default Badge;
