// @flow

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import {
  borderRadius,
  borderRightRadius,
  borderLeftRadius
} from '../../utils/border-radius';

import { paginationSize } from '../../utils/pagination';

import { hoverFocus } from '../../utils/hover';

import {
  paginationPaddingY,
  paginationPaddingX,
  paginationPaddingYsm,
  paginationPaddingXsm,
  paginationPaddingYlg,
  paginationPaddingXlg,
  paginationLineHeight,
  paginationColor,
  paginationBg,
  paginationBorderWidth,
  paginationBorderColor,
  paginationHoverColor,
  paginationHoverBg,
  paginationHoverBorderColor,
  paginationActiveColor,
  paginationActiveBg,
  paginationActiveBorderColor,
  paginationDisabledColor,
  paginationDisabledBg,
  paginationDisabledBorderColor,
  fontSizeLg,
  lineHeightLg,
  borderRadiusLg,
  fontSizeSm,
  lineHeightSm,
  borderRadiusSm
} from '../../defaultTheme';

const Pagination = styled.ul`
  display: flex;
  // 1-2: Disable browser default list styles
  padding-left: 0; // 1
  list-style: none; // 2
  ${borderRadius()};

  ${props =>
    props.size === 'large' &&
    paginationSize(
      paginationPaddingYlg,
      paginationPaddingXlg,
      fontSizeLg,
      lineHeightLg,
      borderRadiusLg
    )};

  ${props =>
    props.size === 'small' &&
    paginationSize(
      paginationPaddingYsm,
      paginationPaddingXsm,
      fontSizeSm,
      lineHeightSm,
      borderRadiusSm
    )};
`;

Pagination.Link = styled.a`
  position: relative;
  display: block;
  ${props =>
    `padding: ${props.theme.paginationPaddingY} ${props.theme
      .paginationPaddingX};`};
  margin-left: -1px;
  line-height: ${props => props.theme.paginationLineHeight};
  color: ${props => props.theme.paginationColor};
  background-color: ${props => props.theme.paginationBg};
  ${props =>
    `border: ${props.theme.paginationBorderWidth} solid ${props.theme
      .paginationBorderColor};`};

  // TODO: i dont know why its working
  // ${hoverFocus};
  ${hoverFocus(css`
    color: ${props => props.theme.paginationHoverColor};
    text-decoration: none;
    background-color: ${props => props.theme.paginationHoverBg};
    border-color: ${props => props.theme.paginationHoverBorderColor};
  `)};
`;

Pagination.Item = styled.li`
  &:first-child {
    ${Pagination.Link} {
      margin-left: 0;
      ${borderLeftRadius('0.25rem')};
    }
  }
  &:last-child {
    ${Pagination.Link} {
      ${borderRightRadius('0.25rem')};
    }
  }

  ${props =>
    props.active &&
    css`
    ${Pagination.Link} {
      z-index: 2;
      color: ${props.theme.paginationActiveColor};
      background-color: ${props.theme.paginationActiveBg};
      border-color: ${props.theme.paginationActiveBorderColor};
    }
  `};

  ${props =>
    props.disabled &&
    css`
    ${Pagination.Link} {
      color: ${props.theme.paginationDisabledColor};
      pointer-events: none;
      background-color: ${props.theme.paginationDisabledBg};
      border-color: ${props.theme.paginationDisabledBorderColor};
    }
  `};
`;

const theme = {
  paginationPaddingY,
  paginationPaddingX,
  paginationPaddingYsm,
  paginationPaddingXsm,
  paginationPaddingYlg,
  paginationPaddingXlg,
  paginationLineHeight,
  paginationColor,
  paginationBg,
  paginationBorderWidth,
  paginationBorderColor,
  paginationHoverColor,
  paginationHoverBg,
  paginationHoverBorderColor,
  paginationActiveColor,
  paginationActiveBg,
  paginationActiveBorderColor,
  paginationDisabledColor,
  paginationDisabledBg,
  paginationDisabledBorderColor,
  fontSizeLg,
  lineHeightLg,
  borderRadiusLg,
  fontSizeSm,
  lineHeightSm,
  borderRadiusSm
};

Pagination.defaultProps = { theme };
Pagination.Item.defaultProps = { theme };
Pagination.Link.defaultProps = { theme };

Pagination.propTypes = {
  theme: PropTypes.object
};

export default Pagination;
