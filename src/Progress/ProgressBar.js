// @flow

import styled, { css, keyframes } from 'styled-components';
import { gradientStriped } from '../utils/gradients';
import { transition } from '../utils/transition';

import themeProp from '../utils/theme';

import {
  progressHeight,
  progressBarColor,
  progressBarBg,
  progressBarAnimationTiming,
  progressBarTransition
} from './default-theme';

const progressBarStripes = keyframes`
  from { background-position: ${progressHeight} 0; }
  to { background-position: 0 0; }
`;

const ProgressBar = styled.div.attrs({
  role: 'progressbar'
})`
  height: ${themeProp('progressHeight', progressHeight)};
  width: ${props => props.width};
  line-height: ${themeProp('progressHeight', progressHeight)};
  color: ${themeProp('progressBarColor', progressBarColor)};
  background-color: ${themeProp('progressBarBg', progressBarBg)};
  ${transition(themeProp('progressBarTransition', progressBarTransition))};

  ${props =>
    props.striped &&
    css`
      ${gradientStriped()}
      background-size:
        ${themeProp('progressHeight', progressHeight)}
        ${themeProp('progressHeight', progressHeight)};
  `};

  ${props =>
    props.animated &&
    css`
      animation: ${progressBarStripes}
        ${themeProp('progressBarAnimationTiming', progressBarAnimationTiming)};
    `};
`;

ProgressBar.defaultProps = {};

export default ProgressBar;
