// @flow

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';

import { borderRadius } from '../utils/src/border-radius';
import { themeColorLevel } from '../utils/src/color-functions';

import { alertVariant } from './utils/alert-variant';

import defaultTheme from './default-theme';

const Alert = styled.div`
  position: relative;
  padding: ${prop('theme.alertPaddingY', defaultTheme.alertPaddingY)}
    ${prop('theme.alertPaddingX', defaultTheme.alertPaddingX)};

  margin-bottom: ${prop(
    'theme.alertMarginBottom',
    defaultTheme.alertMarginBottom
  )};

  border: ${prop('theme.alertBorderWidth', defaultTheme.alertBorderWidth)} solid
    transparent;

  a {
    font-weight: ${prop(
      'theme.alertLinkFontWeight',
      defaultTheme.alertLinkFontWeight
    )};
  }

  ${borderRadius(
    prop('theme.alertBorderRadius', defaultTheme.alertBorderRadius)
  )};

  ${({ type, theme }) =>
    alertVariant(
      themeColorLevel(type, theme.alertBgLevel || defaultTheme.alertBgLevel),
      themeColorLevel(
        type,
        theme.alertBorderLevel || defaultTheme.alertBorderLevel
      ),
      themeColorLevel(
        type,
        theme.alertColorLevel || defaultTheme.alertColorLevel
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
