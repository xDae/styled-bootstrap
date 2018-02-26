import styled, { css } from 'styled-components';

import themeProp from '../utils/src/theme';
import {
  popoverArrowOuterWidth,
  popoverArrowWidth,
  popoverArrowColor,
  popoverBorderColor
} from './default-theme';

const placementTop = offsetLeft => css`
  > div:first-child {
    left: ${() => (offsetLeft ? `${offsetLeft}px` : '50%')};
    border-width: ${themeProp(
      'popoverArrowOuterWidth',
      popoverArrowOuterWidth
    )};
    border-bottom-width: 0;
    border-top-color: ${themeProp('popoverBorderColor', popoverBorderColor)};
    bottom: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
    margin-left: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};

    &::after {
      content: '';
      border-width: ${themeProp('popoverArrowWidth', popoverArrowWidth)};
      top: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
      margin-left: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
      border-bottom-width: 0;
      border-top-color: ${themeProp('popoverArrowColor', popoverArrowColor)};
    }
  }
`;

const placementBottom = offsetLeft => css`
  > div:first-child {
    left: ${() => (offsetLeft ? `${offsetLeft}px` : '50%')};
    border-width: ${themeProp(
      'popoverArrowOuterWidth',
      popoverArrowOuterWidth
    )};
    border-top-width: 0;
    border-bottom-color: ${themeProp('popoverBorderColor', popoverBorderColor)};
    top: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
    margin-left: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};

    &::after {
      content: '';
      border-width: ${themeProp('popoverArrowWidth', popoverArrowWidth)};
      bottom: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
      margin-left: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
      border-bottom-color: white;
    }
  }
`;

export { placementTop, placementBottom };
