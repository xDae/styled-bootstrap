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
  padding: ${prop('theme.alertPaddingY')} ${prop('theme.alertPaddingX')};

  margin-bottom: ${prop('theme.alertMarginBottom')};

  border: ${prop('theme.alertBorderWidth')} solid transparent;

  a {
    font-weight: ${prop('theme.alertLinkFontWeight')};
  }

  ${borderRadius(prop('theme.alertBorderRadius'))};

  ${({ type, theme }) =>
    alertVariant(
      themeColorLevel(type, theme.alertBgLevel),
      themeColorLevel(type, theme.alertBorderLevel),
      themeColorLevel(type, theme.alertColorLevel)
    )}};
`;

Alert.defaultProps = {
  type: 'primary',
  theme: defaultTheme
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
