import styled from 'styled-components';

import { borderRadius } from '../../utils/border-radius';
import { alertVariant } from '../../utils/alerts';

import { StyledCloseIcon } from '../CloseIcon/CloseIcon';

import {
  alertPaddingY,
  alertPaddingX,
  alertMarginBottom,
  alertBorderRadius,
  alertLinkFontWeight,
  alertBorderWidth,
  alertSuccessBg,
  alertSuccessText,
  alertSuccessBorderColor,
  alertInfoBg,
  alertInfoText,
  alertInfoBorderColor,
  alertWarningBg,
  alertWarningText,
  alertWarningBorderColor,
  alertDangerBg,
  alertDangerText,
  alertDangerBorderColor
} from '../../defaultTheme';

const Alert = styled.div`
  ${props =>
    `padding: ${props.theme.alertPaddingY} ${props.theme.alertPaddingX};`}
  margin-bottom: ${props => props.theme.alertMarginBottom};
  border: ${props => props.theme.alertBorderWidth} solid transparent;

  a {
    font-weight: ${props => props.theme.alertLinkFontWeight};
  }

  ${props => borderRadius(props.theme.alertBorderRadius)}

  ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return alertVariant(
          theme.alertSuccessBg,
          theme.alertSuccessBorderColor,
          theme.alertSuccessText
        );
      case 'info':
        return alertVariant(
          theme.alertInfoBg,
          theme.alertInfoBorderColor,
          theme.alertInfoText
        );
      case 'warning':
        return alertVariant(
          theme.alertWarningBg,
          theme.alertWarningBorderColor,
          theme.alertWarningText
        );
      case 'danger':
        return alertVariant(
          theme.alertDangerBg,
          theme.alertDangerBorderColor,
          theme.alertDangerText
        );
      default:
        return null;
    }
  }}

  ${StyledCloseIcon} {
    position: relative;
    float: right;
    top: -${props => props.theme.alertPaddingY};
    right: -${props => props.theme.alertPaddingX};
    ${props =>
      `padding: ${props.theme.alertPaddingY} ${props.theme.alertPaddingX};`}
    color: inherit;
  }
`;

Alert.defaultProps = {
  theme: {
    alertPaddingY,
    alertPaddingX,
    alertMarginBottom,
    alertBorderRadius,
    alertLinkFontWeight,
    alertBorderWidth,

    alertSuccessBg,
    alertSuccessText,
    alertSuccessBorderColor,

    alertInfoBg,
    alertInfoText,
    alertInfoBorderColor,

    alertWarningBg,
    alertWarningText,
    alertWarningBorderColor,

    alertDangerBg,
    alertDangerText,
    alertDangerBorderColor
  }
};

export default Alert;
