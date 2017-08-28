// @flow

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';

import { StyledCloseIcon } from '../../CloseIcon/src/CloseIcon';
import { borderRadius, themeColorLevel } from '@styled-bootstrap/utils';

import { alertVariant } from './utils/alert-variant';

import defaultTheme from './default-theme';

const Alert = styled.div`
  padding: ${prop('theme.alertPaddingY')} ${prop('theme.alertPaddingX')};
  margin-bottom: ${prop('theme.alertMarginBottom')};
  border: ${prop('theme.alertBorderWidth')} solid transparent;

  a {
    font-weight: ${prop('theme.alertLinkFontWeight')};
  }

  ${borderRadius(prop('theme.alertBorderRadius'))};

  ${({ type }) =>
    alertVariant(
      themeColorLevel(type, -10),
      themeColorLevel(type, -9),
      themeColorLevel(type, 6)
    )}};

  ${StyledCloseIcon} {
    position: relative;
    float: right;
    top: -${prop('theme.alertPaddingY')};
    right: -${prop('theme.alertPaddingX')};
    padding: ${prop('theme.alertPaddingY')} ${prop('theme.alertPaddingX')};
    color: inherit;
  }
`;

Alert.defaultProps = {
  theme: defaultTheme
};

Alert.propTypes = {
  theme: PropTypes.object
};

export default Alert;
