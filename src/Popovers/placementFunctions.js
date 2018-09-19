import { css } from 'styled-components';

import themeProp from '../utils/theme';
import {
  popoverArrowOuterWidth,
  popoverArrowWidth,
  popoverArrowColor,
  popoverBorderColor
} from './default-theme';

const placementTop = offsetLeft => css`
  div:first-child {
    left: ${() => (offsetLeft ? `${offsetLeft}px` : '50%')};
    border-width: ${themeProp(
      'popoverArrowOuterWidth',
      popoverArrowOuterWidth
    )};
    border-bottom-width: 0;
    border-top-color: ${themeProp('popoverBorderColor', popoverBorderColor)};
    bottom: 0;
    margin-bottom: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
    margin-left: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};

    &::after {
      content: '';
      border-width: ${themeProp('popoverArrowWidth', popoverArrowWidth)};
      top: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
      margin-left: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
      border-top-color: ${themeProp('popoverArrowColor', popoverArrowColor)};
    }
  }
`;

const placementBottom = offsetLeft => css`
  div:first-child {
    left: ${() => (offsetLeft ? `${offsetLeft}px` : '50%')};
    border-width: ${themeProp(
      'popoverArrowOuterWidth',
      popoverArrowOuterWidth
    )};
    border-top-width: 0;
    border-bottom-color: ${themeProp('popoverBorderColor', popoverBorderColor)};
    top: 0;
    margin-top: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
    margin-left: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};

    &::after {
      content: '';
      border-width: ${themeProp('popoverArrowWidth', popoverArrowWidth)};
      bottom: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
      margin-left: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
      border-bottom-color: ${themeProp('popoverArrowColor', popoverArrowColor)};
    }
  }
`;

const placementRight = offsetTop => css`
  div:first-child {
    top: ${() => (offsetTop ? `${offsetTop}px` : '50%')};
    border-width: ${themeProp(
      'popoverArrowOuterWidth',
      popoverArrowOuterWidth
    )};
    border-left-width: 0;
    border-right-color: ${themeProp('popoverBorderColor', popoverBorderColor)};
    left: 0;
    margin-left: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
    margin-top: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};

    &::after {
      content: '';
      top: ${() => (offsetTop ? `${offsetTop}px` : '50%')};
      border-width: ${themeProp('popoverArrowWidth', popoverArrowWidth)};
      border-right-color: ${themeProp('popoverArrowColor', popoverArrowColor)};
      margin-top: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
      margin-left: calc(-${popoverArrowWidth} + 1px);
    }
  }
`;

const placementLeft = offsetTop => css`
  div:first-child {
    top: ${() => (offsetTop ? `${offsetTop}px` : '50%')};
    border-width: ${themeProp(
      'popoverArrowOuterWidth',
      popoverArrowOuterWidth
    )};
    border-right-width: 0;
    border-left-color: ${themeProp('popoverBorderColor', popoverBorderColor)};
    right: 0;
    margin-right: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
    margin-top: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};

    &::after {
      content: '';
      top: ${() => (offsetTop ? `${offsetTop}px` : '50%')};
      border-width: ${themeProp('popoverArrowWidth', popoverArrowWidth)};
      bottom: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
      margin-top: -${themeProp('popoverArrowWidth', popoverArrowWidth)};
      border-left-color: ${themeProp('popoverArrowColor', popoverArrowColor)};
      margin-left: -${themeProp('popoverArrowOuterWidth', popoverArrowOuterWidth)};
    }
  }
`;

export { placementTop, placementBottom, placementRight, placementLeft };
