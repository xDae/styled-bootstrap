// @flow

import PropTypes from 'prop-types';
import styled from 'styled-components';
// $FlowIssue
import get from 'lodash.get';
import themeProp from '../utils/theme';

import { borderRadius } from '../utils/border-radius';
import { themeColorLevel } from '../utils/color-functions';

import { alertVariant } from './utils/alert-variant';

import * as defaultTheme from './default-theme';

const {
  alertPaddingY,
  alertPaddingX,
  alertMarginBottom,
  alertBorderWidth,
  alertLinkFontWeight,
  alertBorderRadius,
  alertBgLevel,
  alertBorderLevel,
  alertColorLevel
} = defaultTheme;

const Alert = styled.div`
  position: relative;
  padding: ${themeProp('alertPaddingY', alertPaddingY)}
    ${themeProp('alertPaddingX,', alertPaddingX)};

  margin-bottom: ${themeProp('alertMarginBottom', alertMarginBottom)};

  border: ${themeProp('alertBorderWidth', alertBorderWidth)} solid transparent;

  a {
    font-weight: ${themeProp('alertLinkFontWeight', alertLinkFontWeight)};
  }

  ${borderRadius(themeProp('alertBorderRadius', alertBorderRadius))};

  ${({ type, theme }) =>
    alertVariant(
      themeColorLevel(
        defaultTheme[type],
        get(theme, 'alertBgLevel', alertBgLevel)
      ),
      themeColorLevel(
        defaultTheme[type],
        get(theme, 'alertBorderLevel', alertBorderLevel)
      ),
      themeColorLevel(
        defaultTheme[type],
        get(theme, 'alertColorLevel', alertColorLevel)
      )
    )}};
`;

Alert.defaultProps = {
  type: 'primary'
};

Alert.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ])
};

export default Alert;
