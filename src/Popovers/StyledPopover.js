import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import themeProp from '../utils/theme';
import { fontSizeSm } from '../utils/default-theme';
import * as defaultTheme from './default-theme';

const {
  popoverMaxWidth,
  zInderxPopover,
  popoverInnerPadding,
  popoverBg,
  popoverBorderWidth,
  popoverBorderColor,
  popoverBoxShadow,
  borderRadiusLg,
  popoverArrowOuterWidth,
  popoverArrowOuterColor,
  popoverArrowWidth,
  popoverArrowColor
} = defaultTheme;

const popoverPlacement = ({ placement, arrowOffsetLeft }) => {
  console.log(placement);
  switch (placement) {
    case 'top':
      return css`
        > div:first-child {
          left: ${arrowOffsetLeft};
          border-width: ${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
          border-bottom-width: 0;
          border-top-color: ${themeProp('popoverBorderColor', popoverBorderColor)};
          bottom: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
          margin-left: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
          &::after {
            content: '';
            border-width: ${themeProp('popoverArrowWidth', popoverArrowWidth)};
            bottom: 1px;
            margin-left: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
            border-bottom-width: 0;
            border-top-color: ${themeProp('popoverArrowColor', popoverArrowColor)};
            margin-left: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
          }
        }
      `;
    default:
      return null;
  }
};

const StyledPopover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${themeProp('zInderxPopover', zInderxPopover)};
  display: block;
  max-width: ${themeProp('popoverMaxWidth', popoverMaxWidth)};
  padding: 30px; || ${themeProp('popoverInnerPadding', popoverInnerPadding)};
  /* @include reset-text(); */
  font-size: ${themeProp('fontSizeSm', fontSizeSm)};
  word-wrap: break-word;
  background-color: ${themeProp('popoverBg', popoverBg)};
  background-clip: padding-box;
  border: ${themeProp('popoverBorderWidth', popoverBorderWidth)} solid ${themeProp('popoverBorderColor', popoverBorderColor)};
  /* @include border-radius(${borderRadiusLg});
  @include box-shadow(${popoverBoxShadow}); */
  > div:first-child,
  > div:first-child:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  ${props => popoverPlacement(props)}
`

export default StyledPopover;
