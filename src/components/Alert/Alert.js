// @flow

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { borderRadius } from '../../utils/border-radius';
import { alertVariant } from '../../utils/alerts';
import { themeColorLevel } from '../../utils/color-functions';

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
  alertDangerBorderColor,
  themeColors
} from '../../defaultTheme';

const Alert = styled.div`
  ${props =>
    `padding: ${props.theme.alertPaddingY} ${props.theme.alertPaddingX};`};
  margin-bottom: ${props => props.theme.alertMarginBottom};
  border: ${props => props.theme.alertBorderWidth} solid transparent;

  a {
    font-weight: ${props => props.theme.alertLinkFontWeight};
  }

  ${props => borderRadius(props.theme.alertBorderRadius)};

  ${({ type }) =>
    alertVariant(
      themeColorLevel(type, -10),
      themeColorLevel(type, -9),
      themeColorLevel(type, 6)
    )}};

  ${StyledCloseIcon} {
    position: relative;
    float: right;
    top: -${props => props.theme.alertPaddingY};
    right: -${props => props.theme.alertPaddingX};
    ${props =>
      `padding: ${props.theme.alertPaddingY} ${props.theme.alertPaddingX};`};
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

Alert.propTypes = {
  theme: PropTypes.object
};

export default Alert;
