import { css } from 'styled-components';
import themeProp from '../utils/theme';
import { tooltipArrowWidth, tooltipBg } from './default-theme';

const placementTop = css`
  div:first-child {
    left: 50%;
    border-width: ${themeProp('tooltipArrowWidth',tooltipArrowWidth)};
    border-bottom-width: 0;
    border-top-color: ${themeProp('tooltipBg', tooltipBg)};
    bottom: 0;
    margin-bottom: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
    margin-left: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
  }
`;

const placementBottom = css`
  div:first-child {
    left: 50%;
    border-width: ${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
    border-top-width: 0;
    border-bottom-color: ${themeProp('tooltipBg', tooltipBg)};
    top: 0;
    margin-top: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
    margin-left: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
  }
`;

const placementRight = css`
  div:first-child {
    top: 50%;
    border-width: ${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
    border-left-width: 0;
    border-right-color: ${themeProp('tooltipBg', tooltipBg)};
    left: 0;
    margin-left: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
    margin-top: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
  }
`;

const placementLeft = css`
  div:first-child {
    top: 50%;
    border-width: ${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
    border-right-width: 0;
    border-left-color: ${themeProp('tooltipBg', tooltipBg)};
    right: 0;
    margin-right: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
    margin-top: -${themeProp('tooltipArrowWidth', tooltipArrowWidth)};
  }
`;

const arrowPlacement = ({ placement }) => {
  switch (placement) {
    case 'top':
      return placementTop;
    case 'bottom':
      return placementBottom;
    case 'right':
      return placementRight;
    case 'left':
      return placementLeft;
    default:
      return null;
  }
};

export default arrowPlacement;
