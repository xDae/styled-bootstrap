import React from 'react';
import styled from 'styled-components';

import { borderRadius } from '../../utils/border-radius';
import { alertVariant } from '../../utils/alerts';

import * as defaults from '../../defaultTheme';

const alertPaddingY = '.75rem';
const alertPaddingX = '1.25rem';
const alertMarginBottom = '1rem';
const alertBorderRadius = defaults.borderRadius;
const alertLinkFontWeight = defaults.fontWeightBold;
const alertBorderWidth = defaults.borderWidth;

const alertSuccessBg = defaults.stateSuccessBg;
const alertSuccessText = defaults.stateSuccessText;
const alertSuccessBorderColor =  defaults.stateSuccessBorderColor;

const alertInfoBg = defaults.stateInfoBg;
const alertInfoText = defaults.stateInfoText;
const alertInfoBorderColor = defaults.stateInfoBorderColor;

const alertWarningBg = defaults.stateWarningBg;
const alertWarningText = defaults.stateWarningText;
const alertWarningBorderColor =  defaults.stateWarningBorderColor;

const alertDangerBg = defaults.stateDangerBg;
const alertDangerText = defaults.stateDangerText;
const alertDangerBorderColor = defaults.stateDangerBorderColor;

const StyledAlert = styled.div`
  padding: ${alertPaddingY} ${alertPaddingX};
  margin-bottom: ${alertMarginBottom};
  border: ${alertBorderWidth} solid transparent;

  a {
    font-weight: ${alertLinkFontWeight};
  }

  ${borderRadius(alertBorderRadius)}

  ${props => {
    switch(props.type) {
      case 'success':
        return alertVariant(alertSuccessBg, alertSuccessBorderColor, alertSuccessText);
      case 'info':
        return alertVariant(alertInfoBg, alertInfoBorderColor, alertInfoText);
      case 'warning':
        return alertVariant(alertWarningBg, alertWarningBorderColor, alertWarningText);
      case 'danger':
        return alertVariant(alertDangerBg, alertDangerBorderColor, alertDangerText);
      default:
        return null;
    }
  }}
`;

const Alert = props => <StyledAlert {...props}>{props.children}</StyledAlert>;

export default Alert;
