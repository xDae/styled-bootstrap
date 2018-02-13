// @flow

import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';

import themeProp from '../utils/src/theme';

import {
  borderRightRadius,
  borderLeftRadius
} from '../utils/src/border-radius';

import PaginationLink from './PaginationLink';

import {
  paginationActiveColor,
  paginationActiveBg,
  paginationActiveBorderColor,
  paginationDisabledColor,
  paginationDisabledBg,
  paginationDisabledBorderColor
} from './default-theme';

const PaginationItem = styled.li`
  &:first-child {
    ${PaginationLink} {
      margin-left: 0;
      ${borderLeftRadius('0.25rem')};
    }
  }
  &:last-child {
    ${PaginationLink} {
      ${borderRightRadius('0.25rem')};
    }
  }

  ${props =>
    props.active &&
    css`
      ${PaginationLink} {
        z-index: 2;
        color: ${themeProp('paginationActiveColor', paginationActiveColor)};
        background-color: ${themeProp(
          'paginationActiveBg',
          paginationActiveBg
        )};
        border-color: ${themeProp(
          'paginationActiveBorderColor',
          paginationActiveBorderColor
        )};
      }
    `};

  ${props =>
    props.disabled &&
    css`
      ${PaginationLink} {
        color: ${themeProp('paginationDisabledColor', paginationDisabledColor)};
        pointer-events: none;
        background-color: ${themeProp(
          'paginationDisabledBg',
          paginationDisabledBg
        )};
        border-color: ${themeProp(
          'paginationDisabledBorderColor',
          paginationDisabledBorderColor
        )};
      }
    `};
`;

export default PaginationItem;
