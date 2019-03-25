import styled from 'styled-components';

import * as defaultTheme from './default-theme';
import themeProp from '../utils/theme';
import { fontSizeSm, borderRadius } from '../utils/defaultTheme';
import arrowPlacement from './arrowPlacement';

const {
  zIndexTooltip,
  tooltipMaxWidth,
  tooltipBg,
  tooltipOpacity,
  tooltipPaddingX,
  tooltipPaddingY,
  tooltipMargin,
  tooltipColor
} = defaultTheme;

const StytledTooltip = styled.div`
  position: absolute;
  z-index: ${themeProp('zIndexTooltip', zIndexTooltip)};
  display: block;
  margin: ${themeProp('tooltipMargin', tooltipMargin)};
  background-color: ${themeProp('tooltipBg', tooltipBg)};
  opacity: ${themeProp('tooltipOpacity', tooltipOpacity)};
  font-size: ${themeProp('fontSizeSm', fontSizeSm)};
  border-radius: ${themeProp('borderRadius', borderRadius)};
  div:first-child {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  ${props => arrowPlacement(props)};
  div:last-child {
    max-width: ${themeProp('tooltipMaxWidth', tooltipMaxWidth)};
    padding: ${themeProp('tooltipPaddingY', tooltipPaddingY)}
      ${themeProp('tooltipPaddingX', tooltipPaddingX)};
    color: ${themeProp('tooltipColor', tooltipColor)};
    text-align: center;
  }
`;

export default StytledTooltip;
