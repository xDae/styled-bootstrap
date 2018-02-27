import styled, { css } from 'styled-components';

import themeProp from '../utils/src/theme';
import { fontSizeSm, borderRadius } from '../utils/default-theme';
import * as defaultTheme from './default-theme';

import { placementTop, placementBottom, placementRight, placementLeft } from './placementFunctions'

const {
  popoverMaxWidth,
  zInderxPopover,
  popoverInnerPadding,
  popoverBg,
  popoverBorderWidth,
  popoverBorderColor,
  popoverBoxShadow
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
  top: 0;
  left: 0;
  z-index: ${themeProp('zInderxPopover', zInderxPopover)};
  display: block;
  max-width: ${themeProp('popoverMaxWidth', popoverMaxWidth)};
  padding: 30px; || ${themeProp('popoverInnerPadding', popoverInnerPadding)};
  font-size: ${themeProp('fontSizeSm', fontSizeSm)};
  word-wrap: break-word;
  background-color: ${themeProp('popoverBg', popoverBg)};
  background-clip: padding-box;
  border: ${themeProp(
    'popoverBorderWidth',
    popoverBorderWidth
  )} solid ${themeProp('popoverBorderColor', popoverBorderColor)};
  border-radius: ${themeProp('borderRadius', borderRadius)};
  box-shadow: ${themeProp('popoverBoxShadow', popoverBoxShadow)};

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
`;

export default StyledPopover;
