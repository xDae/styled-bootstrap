import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import styled, { ThemeProvider } from 'styled-components';

import Progress from '../Progress';

const CustomProgressBar = styled(Progress.Bar)`
  background-color: #17a2b8;
`;

const customTheme = {
  progressHeight: '20px',
  progressBarBg: '#dc3545',
  progressBorderRadius: '2px'
};

export default storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      align: 'center',
      width: 500
    })
  )
  .add('Basic', () => <Progress width={text('Width', '30%')} />)
  .add('With children', () => (
    <Progress>
      <Progress.Bar
        width={text('Width', '30%')}
        striped={boolean('Striped', false)}
        animated={boolean('Animated', false)}
      />
    </Progress>
  ))
  .add('With label', () => (
    <Progress>
      <Progress.Bar
        width={text('Width', '60%')}
        striped={boolean('Striped', false)}
        animated={boolean('Animated', false)}
      >
        {text('Text', '6%')}
      </Progress.Bar>
    </Progress>
  ))
  .add('Striped', () => (
    <Progress>
      <Progress.Bar
        width={text('Width', '45%')}
        striped={boolean('Striped', true)}
        animated={boolean('Animated', false)}
      />
    </Progress>
  ))
  .add('Animated', () => (
    <Progress>
      <Progress.Bar
        width={text('Width', '65%')}
        striped={boolean('Striped', true)}
        animated={boolean('Animated', true)}
      />
    </Progress>
  ))
  .add('Multiple bars ', () => (
    <div style={{ width: 500 }}>
      <Progress>
        <Progress.Bar width={text('Width', '25%')} />
        <CustomProgressBar width={text('Width', '30%')} striped />
      </Progress>
    </div>
  ))
  .add('With custom theme ', () => (
    <ThemeProvider theme={customTheme}>
      <Progress
        width={text('Width', '70%')}
        striped={boolean('Striped', true)}
        animated={boolean('Animated', true)}
      />
    </ThemeProvider>
  ));
