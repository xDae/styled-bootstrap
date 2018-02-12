// @flow
import React, { cloneElement } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { borderRadius } from '../utils/src/border-radius';
import { boxShadow } from '../utils/src/box-shadow';

import ProgressBar from './ProgressBar';

import themeProp from '../utils/src/theme';

import {
  progressHeight,
  progressFontSize,
  progressBg,
  progressBorderRadius,
  progressBoxShadow
} from './default-theme';

const StyledProgress = styled.div`
  display: flex;
  overflow: hidden; // force rounded corners by cropping it
  font-size: ${themeProp('progressFontSize', progressFontSize)};
  line-height: ${themeProp('progressHeight', progressHeight)};
  text-align: center;
  background-color: ${themeProp('progressBg', progressBg)};
  ${borderRadius(themeProp('progressBorderRadius', progressBorderRadius))};
  ${boxShadow(themeProp('progressBoxShadow', progressBoxShadow))};
`;

const Progress = props =>
  props.children ? (
    cloneElement(<StyledProgress />, props)
  ) : (
    <StyledProgress>
      <ProgressBar
        width={props.width}
        striped={props.striped}
        animated={props.animated}
      />
    </StyledProgress>
  );

Progress.Bar = ProgressBar;

Progress.defaultProps = {};
Progress.propTypes = {};

export default Progress;
