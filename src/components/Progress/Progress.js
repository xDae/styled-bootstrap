// @flow

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { borderRadius } from '../../utils/border-radius';
import { gradientStriped } from '../../utils/gradients';

import {
  progressHeight,
  progressFontSize,
  progressBg,
  progressBorderRadius,
  progressBoxShadow,
  progressBarColor,
  progressBarBg,
  progressBarAnimationTiming,
  progressBarTransition
} from '../../defaultTheme';

const Progress = styled.div`
  display: flex;
  overflow: hidden; // force rounded corners by cropping it
  font-size: ${props => props.theme.progressFontSize};
  line-height: ${props => props.theme.progressHeight};
  text-align: center;
  background-color: ${props => props.theme.progressBg};
  ${props => borderRadius(props.theme.progressBorderRadius)};
  // @include box-shadow($progress-box-shadow);
`;

Progress.Bar = styled.div`
  height: ${props => props.theme.progressHeight};
  width: ${props => props.width};
  line-height: ${props => props.theme.progressHeight};
  color: ${props => props.theme.progressBarColor};
  background-color: ${props => props.theme.progressBarBg};
  // @include transition($progress-bar-transition);

  ${props =>
    props.striped &&
    css`
      ${gradientStriped()}
      background-size: ${props.theme.progressHeight} ${props.theme
      .progressHeight};
  `};
`;

const theme = {
  progressHeight,
  progressFontSize,
  progressBg,
  progressBorderRadius,
  progressBoxShadow,
  progressBarColor,
  progressBarBg,
  progressBarAnimationTiming,
  progressBarTransition
};

Progress.defaultProps = { theme };
Progress.Bar.defaultProps = { theme };

Progress.propTypes = {
  theme: PropTypes.object
};

export default Progress;
