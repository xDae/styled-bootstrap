import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered';

addDecorator(centered);

setOptions({
  name: 'styled-bootstrap',
  url: 'https://github.com/xDae/styled-bootstrap'
  // goFullScreen: false,
  // showLeftPanel: false,
  // showDownPanel: false,
  // showSearchBox: false,
  // downPanelInRight: false,
  // sortStoriesByKind: false,
});

const req = require.context('./_stories', true, /.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
