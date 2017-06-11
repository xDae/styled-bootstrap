import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';
import { green } from '../../src/defaultTheme';

import Progress from '../../src/components/Progress';

const GreenProgressBar = styled(Progress.Bar)`
  background-color: ${green};
`;

export default storiesOf('Progress', module)
  .add('Progress', () => (
    <div style={{ width: '80%' }}>
      <Progress>
        <Progress.Bar width="30%" />
      </Progress>
    </div>
  ))
  .add('Progress with label', () => (
    <div style={{ width: '80%' }}>
      <Progress>
        <Progress.Bar width="60%">60%</Progress.Bar>
      </Progress>
    </div>
  ))
  .add('Striped', () => (
    <div style={{ width: '80%' }}>
      <Progress>
        <Progress.Bar width="45%" striped />
      </Progress>
    </div>
  ))
  .add('Multiple bars ', () => (
    <div style={{ width: '80%' }}>
      <Progress>
        <Progress.Bar width="25%"/>
        <GreenProgressBar width="20%" />
      </Progress>
    </div>
  ));
