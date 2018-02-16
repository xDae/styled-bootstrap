// @flow

import styled, { css } from 'styled-components';

import themeProp from '../utils/src/theme';

import { hoverFocus } from '../utils/src/hover';

import {
  paginationPaddingY,
  paginationPaddingX,
  paginationLineHeight,
  paginationColor,
  paginationBg,
  paginationBorderColor,
  paginationHoverColor,
  paginationHoverBg,
  paginationHoverBorderColor,
  paginationBorderWidth
} from './default-theme';

const PaginationLink = styled.a`
  position: relative;
  display: block;
  padding: ${themeProp('paginationPaddingY', paginationPaddingY)}
    ${themeProp('paginationPaddingX', paginationPaddingX)};
  margin-left: -1px;
  line-height: ${themeProp('paginationLineHeight', paginationLineHeight)};
  color: ${themeProp('paginationColor', paginationColor)};
  background-color: ${themeProp('paginationBg', paginationBg)};
  border: ${themeProp('paginationBorderWidth', paginationBorderWidth)} solid
    ${themeProp('paginationBorderColor', paginationBorderColor)};

  ${hoverFocus(css`
    color: ${themeProp('paginationHoverColor', paginationHoverColor)};
    text-decoration: none;
    background-color: ${themeProp('paginationHoverBg', paginationHoverBg)};
    border-color: ${themeProp(
      'paginationHoverBorderColor',
      paginationHoverBorderColor
    )};
  `)};
`;

export default PaginationLink;
