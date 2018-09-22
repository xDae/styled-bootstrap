import styled from 'styled-components';

import themeProp from '../utils/theme';
import * as defaultTheme from './default-theme';

import {
  placementTop,
  placementBottom,
  placementRight,
  placementLeft
} from './placementFunctions';

const {
  popoverMaxWidth,
  zInderxPopover,
  popoverInnerPadding,
  popoverBg,
  popoverBorderWidth,
  popoverBorderColor,
  popoverBoxShadow,
  popoverTitlePaddingX,
  popoverTitlePaddingY,
  popoverTitleBbg,
  popoverTitleBorderBottom,
  fontSizeSm,
  borderRadius
} = defaultTheme;

const popoverPlacement = ({ placement, arrowOffset }) => {
  switch (placement) {
    case 'top':
      return placementTop(arrowOffset);
    case 'bottom':
      return placementBottom(arrowOffset);
    case 'right':
      return placementRight(arrowOffset);
    case 'left':
      return placementLeft(arrowOffset);
    default:
      return null;
  }
};

const StyledPopover = styled.div`
  position: absolute;
  top: ${({ positionTop }) => `${positionTop}px` || 0};
  left: ${({ positionLeft }) => `${positionLeft}px` || 0};
  z-index: ${themeProp('zInderxPopover', zInderxPopover)};
  display: block;
  max-width: ${themeProp('popoverMaxWidth', popoverMaxWidth)};
  padding: ${themeProp('popoverInnerPadding', popoverInnerPadding)};
  font-size: ${themeProp('fontSizeSm', fontSizeSm)};
  word-wrap: break-word;
  background-color: ${themeProp('popoverBg', popoverBg)};
  background-clip: padding-box;
  border: ${themeProp('popoverBorderWidth', popoverBorderWidth)} solid
    ${themeProp('popoverBorderColor', popoverBorderColor)};
  border-radius: ${themeProp('borderRadius', borderRadius)};
  box-shadow: ${themeProp('popoverBoxShadow', popoverBoxShadow)};

  div:first-child,
  div:first-child:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  ${props => popoverPlacement(props)};
  h3 {
    margin: 0;
    padding: ${themeProp('popoverTitlePaddingY', popoverTitlePaddingY)}
      ${themeProp('popoverTitlePaddingX', popoverTitlePaddingX)};
    font-size: 14px;
    background-color: ${themeProp('popoverTitleBbg', popoverTitleBbg)};
    border-bottom: ${themeProp(
      'popoverTitleBorderBottom',
      popoverTitleBorderBottom
    )};
    border-radius: 5px 5px 0 0;
  }
  div:last-child {
    padding: 9px 14px;
  }
`;

export default StyledPopover;
